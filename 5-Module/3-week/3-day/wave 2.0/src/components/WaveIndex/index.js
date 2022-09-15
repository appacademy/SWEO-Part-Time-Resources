import { useDispatch, useSelector } from "react-redux";
import { useState } from 'react'
import { addTrack, deleteTrack } from "../../store/songs";

import urlString from "../utils/ulrString";


import spotify from './spotify.png'
import './waveindex.css'


export const WaveIndexFunction = () => {

	const [i, setI] = useState(1)

	const dispatch = useDispatch()

	const tracks = useSelector(state => {
		return state.songs.tracks
	})

	const sendDispatch = () => {
		dispatch(addTrack({
			id: i,
			title: 'dancing in the dark'
		}))
		setI(i+1)
	}

	const deleteTrackFunction = (id) => {
		dispatch(deleteTrack(id))
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
			<button onClick={sendDispatch}>
				Send Dispatch
			</button>

			<input onChange={(e)=>{
				deleteTrackFunction(e.target.value)
			}}>

			</input>
			{
				Object.entries(tracks).map(([key,value], i)=> {
					return (
					<div key={i}>
						{value.title}
					</div>)
				})
			}
		</div>
)}
