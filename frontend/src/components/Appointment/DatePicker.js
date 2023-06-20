import React, { useState } from 'react';

function DatePicker({ onDateChange }) {
  // Set the initial state of the date picker to today's date
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Handle changes to the date picker value
  function handleDateChange(event) {
    const date = new Date(event.target.value);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const dateString = `${year}/${month}/${day}`;
    setSelectedDate(date);
    onDateChange(dateString);
  }

  // Render the date picker component
  return (
    <input type="date" value={selectedDate.toISOString().slice(0,10)} onChange={handleDateChange} />
  );
}

export default DatePicker;

  
  