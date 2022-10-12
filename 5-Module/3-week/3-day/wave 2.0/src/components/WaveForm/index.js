import { useState } from 'react'

import './waveform.css'
import combineParams from '../utils/combineParams';

const WaveFormFunction =({access_token, updateSongs, togglePlayer, setPlayerOffset}) => {

	const [params, setParams] = useState({
			q: 'q=',
			type: 'type=',
			limit: 'limit=',
			offset: 'offset=',
	});


	const search = async (e, params, access_token) => {
		e.preventDefault();

		const combinedParams = combineParams(params)

		const resObj = await fetch(`https://api.spotify.com/v1/search?${combinedParams}`, {
			headers: {
				Authorization: `Bearer ${access_token}`
			}
		})

		if(resObj.status !== 200){
			alert('No results found!')
		} else {
			const resJson = await resObj.json();
			setPlayerOffset(0)
			updateSongs(resJson.tracks.items)
		}

	}

	return (

		<form onSubmit={e=> search(e, params, access_token)}>
			<label>
				Query
			</label>

			<input type='text' onChange={(e)=> setParams((prevState) =>(
					{
						...prevState,
						q: `q=${encodeURIComponent(e.target.value)}`
					}
				)
			)}/>

			<label>
				Type
			</label>

			<input type='text' onChange={ e=> setParams((prevState) =>(
					{
						...prevState,
						type: `type=${e.target.value}`
					}
				)
			)}/>

			<label>
				Limit
			</label>

			<input type='text' onChange={ e=> setParams((prevState) =>(
					{
						...prevState,
						limit: `limit=${e.target.value}`
					}
				))}/>

			<label>
				Offset
			</label>

			<input type='text' onChange={e=> setParams((prevState) =>(
				{
					...prevState,
					offset: `offset=${e.target.value}`
				}
			))}/>

			<button type={'submit'} onClick={togglePlayer}>
				Search
			</button>
		</form>
	)

}

export default WaveFormFunction;
