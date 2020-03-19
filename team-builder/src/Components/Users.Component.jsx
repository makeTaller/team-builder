import React from 'react'
import styled from 'styled-components'

const Users = props => {    
    // console.log(props.regUsers)
    const Container = styled.div` 
        padding: 10px;
        width: 50%;
        margin: 15px auto;
    `;
    const RegList = styled.div` 
        padding: 10px;
        width: 75%;
        margin: 15px auto;
        text-align: left;
        border: black 1px solid;
        background-color: rgba(149,165,166,.6 );
    `;

    return(
        <Container className='regUsers-container'>            
            {// map through the data being sent
                props.regUsers.map(user => (
                <RegList className="regUserList" key={user.id}>
                    <p><b>User</b></p>
                    <p><b>ID:</b> {user.id}</p>
                    <p><b>Username:</b> {user.username}</p>
                    <p><b>Email:</b> {user.email}</p>
                    <p><b>Role:</b> {user.role}</p>
                </RegList>
            ))}
        </Container>
    )
}

export default Users