import React, { useState, useEffect } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({contacts, addContact}) => {

  /*
  Define state variables for contact info and duplicate check
  */

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [isDuplicate, setIsDuplicate] = useState(false);

  
  /*
  Add contact info and clear data if the contact name is not a duplicate
  */

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isDuplicate) {
      addContact(name, phone, email);
      setName('');
      setPhone('');
      setEmail('');

    } else {
      alert("Name already taken")
    }
    
  }

  /*
  Using hooks, check for contact name in the contacts array variable in props
  */

  /*
  this is one option, but we in this case we are going to use .some()
  It is generally considered more appropriate for this use case as it is more efficient and returns a boolean value directly.

  useEffect(() => {
    contacts.find((contact) => contact.name === name)
    ? setIsDuplicate(true)
    : setIsDuplicate(false);
  }, [name, contacts]);
  */

  useEffect(() => {
    setIsDuplicate(contacts.some(contact => contact.name === name));
  }, [name, contacts]);
  



  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm
        name={name}
        setName={setName}
        phone={phone}
        setPhone={setPhone}
        email={email}
        setEmail={setEmail}
        handleSubmit={handleSubmit}
        //isDuplicate={isDuplicate}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList data={contacts}/>
      </section>
    </div>
  );
};
