import React, { Component } from 'react';
import ContactList from '../../components/ContactList/ContactList'
import ContactDetails from '../../views/contact/ContactDetailsPage'
import ContactFilter from '../../components/ContactFilter/ContactFilter'
import ContactSevice from '../../services/ContactService'
class ContactPage extends Component {
    renderContacts = (filterBy = null) => {
        console.log(filterBy)
        ContactSevice.getContacts(filterBy).then(contacts => {
            this.setState({contacts})
        })
    }
    state = {
        contacts : [],
        // filterBy: {
        //     txt: ''
        // }
    }
    changeFilterTxt = (txtUser)=>{
        console.log('Got txt',txtUser)
        // this.setState({filterBy:{
        //     txt:txtUser
        // }})
        let filterBy = {txt: txtUser}
        this.renderContacts(filterBy);
       
    }
    componentDidMount() {
        this.renderContacts();
    }

    componentWillUnmount() {
    }
           
    render() {
        return (
        <div>
            <ContactFilter onInput={this.changeFilterTxt}/>
            <ContactList contacts={this.state.contacts}/>
        </div>
        );
    }
}


export default ContactPage;