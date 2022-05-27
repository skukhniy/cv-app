import React from 'react';

export default function GenInfo({ info, setInfo }) {
  function handleChange(e) {
    console.log(e.target.value);
    const { name } = e.target;
    setInfo({ ...info, [name]: e.target.value });
  }

  return (
    <div className="InfoContainer">
      <h1 className="title">General Info</h1>
      <div id="Info">
        <div id="firstName" className="genInfo">
          <p>First Name:</p>
          <input placeholder="First Name" name="firstName" onChange={handleChange} />
        </div>
        <div id="lastName" className="genInfo">
          <p>Last Name:</p>
          <input placeholder="Last Name" name="lastName" onChange={handleChange} />
        </div>
        <div id="email" className="genInfo">
          <p>Email:</p>
          <input placeholder="example@gmail.com" name="email" onChange={handleChange} />
        </div>
        <div id="phoneNumber" className="genInfo">
          <p>Phone Number:</p>
          <input placeholder="123-456-7890" name="phone" onChange={handleChange} />
        </div>
      </div>
    </div>
  );
}
