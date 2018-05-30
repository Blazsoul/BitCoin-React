import React, { Component } from 'react';
import { BrowserRouter as Router,Switch, Route, Link,NavLink } from 'react-router-dom'

import './App.css';
import ContactPage from './views/contact/ContactApp/ContactPage'
import ContactEdit from './views/contact/ContactEdit/ContactEditPage'
import ContactDetails from './views/contact/ContactDetails/ContactDetailsPage'
import NavBar from './components/NavBar/NavBar'


class App extends Component {
  Home = () => <h1>Home</h1>;
  About = () => <h1>About</h1>;
  
  render() {
    return (
      <div className="App">
      <Router>
        <div>
        <NavBar></NavBar>
        
        <Route>
          <Switch>
             <Route exact path="/contact/:id/edit" component={ContactEdit} />  
             <Route exact path="/contact/edit" component={ContactEdit} />  
             <Route exact path="/contact/:id" component={ContactDetails} />  
             <Route exact path="/contact" component={ContactPage} />  
             <Route path="/about" component={this.About} />  
             <Route exact path="/" component={this.Home} />  
          </Switch>
        </Route>
        </div>
        </Router>
       
      </div>
    );
  }
}

export default App;
