import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
	const [users, setUsers] = useState([]);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [image, setImage] = useState(null);

	useEffect(() => {
		async function fetchUsers() {
			try {
				const response = await axios.get('/users');
				setUsers(response.data);
			} catch (error) {
				console.error("Error fetching users:", error);
			}
		}

		fetchUsers();
	}, []);

	const addUser = async () => {
		try {
			const formData = new FormData();
			formData.append("email", email);
			formData.append("password", password);
			if (image) formData.append("image", image);

			const response = await axios.post('/users', formData);

			setUsers([...users, response.data]);
			setEmail("");
			setPassword("");
		} catch (error) {
			console.error("Error adding user:", error);
		}
	};

	const updateFile = e => {
		const file = e.target.files[0];
		if (file) setImage(file);
	};

	return (
		<div className="App">
			<h1>Users</h1>
			<ul>
				{users.map(user => (
					<li key={user.id}>
						Email: {user.email} Image: <img src={user.profileImageUrl} alt='123' />
					</li>
				))}
			</ul>
			<div>
				<input
					value={email}
					onChange={e => setEmail(e.target.value)}
					placeholder="Email"
				/>
				<input
					type="password"
					value={password}
					onChange={e => setPassword(e.target.value)}
					placeholder="Password"
				/>
				<label>
					Avatar
					<input type="file" onChange={updateFile} />
				</label>
				<button onClick={addUser}>Add User</button>
			</div>
		</div>
	);
}

export default App;
