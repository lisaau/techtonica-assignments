$(document).ready(() => {
    class Event {
        constructor(name, description) {
            this.name = name;
            this.description = description;
            this.availableTickets = []
        };
        
        // creates ticket type for events by adding name of ticket type and price
        addAvailableTickets(name, price) {
            //   console.log(this.availableTickets);
            //   console.log(new TicketType(name, price));
            this.availableTickets.push(new TicketType(name, price));
        }
        
        allTickets() {
            let name;
            let price;
            let allTicketsMessage = '';
            for (let i = 0; i < this.availableTickets.length; i++) {
                name = this.availableTickets[i].name;
                price = this.availableTickets[i].price;
                allTicketsMessage += ` ${i + 1}. ${name} ($${price})`; 
            }
            //console.log(typeof allTicketsMessage)
            return allTicketsMessage;
        }
    
        // take in two values (to specify the lower and upper bounds of a price range), and return a list of ticket types available
        searchTickets(lower, upper) {
            let applicableTickets = [];
            let applicableTicketsMessage = '';
            for (let i = 0; i < this.availableTickets.length; i++) {
                let name = this.availableTickets[i].name;
                let price = this.availableTickets[i].price;
                if (price > lower && price < upper) {
                    // console.log(this.availableTickets[i]);
                    applicableTickets.push(this.availableTickets[i])
                    applicableTicketsMessage += ` ${i}. ${name} ($${price})`;
                }
            }
            if (applicableTickets.length === 0 ) {
                return "No Tickets Available";
            } else {
                return applicableTicketsMessage;
            }
        }
    }
        
    class TicketType {
        constructor(name, price) {
            this.name = name;
            this.price = price;
        }
    }
        
    
    const eventObj1 = new Event("KLOS Golden Gala", "An evening with hollywood vampires");
    const eventObj2 = new Event("Skillet & Sevendust", "Victorious war tour");
    const eventObj3 = new Event("Jenny Lewis", "On the line tour 2019");
    
    
    
    eventObj1.addAvailableTickets("human", 299);
    eventObj1.addAvailableTickets("vampire", 99);
    
    eventObj2.addAvailableTickets("General Admission", 25)
    eventObj2.addAvailableTickets("Floor Seating", 80)
    
    eventObj3.addAvailableTickets("Orchestra", 300)
    eventObj3.addAvailableTickets("Mezzanine", 200)
    eventObj3.addAvailableTickets("Balcony", 100)
    

    const eventArray = new Array();
    // pushing multiple objects to an array at once
    eventArray.push(eventObj1, eventObj2, eventObj3);

    // load available events into HTML
    let html = '';
    $.each(eventArray, (index, item) => {
        // html += `<li>${item.name} - ${item.description} - All Tickets: ${item.allTickets()}</li>`;
        html += `<li>${item.name} - ${item.description} - Eligible tickets: ${item.searchTickets(0,100)}</li>`;
    });
    // insert final html into #event
    $("#event").html(html);
})