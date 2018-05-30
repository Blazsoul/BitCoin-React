import React, { Component } from "react";
import { Form, Text } from "react-form";
import {Link} from 'react-router-dom'
import ContactService from "../../../services/ContactService";
class ContactEdit extends Component {
  state = {
    contact: null
  };
  componentDidMount() {
    ContactService.getContactById(this.props.match.params.id)
      .then(contact => {
        console.log('contact',contact);
        if (contact) this.setState({ contact });
        else {}
      })
      .catch(err => {
        this.setState({contact : ContactService.getEmptyContact()})
      });
  }

  saveContact = obj => {
    let newContact = { ...this.state.contact, ...obj };
    ContactService.saveContact(newContact).then(_ => {
      console.log("updated");
      this.props.history.push("/contact");
    });
  };
  renderContact() {
    let contact = this.state.contact;
    if (contact) {
      return (
        <div>
          <div>
            <div className="flex space-between">
              <Link to={`/contact`}>Back</Link>
            </div>
            <img
              className="details-picture"
              src={contact.picture}
              style={{ width: "200px", height: "auto" }}
            />
          </div>
          <Form onSubmit={this.saveContact}>
            {formApi => (
              <form
                className="flex dir-col edit-form"
                onSubmit={formApi.submitForm}
                id="form1"
              >
                <label>
                  Name:{" "}
                  <Text field="name" defaultValue={contact.name} required />
                </label>
                <label>
                  Phone:{" "}
                  <Text field="phone" defaultValue={contact.phone} required />
                </label>
                <label>
                  Email:{" "}
                  <Text field="email" defaultValue={contact.email} required />
                </label>
                <button type="submit">Save</button>
              </form>
            )}
          </Form>
        </div>
      );
    }
  }
  render() {
    return (
      <div>
        <div>{this.renderContact()}</div>
      </div>
    );
  }
}
export default ContactEdit;
