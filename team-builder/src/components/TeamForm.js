import React, {useState} from "react";

const TeamForm = (props) => {

    const [teams,setTeam] = useState({
        teamName: " ",
        role:" ",
        body:" "
    });

    console.log(teams)

    const onChangeHandler = (event) =>{
        setTeam({
            ...teams,
        [event.target.name]: event.target.value
        })
    }

    console.log(onChangeHandler)

    return (
        <form onSubmit = { event =>{
            //To prevent page from reloading all of react content
            event.preventDefault();
            //Adding results of this TeamForm as input into TeamDisplay 
            props.runTeamSetup(teams)
            }}> 

        <label htmlFor="teamName">Team Name:</label>
        <input
            id = "teamName"
            type = "text"
            name = "teamName"
            placeholder = "Please Enter Your Team Name:"
            value = {teams.teamName}
            onChange ={onChangeHandler}
        />

        <label> Role
            <select id="role" name="role">
                <option value={teams.role}>Backend Engineer </option>
                <option value={teams.role}>frontend Engineer </option>
                <option value={teams.role}> Designer </option>
                <option value={teams.role}> Consultant </option>
            </select>
        </label>

        <label htmlFor="body">Note:</label>
        <textarea
            id="body"
            name="body"
            value={teams.body}
            onChange ={onChangeHandler}
        />

        <button type="submit"> Click To Submit!</button>
        </form>

  );
};

export default TeamForm;
