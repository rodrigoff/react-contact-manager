import React from "react";
import { Card } from "semantic-ui-react";
import ContactCard from "./ContactCard";

export default function ContactList({ contacts, confirmDeleteContact, deleteContact }) {
  return (
    <Card.Group>
      {contacts.map(contact => {
        return (
          <ContactCard
            key={contact._id}
            contact={contact}
            confirmDeleteContact={confirmDeleteContact}
            deleteContact={deleteContact}
          />
        ); // and this one
      })}
    </Card.Group>
  );
}
