import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {

  return (
    <form on onSubmit={handleSubmit}>
      
      <input 
      type="text" 
      id="name" 
      value={name} 
      onChange={(e) => setName(e.target.value)} 
      placeholder="Contact name"
      required 
      />

      <input 
      type="tel" 
      id="phone" 
      value={phone} 
      onChange={(e) => setPhone(e.target.value)} 
      pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}" 
      placeholder="Contact phone (000-000-0000)"
      required 
      />

      <input 
      type="email" 
      id="email" 
      value={email} 
      onChange={(e) => setEmail(e.target.value)} 
      placeholder="Contact email"
      required />

      
      <input type="submit" value="Add Contact" />
    </form> 
  );
};

