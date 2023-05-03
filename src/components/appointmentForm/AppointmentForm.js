import React from "react";
import {ContactPicker} from "../contactPicker/ContactPicker"


const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        id="title" 
        name="title"
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        placeholder="Title"
        required 
        />
        <ContactPicker
        contacts={contacts}
        onChange={(e) => setContact(e.target.value)}
        //contact={contact}
        value={contact}
      
        />
        <input 
        type="date" 
        id="date" 
        name="date"
        value={date} 
        onChange={(e) => setDate(e.target.value)} 
        placeholder="Date"
        min={getTodayString()}
        required 
        />
        <input 
        type="time" 
        id="time" 
        name="time"
        value={time} 
        onChange={(e) => setTime(e.target.value)} 
        placeholder="Time"
        required 
        />
        <input type="submit" value="Add Appointment" />


        

      </form>

    </div>
  );
};
