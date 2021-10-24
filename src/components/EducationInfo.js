import React, { useState } from "react";

function EducationInfo({ status }) {
  let education = {
    school: "",
    degree: "",
    started: "",
    ended: "",
  };

  const updateState = (e) => {
    let property = e.target.id;
    console.log(property);
    setEdu({ ...edu, [property]: e.target.value });
  };

  const [edu, setEdu] = useState(education);

  if (status === true) {
    return (
      <div>
        <label htmlFor="school">school</label>
        <br></br>
        <input
          onChange={updateState}
          value={edu.school}
          id="school"
          type="text"
        />
        <br></br>
        <label htmlFor="degree">degree</label>
        <br></br>
        <input
          onChange={updateState}
          value={edu.degree}
          id="degree"
          type="text"
        />
        <br></br>
        <label htmlFor="started">Started</label>
        <br></br>
        <input
          onChange={updateState}
          value={edu.started}
          id="started"
          type="date"
        />
        <br></br>
        <label htmlFor="ended">Ended</label>
        <br></br>
        <input
          onChange={updateState}
          value={edu.ended}
          id="ended"
          type="date"
        />
        <br></br>
      </div>
    );
  } else {
    return (
      <div>
        <label htmlFor="school">school</label>
        <br></br>
        <p>{edu.school}</p>
        <br></br>
        <label htmlFor="degree">degree</label>
        <br></br>
        <p>{edu.degree}</p>
        <br></br>
        <label htmlFor="startDate">Started</label>
        <br></br>
        <p>{edu.started}</p>
        <br></br>
        <label htmlFor="endDate">Ended</label>
        <br></br>
        <p>{edu.ended}</p>
        <br></br>
      </div>
    );
  }
}

export default EducationInfo;
