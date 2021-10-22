import "./App.css";
import GeneralInfo from "../components/GeneralInfo"

function App() {
  return (
    <div className="App">
      <GeneralInfo />

      <div>
        <h1>education</h1>
        <label for="school">school</label>
        <br></br>
        <input id="school" type="text" />
        <br></br>
        <label for="degree">degree</label>
        <br></br>
        <input id="degree" type="text" />
        <br></br>
        <label for="startDate">Started</label>
        <br></br>
        <input id="startDate" type="text" />
        <br></br>
        <label for="endDate">Ended</label>
        <br></br>
        <input id="endDate" type="text" />
      </div>

      <div>
        <h1>work experience</h1>
        <label for="company">company</label>
        <br></br>
        <input id="company" type="text" />
        <br></br>
        <label for="jobTitle">Job Title</label>
        <br></br>
        <input id="jobTitle" type="text" />
        <br></br>
        <label for="startDate">Started</label>
        <br></br>
        <input id="startDate" type="text" />
        <br></br>
        <label for="endDate">Ended</label>
        <br></br>
        <input id="endDate" type="text" />
        <br></br>
        <label for="tasks">Job Description</label>
        <br></br>
        <input id="tasks" type="text" />
      </div>
    </div>
  );
}



export default App;
