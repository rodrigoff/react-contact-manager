import React, { Component } from "react";
import { connect } from "react-redux";
import ContactList from "../components/ContactList";
import { fetchContacts, deleteContact } from "../actions/contact-actions";
import { openModal } from "../actions/modal-actions";

class ContactListPage extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <div>
        <h1>List of Contacts</h1>
        <ContactList
          contacts={this.props.contacts}
          confirmDeleteContact={this.props.openModal}
          deleteContact={this.props.deleteContact}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    contacts: state.contactStore.contacts
  };
}

export default connect(mapStateToProps, { fetchContacts, deleteContact, openModal })(
  ContactListPage
);
