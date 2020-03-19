import React, { useState } from 'react'

const UserForm = props => {
    const [formState, setFormState] = useState({
        username: '',
        email: '',
        role: ''
    })

    const changeHandler = event => {
        // set the state by spreading the data and setting it to the field name and value
        setFormState({
          ...formState,
          [event.target.name]: event.target.value
        });
    };
    
    const formSubmitHandler = event => {
    // console.log("in the form submit handler");
    // prevent refresh
        event.preventDefault();
        // send state for users, spread over the new state and add the id
        props.newUser({
            ...formState,
            id: Date.now()
        });
        setFormState({
            // reset the state after submit
            username: '',
            email: '',
            role: ''
        });
    };

    return(
        <form onSubmit={formSubmitHandler}>
            <label htmlFor="username">Username: </label>
            <input
                type="text"
                name="username"
                id="username"
                value={formState.username}
                onChange={changeHandler}
                placeholder="This is the username"
            />
            <label htmlFor="email">Email: </label>
            <input
                type="text"
                name="email"
                id="email"
                value={formState.email}
                onChange={changeHandler}
                placeholder="This is the email"
            />
            <label htmlFor="role">Role: </label>
            <input
                type="text"
                name="role"
                id="role"
                value={formState.role}
                onChange={changeHandler}
                placeholder="This is the role"
            /><br />
            <button type="submit">Register</button>
        </form>
    )
}

export default UserForm