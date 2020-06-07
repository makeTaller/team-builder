import React, {useState} from 'react';
import logo from './logo.svg';
import TeamForm from './components/TeamForm.js';
import TeamDisplay from './components/TeamDisplay.js'
import './App.css';

function App() {

    const [teamMembers, setTeamMembers] = useState([{
        id:Date.now(),
        teamName:"Red",
        role:"Backend Engineer",
        body:"Janitor",
    }]);

    const runTeamSetup = (newTeam) =>{
          setTeamMembers([...teamMembers, newTeam])
    } 

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            <TeamForm runTeamSetup={runTeamSetup} />
            <TeamDisplay teamMembers={teamMembers} />
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
