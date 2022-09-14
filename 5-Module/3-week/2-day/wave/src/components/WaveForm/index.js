import { useState } from 'react'

import { Component } from "react";

import './waveform.css'



export const WaveFormFunction =({access_token, updateSongs}) => {

	const [params, setParams] = useState({
			q: 'q=',
			type: 'type=',
			limit: 'limit=',
			offset: 'offset=',
	});


	const search = async (e, params, access_token) => {
		e.preventDefault();

		const combineUri = Object.values(params).map((value, i)=>{
			if(i > 0){
				if(value.split('=')[1]){
					return `&${value}`
				}
			} else {
				if(value.split('=')[1]){
					return value
				}
			}
			return ''
		}).join('')


		const resObj = await fetch(`https://api.spotify.com/v1/search?${combineUri}`, {
			headers: {
				Authorization: `Bearer ${access_token}`
			}
		})

		if(!resObj){
			updateSongs([{name: 'No track found'}])
		} else {
			const resJson = await resObj.json();

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

			<button type={'submit'}>
				Search
			</button>
		</form>
	)

}



class WaveForm extends Component {
	constructor(props){
		super(props);
		this.state = {
			params: {
				q: 'q=',
				type: 'type=',
				limit: 'limit=',
				offset: 'offset=',
			}
		}
	}

	async search(e, params, access_token){
		e.preventDefault();

		const combineUri = Object.values(params).map((value, i)=>{
			if(i > 0){
				if(value.split('=')[1]){
					return `&${value}`
				}
			} else {
				if(value.split('=')[1]){
					return value
				}
			}
			return ''
		}).join('')


		const resObj = await fetch(`https://api.spotify.com/v1/search?${combineUri}`, {
			headers: {
				Authorization: `Bearer ${access_token}`
			}
		})

		const resJson = await resObj.json();

		this.props.setSongs(resJson.tracks.items)
	}

	render(){
		return (

			<form onSubmit={e=> this.search(e, this.state.params, this.props.access_token)}>
				<label>
					Query
				</label>

				<input type='text' onChange={e=> this.setState({
					params: {
						...this.state.params,
						q: `q=${encodeURIComponent(e.target.value)}`
					}
				})}/>

				<label>
					Type
				</label>

				<input type='text' onChange={e=> this.setState({
					params: {
						...this.state.params,
						type: `type=${e.target.value}`
					}
				})}/>

				<label>
					Limit
				</label>

				<input type='text' onChange={e=> this.setState({
					params: {
						...this.state.params,
						limit: `limit=${e.target.value}`
					}
				})}/>

				<label>
					Offset
				</label>

				<input type='text' onChange={e=> this.setState({
					params: {
						...this.state.params,
						offset: `offset=${e.target.value}`
					}
				})}/>

				<button type={'submit'}>
					Search
				</button>
			</form>
		)


	}
}


export default WaveForm;
