import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateUser = () => {
    const [user, setUser] = useState({});
    const {userId} = useParams();

    useEffect( () => {
        const url = `http://localhost:5000/user/${userId}`;

        fetch(url)
        .then(res => res.json())
        .then(data => setUser(data))
    }, [])

    const handleUpdateUser = event => {
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;

        const user = { name, email };

        fetch(`http://localhost:5000/user/${userId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if (data) {
                event.target.reset();
                alert('User successfully updated');
            }
        })
        .catch( error => console.error('error', error))

        // clear field
        event.target.name.value = '';
        event.target.email.value = '';
    }
    return (
        <div style={{textAlign: 'center'}}>
            <h2>Update User : {user.name}</h2>
            <form onSubmit={handleUpdateUser}>
                <input type="text" name="name" id="name" placeholder='Name' required />
                <br />
                <input type="email" name="email" id="email" placeholder='Email' required />
                <br />
                <input type="submit" value="Update Profile" />
            </form>
        </div>
    );
};

export default UpdateUser;