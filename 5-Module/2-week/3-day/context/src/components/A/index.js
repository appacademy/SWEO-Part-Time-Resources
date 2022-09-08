import { useState, useEffect } from 'react';

import B from '../B';

import './A.css'

function A(){

	const [ pokemon, setPokemon ] = useState('')

	useEffect(()=>{
		async function getPokemon(){
			const resObj = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonApi}`)
			const resJson = await resObj.json();

			setPokemon(resJson)
		}

		getPokemon();
	},[pokemonApi])

	return (
		<div className='A'>
			<h1 style={{
				position: 'absolute',
				top: '0%'
			}}>

			</h1>
			A
			<B />
		</div>
	)
}

export default A;
