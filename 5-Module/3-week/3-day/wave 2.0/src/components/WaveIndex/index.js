import { useDispatch, useSelector } from "react-redux";
import { useState } from 'react';
import { addUser } from "../../store/user";
import { addMember, deleteMember } from "../../store/groups";

import urlString from "../utils/ulrString";


import spotify from './spotify.png'
import './waveindex.css'


export const WaveIndexFunction = () => {
	const dispatch = useDispatch()

	const [i, setI] = useState(1)

	const members = useSelector((state)=> state.groups.members)

	const buttonAddUser = () => {
		const obj = {
			'firstName' : 'Alex',
			'lastName' : 'betta',
			'username' : 'alexbetita'
		}
		dispatch(addUser(obj))
	}

	const buttonAddMember = () => {
		dispatch(addMember({
			id: i,
			'name' : 'alex'
		}))

		setI(i+1)
	}

	const deleteMemberInput = (id) => {
		dispatch(deleteMember(id))
	}

	return (
		<div className='wave-body'>
			<h1>
				Welcome to Wave
			</h1>
			<img className={'spotify'} src={spotify} alt='logo'/>
			<h3>
				A spotify clone
			</h3>

			<a href={urlString}>
				Login to Wave
			</a>

			<button onClick={buttonAddUser}>
				Add User
			</button>

			<button onClick={buttonAddMember}>
				Add Member
			</button>

			<input onChange={(e) => deleteMemberInput(e.target.value)}>

			</input>

			{
				Object.entries(members).map(([key, value], i) => {
					return (
					<div key={i}>
						{value.id}
						{value.name}
					</div>)
				})
			}
		</div>
)}
