import { useState, useEffect } from 'react';

import B from '../B';

import './A.css'

function A(){

	const [pokemon, setPokemon] = useState('')

	useEffect(()=>{
		async function getPokemon(){
			const resObj = await fetch('https://pokeapi.co/api/v2/pokemon/charizard')
			const resJson = await resObj.json();

			setPokemon(resJson)
		}

		getPokemon();
	},[])
	
	return (
		<div className='A'>
			A
			<B/>
		</div>
	)
}

export default A;
