import React, { Component } from "react";
import ContactService from "../../../services/ContactService";
import {Link} from 'react-router-dom'

class ContactDetailsPage extends Component {
  // console.log(props.match.params.id);
  state = {
    contact: null
  };
  componentDidMount(){
    ContactService.getContactById(this.props.match.params.id).then(contact => {
    console.log(contact);
    this.setState({ contact });
  });
  }

  renderContact() {
   
      let contact = this.state.contact;
    if (contact) {
    return (
    <div>
        <div className="flex space-between">
        <Link to={`/contact`}>Back</Link>
        <Link to={`/contact/${contact._id}/edit`}>Edit</Link>
        </div>
        <div><img className="details-picture" src={contact.picture} style={{width:'200px' ,height:'auto'}}/></div>
        <p className="details-name ">{contact.name}</p>
        <p className="details-phone ">{contact.phone}</p>
        <p className="details-email ">{contact.email}</p>
    </div>
    )
    }
  }
  render() {
    return (
      <div className="details-info">
        <div>{this.renderContact()}</div>
      </div>
    );
  }
}

export default ContactDetailsPage;
