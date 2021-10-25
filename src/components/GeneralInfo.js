import React, { useState } from "react";
import '../index.css'
const GeneralInfo = ({ status }) => {
  let info = {
    name: "",
    phone: "",
    email: "",
  };

  const updateState = (e) => {
    let property = e.target.id;
    console.log(property);
    setGeneral({ ...general, [property]: e.target.value });
  };

  const [general, setGeneral] = useState(info);
  if (status === true) {
    return (
      <div >
        <h1>General Information</h1>
        <label htmlFor="name">name</label>
        <br></br>
        <input
          onChange={updateState}
          value={general.name}
          className="text"
          id="name"
          type="text"
        />
        <br></br>
        <label htmlFor="phone">phone number</label>
        <br></br>
        <input
          onChange={updateState}
          value={general.phone}
          className="text"
          id="phone"
          type="text"
        />
        <br></br>
        <label htmlFor="email">email</label>
        <br></br>
        <input
          onChange={updateState}
          value={general.email}
          className="text"
          id="email"
          type="text"
        />
      </div>
    );
  } else {
    return (
      <div>
        <h1>General Information</h1>
        <p>{general.name}</p>
        <br></br>
        <p>{general.phone}</p>
        <br></br>
        <p>{general.email}</p>
      </div>
    );
  }
};

export default GeneralInfo;
