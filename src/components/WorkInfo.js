import React, { useState } from "react";

const WorkInfo = ({ status }) => {
  let workExperience = {
    company: "",
    title: "",
    startedWork: "",
    endedWork: "",
    description: "",
  };

  const updateState = (e) => {
    console.log(e.target.value);
    let property = e.target.id;
    setWork({ ...work, [property]: e.target.value });
  };
  const [work, setWork] = useState(workExperience);

  if (status === true) {
    return (
      <div>
        <label htmlFor="company">company</label>
        <br></br>
        <input
          onChange={updateState}
          value={work.company}
          id="company"
          type="text"
        />
        <br></br>
        <label htmlFor="jobTitle">Job Title</label>
        <br></br>
        <input
          onChange={updateState}
          value={work.title}
          id="title"
          type="text"
        />
        <br></br>
        <label htmlFor="startedWork">Started</label>
        <br></br>
        <input
          onChange={updateState}
          value={work.started}
          id="startedWork"
          type="date"
        />
        <br></br>
        <label htmlFor="endedWork">Ended</label>
        <br></br>
        <input
          onChange={updateState}
          value={work.ended}
          id="endedWork"
          type="date"
        />
        <br></br>
        <label htmlFor="description">Job Description</label>
        <br></br>
        <input
          onChange={updateState}
          value={work.description}
          id="description"
          type="text"
        />
      </div>
    );
  } else {
    return (
      <div>
        <p>{work.company}</p>
        <br></br>
        <p>{work.title}</p>
        <br></br>
        <label htmlFor="startDate">Started</label>
        <br></br>
        <p>{work.startedWork}</p>
        <br></br>
        <label htmlFor="endDate">Ended</label>
        <br></br>
        <p>{work.endedWork}</p>
        <br></br>
        <p>{work.description}</p>
      </div>
    );
  }
};

export default WorkInfo;
