import React, { useEffect } from 'react';

const AddUser = () => {

    const handleAddUser = event => {
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;

        const user = { name, email };
        console.log(user);

        fetch('http://localhost:5000/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if (data) {
                alert('User successfully added')
            }
        })
        .catch( error => console.error('error', error))

        // clear field
        event.target.name.value = '';
        event.target.email.value = '';
    }
    return (
        <div>
            <h2>Please add user</h2>
            <form onSubmit={handleAddUser}>
                <input type="text" name="name" id="name" placeholder='Name' required />
                <br />
                <input type="email" name="email" id="email" placeholder='Email' required />
                <br />
                <input type="submit" value="Add User" />
            </form>
        </div>
    );
};

export default AddUser;