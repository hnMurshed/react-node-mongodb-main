import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const usersStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '20px'
}

const Users = () => {
    const [users, setUsers] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, []);

    const handleDeleteUser = _id => {
        const proceed = window.confirm('Are you sure you want to delete?');

        if (proceed) {
            fetch(`http://localhost:5000/user/${_id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: null
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        console.log('User', _id, 'is deleted');
                        const remaining = users.filter(user => user._id !== _id);
                        setUsers(remaining);
                    }
                    
                })
        }
    }
    return (
        <div>
            <h2>All our users: {users.length}</h2>
            <div style={usersStyle}>
                {
                    users.map(user => <div key={user._id}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <h4>{user.name}</h4>
                            <button onClick={() => handleDeleteUser(user._id)}>X</button>
                        </div>
                        <p style={{margin: '0'}}><strong>Email: </strong>{user.email}</p>
                        <Link to={`/update/${user._id}`}>Edit Profile</Link>
                    </div>)
                }
            </div>
            <div style={{marginTop: '10px', textAlign: 'center'}}>
                <button onClick={() => navigate('/user/add')}>Add New User</button>
            </div>
        </div>
    );
};

export default Users;