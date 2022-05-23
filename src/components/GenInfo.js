import React from 'react';

export default function GenInfo() {
  return (
    <div id="genInfoContainer">
      <h1 className="title">General Info</h1>
      <div id="genInfo">
        <div id="firstName" className="genInfo">
          <p>First Name:</p>
          <input placeholder="First Name" />
        </div>
        <div id="lastName" className="genInfo">
          <p>Last Name:</p>
          <input placeholder="Last Name" />
        </div>
        <div id="email" className="genInfo">
          <p>Email:</p>
          <input placeholder="example@gmail.com" />
        </div>
        <div id="phoneNumber" className="genInfo">
          <p>Phone Number:</p>
          <input placeholder="123-456-7890" />
        </div>
      </div>
    </div>
  );
}
