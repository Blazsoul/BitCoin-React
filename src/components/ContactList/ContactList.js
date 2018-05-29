import React from 'react';
import ContactPreview from '../ContactPreview/ContactPreview'
import {Link} from 'react-router-dom'


const ContactList = (props) => {
    console.log('contacts!!!',props.contacts)
    
    const renderContacts = props.contacts.map((contact) => {
        let route = `/contact/${contact._id}`;
        return (
            <li key={contact._id} className="contact-preview">
                <Link to={route}>
                    <ContactPreview  contact={contact}/>
                </Link>
            </li>
        )
    })
    

    return (
        <div className="contacts-list">
          
            <div>
                <ul>
                {renderContacts}
                </ul>
            </div>
           
        </div>
    )
}
            
export default ContactList;