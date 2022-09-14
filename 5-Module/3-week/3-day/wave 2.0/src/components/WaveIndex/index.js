import urlString from "../utils/ulrString";

import spotify from './spotify.png'
import './waveindex.css'


export const WaveIndexFunction = () => {

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
				Login to Spotify
			</a>

		</div>
)}
