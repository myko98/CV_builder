import "./App.css";
import GeneralInfo from "../components/GeneralInfo";
import WorkInfo from "../components/WorkInfo";
import EducationInfo from "../components/EducationInfo";
import { useState } from "react";

function App() {

  //FUNCTIONS FOR EDUCATION SECTION
  //increments and updates count state used for edu array
  const addEdu = () => {
    setCounter(count + 1);
    setEdu([...edu, count]);
  }
  //filters edu array to include all values that are not equal to index
  const removeEdu = (index) => {
    let newEdu = edu.filter((num) => num !== index);
    setEdu(newEdu);
  };


  //FUNCTIONS FOR WORK EXPERIENCE SECTION
  const addJob = () => {
    setCount2(count+1);
    setJob([...job,count2])
  }
  const removeJob = (index) => {
    let newJob = job.filter((num) => num !== index);
    setJob(newJob)
  }

  //useStates
  const [status, setStatus] = useState(true);
  const [count, setCounter] = useState(0);
  const [edu, setEdu] = useState([]);
  const [count2,setCount2] = useState(0);
  const [job,setJob] = useState([]);

  return (
    <div className="App">
      <div className="CV">
        <button
          onClick={() => {
            setStatus(!status);
          }}
          type="button"
        >
          Edit/Save
        </button>
        <GeneralInfo className="pog" status={status} />

        {/* education section */}
        <h1>education</h1>
        <button onClick={addEdu}>Add</button>
        <EducationInfo status={status} />
        {edu.map((index) => (
          <>
            <EducationInfo status={status} />
            <button onClick={() => removeEdu(index)}>Delete</button>
          </>
        ))}

        {/* work experience section */}
        <h1>work experience</h1>
        <button onClick={addJob}>Add</button>
        <WorkInfo status={status}/>
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
