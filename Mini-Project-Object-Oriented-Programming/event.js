$(document).ready(() => {
    class Event {
        constructor(name, description, date) {
            this.name = name;
            this.description = description;
            this.availableTickets = [];
            this.eventDate = date;
        };
        
        // creates ticket type for events by adding name of ticket type and price
        addAvailableTickets(name, price) {
            //   console.log(this.availableTickets);
            //   console.log(new TicketType(name, price));
            this.availableTickets.push(new TicketType(name, price));
        }
        
        // displays all tickets in availableTickets
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
            if (upper < 0 || lower < 0) {
                return "Please provide a whole number"
            }

            let applicableTickets = [];
            let applicableTicketsMessage = '';
            for (let i = 0; i < this.availableTickets.length; i++) {
                let name = this.availableTickets[i].name;
                let price = this.availableTickets[i].price;
                if (price >= lower && price <= upper) {
                    applicableTickets.push(this.availableTickets[i])
                    applicableTicketsMessage += ` ${applicableTickets.length}. ${name} ($${price})`; // to get correct sequential order
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
        
    
    // initialize the event objects that'll be displayed
    const eventObj1 = new Event("KLOS Golden Gala", "An evening with hollywood vampires", new Date(2020, 02, 04));
    const eventObj2 = new Event("Skillet & Sevendust", "Victorious war tour", new Date(2020, 10, 22));
    const eventObj3 = new Event("Jenny Lewis", "On the line tour 2019", new Date(2021, 07, 14));
    
    
    // add the tickets for each event
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
        // displays all tickets
        // html += `<li>${item.name} - ${item.description} - All Tickets: ${item.allTickets()}</li>`;

        // displays tickets within a range
        html += `<li>${item.name} - ${item.description} - ${moment(item.eventDate).format('MMMM Do YYYY')} - Eligible tickets: ${item.searchTickets(0,100)}</li>`;
    });
    // insert final html into #event
    $("#event").html(html);
})

