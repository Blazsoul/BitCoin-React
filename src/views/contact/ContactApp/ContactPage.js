import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getContacts } from "../../../store/contact/actions";

import ContactList from "../../../components/ContactList/ContactList";
import ContactDetails from "../ContactDetails/ContactDetailsPage";
import ContactFilter from "../../../components/ContactFilter/ContactFilter";
import ContactSevice from "../../../services/ContactService";

class ContactPage extends Component {

  componentDidMount() {
    this.props.loadContacts();
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("------------------------------------");
    console.log('new props',this.props)
    // console.log("componentDidUpdate", { prevProps, prevState, snapshot });
    console.log("------------------------------------");
  }

  changeFilterTxt = txtUser => {
    console.log("Got txt", txtUser);
    let filterBy = { txt: txtUser };
    this.props.loadContacts(filterBy);
  };

  render() {
    return (
      <div>
        <ContactFilter onInput={this.changeFilterTxt} />
        <ContactList contacts={this.props.contacts} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    contacts: state.contactsReducer.contacts
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    loadContacts: getContacts
    },dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactPage);
