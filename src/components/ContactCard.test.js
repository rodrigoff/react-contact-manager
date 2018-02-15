import React from "react";
import { mount } from "enzyme";
import { BrowserRouter } from "react-router-dom";
import { Card } from "semantic-ui-react";

import ContactCard from "./ContactCard";

test("ContactCard renders a contact", () => {
  const contact = {
    name: {
      first: "Peter",
      last: "Parker"
    },
    phone: "+1999888777",
    email: "peter.parker@avengers.com"
  };

  const contactCard = mount(
    <BrowserRouter>
      <ContactCard contact={contact} />
    </BrowserRouter>
  );

  const renderedName = contactCard
    .find(Card.Header)
    .text()
    .trim();

  expect(renderedName).toEqual(`${contact.name.first} ${contact.name.last}`);
  const paragraphsInDescription = contactCard.find(Card.Description).find("p");

  const renderedPhone = paragraphsInDescription
    .first()
    .text()
    .trim();
  expect(renderedPhone).toEqual(contact.phone);

  const renderedEmail = paragraphsInDescription
    .last()
    .text()
    .trim();
  expect(renderedEmail).toEqual(contact.email);
});
