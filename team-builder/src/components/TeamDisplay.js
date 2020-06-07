import React from "react";

const TeamDisplay = (props) =>{

    return (
        <div>
            <h1>Team Members</h1>
            <div>
                {props.teamMembers.map( (teamMember) =>(
                    <div key={teamMember.id}>
                        <h2>{teamMember.teamName}</h2>
                        <p>{teamMember.role}</p>
                        <p>{teamMember.body}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default TeamDisplay;
