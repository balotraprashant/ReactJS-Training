import React, { useState } from 'react';

const App = () => {
    const [username, setUsername] = useState('');
    const [userList, setUserList] = useState([]);

    const handleInputChange = (e) => {
        setUsername(e.target.value);
    };

    const handleAddUser = () => {
        if (username.trim() !== '') {
            setUserList([...userList, username]);
            setUsername('');
        }
    };

    return (
        <div>
            <h1>Hello World</h1>
            <div>
                <input type="text" value={username} onChange={handleInputChange} />
                <button onClick={handleAddUser}>Add</button>
            </div>
            <div>
                <h2>User List</h2>
                <ul>
                    {userList.map((user, index) => (
                        <li key={index}>{user}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default App;