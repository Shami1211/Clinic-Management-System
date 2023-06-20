
import React from "react";
import "./AttendanceMember.js";

const AttendanceMember = () => {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="nicNumber">NIC Number:</label>
        <input type="text" id="nicNumber" name="nicNumber" />
      </div>
      <div className="form-group">
        <label htmlFor="fullName">Full Name:</label>
        <input type="text" id="fullName" name="fullName" />
      </div>
      <div className="form-group">
        <label htmlFor="time">Time:</label>
        <input type="text" id="time" name="time" />
      </div>
      <div className="form-group">
        <label htmlFor="position">Position:</label>
        <input type="text" id="position" name="position" />
      </div>
      <button type="submit" className="submit-button">Submit</button>
    </form>
  );
};

export default AttendanceMember;
