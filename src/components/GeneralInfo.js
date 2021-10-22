import React from "react";

function GeneralInfo() {
  return (
    <div>
      <h1>General Information</h1>
      <label for="name">name</label>
      <br></br>
      <input id="name" type="text" />
      <br></br>
      <label for="phone">phone number</label>
      <br></br>
      <input id="phone" type="text" />
      <br></br>
      <label for="email">email</label>
      <br></br>
      <input id="email" type="text" />
      <button type="button">Edit/Save</button>
    </div>
  );
}

export default GeneralInfo;
