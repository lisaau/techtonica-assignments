import React from 'react';
import './App.css';

import {Container, Row, Col} from 'react-bootstrap';

import Banner from './components/Banner';
import NavBar from './components/NavBar';

// import UserManagement from './components/UserManagementHooks' 
// import UserManagementClass from './UserManagementClass' 
import UserDisplayComponent from './components/UserDisplayComponent';
import UserAddForm from './components/UserAddForm'; 
import UserDeleteForm from './components/UserDeleteForm'; 

import EventDisplayComponent from './components/EventDisplayComponent';
import EventAddForm from './components/EventAddForm'; 
import EventDeleteForm from './components/EventDeleteForm'; 
// import TicketMaster from './components/TicketMaster' 
// import EventSearchAndSave from './components/EventSearchAndSave' 

import EventDateSearchForm from './components/EventDateSearchForm'
import EventCategorySearchForm from './components/EventCategorySearchForm'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      events: null,
      eventsByDate: null,
      eventsByCategory: null
    }
  }

  fetchEvents() {
    fetch("/events", {
      methods: "GET",
      headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
  })
    .then(res => res.json())
    .then(res => {
      console.log('res of fetchEvents', typeof res, res);
      this.setState({ events: res })
    });
  }

  fetchEventsByDate(dateString) {
    return fetch(`/events-by-date?dateString=${dateString}`, {
      method: "GET"
    })
      .then(res => res.json())
      .then(res => {
        console.log('res of fetchEventsByDate', typeof res, res);
        this.setState({ eventsByDate: res })
        console.log(this.state.eventsByDate)
      });
  }

  fetchEventsByCategory(eventCategory) {
    return fetch(`/events-by-category?eventCategory=${eventCategory}`, {
      method: "GET"
    })
      .then(res => res.json())
      .then(res => {
        console.log('res of fetchEventsByCategory', typeof res, res);
        this.setState({ eventsByCategory: res })
        console.log(this.state.eventsByCategory)
      });
  }

  fetchUsers() {
    fetch("/users", {
      methods: "GET",
      headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
  })
      .then(res => res.json())
      .then(res => {
        console.log('res of fetchUsers', typeof res, res);
        this.setState({ users: res })
      });
  }

  addEventCall(name, date, category, location) {
    return fetch("/event", {
      method: "POST",
      headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         },
      body: JSON.stringify({
        'eventName': name,
        'eventDate': date,
        'eventCategory': category,
        'eventLocation': location,
      })   
    })
      .then(res => res.json())
      .then(res => {
        console.log('res of addEventCall', typeof res, res);
        return res
      })
  }

  addUserCall(name) {
    return fetch("/user", {
      method: "POST",
      headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         },
      body: JSON.stringify({
        'userName': name,
      })   
    })
      .then(res => res.json())
      .then(res => {
        console.log('res of addUserCall', typeof res, res);
        return res
      })
  }

  deleteEventCall(id) {
    return fetch("/event", {
      method: "DELETE",
      headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         },
      body: JSON.stringify({
        'eventID': id,
      })   
    })
      .then(res => {
        console.log('res of deleteEventCall', typeof res, res);
        return res
      })
  }

  deleteUserCall(id) {
    return fetch("/user", {
      method: "DELETE",
      headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         },
      body: JSON.stringify({
        'userID': id,
      })   
    })
      .then(res => {
        console.log('res of deleteUserCall', typeof res, res);
        return res
      })
  }

  componentWillMount() {
    this.fetchUsers();
    this.fetchEvents();
  }

  onDateSearch(dateString) { 
    this.setState({dateSearchLoading: true})
    this.fetchEventsByDate(dateString).then( () => this.setState({dateSearchLoading: false}));
  }
  
  onCategorySearch(eventCategory) { 
    this.setState({categorySearchLoading: true});
    this.fetchEventsByCategory(eventCategory).then( () => this.setState({categorySearchLoading: false}));
  }
  
  render (){
    return (
    <div className="App">
      <NavBar />
      <Container>
        <Banner />
        <Row>
          <h2 id='#user-management-header' style={{color: "#425478", textDecorationLine: 'underline'}}>User Management</h2>
        </Row>
        <Row>
          <Col>
            <UserDisplayComponent users={this.state.users}/>
          </Col>
          <Col>
            <UserAddForm onAddUser={ name => {
              this.addUserCall(name).then(() => this.fetchUsers());
            }}/>
            <UserDeleteForm 
              onDeleteUser={ id => {
              this.deleteUserCall(id).then(() => this.fetchUsers());
              }}/>
          </Col>
        </Row>

        <Row><h2 id='#event-management-header' style={{color: "#425478", textDecorationLine: 'underline'}}>Event Management</h2></Row>
        <Row>
          <Col>
            <EventDisplayComponent events={this.state.events} header='All Events'/>
          </Col>
          <Col>
            <EventAddForm onAddEvent={ (name, date, category, location) => {
              this.addEventCall(name, date, category, location).then( () => this.fetchEvents());
            }}/>
            <EventDeleteForm onDeleteEvent={ id => {
              this.deleteEventCall(id).then( () => this.fetchEvents());
            }}/>
          </Col>
        </Row>
        {/* <TicketMaster /> */}
        {/* <EventSearchAndSave /> */}

        <Row><h2 id='#event-search' style={{color: "#425478", textDecorationLine: 'underline'}}>Event Search</h2></Row>
        <Row>
          <Col>
            <EventDateSearchForm onSearchEvent={this.onDateSearch.bind(this)}/>
            <EventDisplayComponent events={this.state.eventsByDate} header='Results' loading={this.state.dateSearchLoading}/>
          </Col>
          <Col>
            <EventCategorySearchForm onSearchEvent={this.onCategorySearch.bind(this)}/>
            <EventDisplayComponent events={this.state.eventsByCategory} header='Results' loading={this.state.categorySearchLoading}/>
          </Col>
        </Row>
      </Container>
    </div>
  )};
}

export default App;
