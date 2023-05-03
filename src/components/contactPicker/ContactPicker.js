
/*
import React from "react";

export const ContactPicker = () => {
  return (
    <></>
  );
};
*/


import React from "react";

export const ContactPicker = ({ contacts, onChange, value, name }) => {
  return (
    <select onChange={onChange} value={value} name={name}>
      <option value="">No Contact Selected</option>
      {contacts && contacts.map((contact) => (
        <option key={contact.name} value={contact.name}>
          {contact.name}
        </option>
      ))}
    </select>
  );
};






/*

import React from "react";

export const ContactPicker = ({ contacts, onChange, contact }) => {
  return (
    <select onChange={onChange} value={contact}>
      <option value="">No Contact Selected</option>
      {contacts && contacts.map((contact) => (
        <option key={contact.name} value={contact.name}>
          {contact.name}
        </option>
      ))}
    </select>
  );
};

*/