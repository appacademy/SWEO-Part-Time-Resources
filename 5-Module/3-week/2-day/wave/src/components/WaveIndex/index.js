import { Component } from "react";
import { findToken } from "../utils/tokenFinder";
import SpotifyPlayer from 'react-spotify-web-playback';

import WaveShow from "../WaveShow";
import WaveForm from "../WaveForm";

import './waveindex.css'

const urlString = `${process.env.REACT_APP_AUTH_ENDPOINT}?client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&response_type=${process.env.REACT_APP_RESPONSE_TYPE}&scope=${process.env.REACT_APP_TOKEN_SCOPE}`


class WaveIndex extends Component {

	constructor(){
		super();
		this.state = {
			access_token : window.localStorage.getItem("access_token"),
			user: {

			},
			songs: '',
			currentTrack: '',
		}

		this.setSongs = this.setSongs.bind(this)
	}

	componentDidMount(){
		const hash = window.location.hash
		let current_token = window.localStorage.getItem("access_token")
		if(!this.state.access_token && hash){
			current_token = findToken(hash)
			window.location.hash = ''
			window.localStorage.setItem("access_token", current_token)
		}

		this.setState({
			access_token: current_token
		})
	}

	async componentDidUpdate(prevProps, prevState){


		if(this.state.access_token && !prevState.artists){
			const artist = await this.fetchArtists()

			this.setState({
				artists: {
					[artist.id] : artist
				}
			})
		}

	}

	async fetchArtists(){

		try {
			const resBody = await fetch('https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg', {
				headers: {
					Authorization: `Bearer ${this.state.access_token}`
				}
			})

			const resJson = await resBody.json();
			return resJson

		} catch (e) {
			return
		}

	}

	logOut(){
		window.localStorage.removeItem("access_token")
		this.setState((state) => {
			return { access_token: state.access_token = ''}
		})
	}

	setSongs(songs){
		this.setState({
			songs: songs,
			currentTrack: songs[0].name
		})
	}

	render(){
		return (
			<div className='wave-body'>
				<h1>
					Welcome to Wave
				</h1>



				{!this.state.access_token ?

					<a href={urlString}>
						Login to Spotify
					</a> :

					<div>
						<WaveForm access_token={this.state.access_token} setSongs={this.setSongs}/>
						<button onClick={()=>{
							this.logOut()
						}}>
							Logout
						</button>
					</div>
			    }
				{
					(this.state.songs && this.state.access_token) ?
						<div>
							<div>
								Song Name: {this.state.currentTrack}
							</div>
							<SpotifyPlayer
									token={this.state.access_token}
									uris={
										this.state.songs.map((song)=> song.uri)
									}
									autoPlay={true}
									callback={(state)=>{
										this.setState({
											currentTrack: state.track.name,
										})
									}}
							/>

							<label>
								Song Lists:
							</label>
							<ul>
								{
									this.state.songs.map((song, i)=>{
										return (
										<li key={i+song.name} className={this.state.currentTrack === song.name ? 'active' : ''}>
											{song.name}
										</li>)
									})
								}
							</ul>
						</div>
					: ''
				}
			</div>)
	}
}

export default WaveIndex;
