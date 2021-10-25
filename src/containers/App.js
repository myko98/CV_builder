import "./App.css";
import GeneralInfo from "../components/GeneralInfo";
import WorkInfo from "../components/WorkInfo";
import EducationInfo from "../components/EducationInfo";
import { useState } from "react";

function App() {
  const isSubmit = () => {
    setStatus(false);
    document.querySelectorAll("button").forEach((butt) => butt.remove());
  };

  const editForm = () => {
    let x = document.querySelectorAll("EducationInfo");
    console.log(x);
    setStatus(!status);
  };

  //FUNCTIONS FOR EDUCATION SECTION
  //increments and updates count state used for edu array
  const addEdu = () => {
    setCounter(count + 1);
    setEdu([...edu, count]);
  };
  //filters edu array to include all values that are not equal to index
  const removeEdu = (index) => {
    let newEdu = edu.filter((num) => num !== index);
    setEdu(newEdu);
  };

  //FUNCTIONS FOR WORK EXPERIENCE SECTION
  const addJob = () => {
    setCount2(count + 1);
    setJob([...job, count2]);
  };
  const removeJob = (index) => {
    let newJob = job.filter((num) => num !== index);
    setJob(newJob);
  };

  //useStates
  const [status, setStatus] = useState(true);
  const [count, setCounter] = useState(0);
  const [edu, setEdu] = useState([]);
  const [count2, setCount2] = useState(0);
  const [job, setJob] = useState([]);

  return (
    <div className="App">
      <div className="CV">
        <button onClick={editForm} type="button">
          Edit/Save
        </button>

        <button onClick={isSubmit} type="button">
          Submit Form
        </button>
        <GeneralInfo status={status} />

        {/* education section */}
        <h1>Education</h1>
        <button onClick={addEdu}>Add</button>
        <EducationInfo id="hi" status={status} />
        {edu.map((index) => (
          <>
            <div className="container">
              <EducationInfo status={status} />
              <button onClick={() => removeEdu(index)}>Delete</button>
            </div>
          </>
        ))}

        {/* work experience section */}
        <h1>Work Experience</h1>
        <button onClick={addJob}>Add</button>
        <WorkInfo status={status} />
        {job.map((index) => (
          <>
            <WorkInfo status={status} />
            <button onClick={() => removeJob(index)}>Delete</button>
          </>
        ))}
      </div>
    </div>
  );
}

export default App;
