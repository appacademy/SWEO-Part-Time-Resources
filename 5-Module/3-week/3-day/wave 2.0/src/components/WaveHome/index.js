import { useEffect, useState } from "react";

import { findToken } from "../utils/tokenFinder";
import { useHistory } from "react-router-dom";
import WaveFormFunction  from "../WaveForm";
import WaveShow from "../WaveShow";
import SpotifyPlayer from 'react-spotify-web-playback';

import './wavehome.css';

const WaveHome = () => {

	const history = useHistory();

	const [accessToken, setAccessToken] = useState(localStorage.getItem("access_token"))
	const [ songs, setSongs ] = useState([])
	const [ currentTrack, setCurrentTrack ] = useState('');
	const [ playerOffset, setPlayerOffset ] = useState(0);
	const [ playlistClassName, setPlaylistClassName] = useState('playlist')
	const [ searchClassName, setSearchClassName] = useState('search active')

	useEffect(() => {
		const hash = window.location.hash
		let current_token = localStorage.getItem("access_token")
		if(!accessToken && hash){
			current_token = findToken(hash)
			window.location.hash = ''
			localStorage.setItem("access_token", current_token)
			setAccessToken(current_token)
			// dispatch(addAccessToken(current_token))
		}
		if(!current_token){
			history.push('/')
		}

	}, [])

	const logOut = () => {
		localStorage.removeItem("access_token")
		setAccessToken('')
		history.push('/')
	}

	const updateSongs = (songs) =>{
			setSongs(songs)
			setCurrentTrack(songs[0].name)
	}

	const togglePlayer = () => {
		if(playlistClassName === 'playlist') {setPlaylistClassName('playlist active'); setSearchClassName('search')}
		else { setPlaylistClassName('playlist'); setSearchClassName('search active') }
	}

	return (
		<>
			<button className='toggleButton' onClick={togglePlayer}>
				Toggle Player
			</button>

			<div className={searchClassName}>
				<WaveFormFunction access_token={accessToken} updateSongs={updateSongs}
								  togglePlayer={togglePlayer}
								  setPlayerOffset={setPlayerOffset}
								  />
				<button onClick={()=>{
					logOut()
				}}>
					Logout
				</button>
			</div>

			<div className={playlistClassName}>
				{/* {
					(songs.length > 0 && accessToken) ? */}
						<>
							<h2>
								Song Name: {currentTrack}
							</h2>
							<SpotifyPlayer
									token={accessToken}
									uris={
										songs.map((song)=> song?.uri)
									}
									autoPlay={true}
									callback={(state)=>{
										setCurrentTrack(state?.track?.name)
									}}
									offset={playerOffset}
							/>
							<h3>
								Song Lists:
							</h3>
							<ul>
								<WaveShow songs={songs} currentTrack={currentTrack} setPlayerOffset={setPlayerOffset} setCurrentTrack={setCurrentTrack}/>
							</ul>
						</>
					{/* : ''
				} */}
			</div>
		</>
	)

}


export default WaveHome;
