import React from 'react'
import logo from '../../logo.svg';
import { NavLink } from 'react-router-dom'

const NavBar = () => {

    return (
        <header className="App-header">
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg" className="App-logo" alt="logo" />
          <div>
            <NavLink exact to="/" activeClassName="selectedNav">Home</NavLink> |
            <NavLink exact to="/contact" activeClassName="selectedNav"> Contacts</NavLink> |
            <NavLink to="/about" activeClassName="selectedNav"> About</NavLink> 
          </div>
          <h1 className="App-title">BitCoin Market</h1>
        </header>
    )
}
export default NavBar;