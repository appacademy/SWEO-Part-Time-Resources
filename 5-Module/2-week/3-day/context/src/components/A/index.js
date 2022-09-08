import { useContext, useState } from 'react';
import { PokemonContext } from '../../context/PokemonContext';

import B from '../B';

import './A.css'

function A(){

	const { setPokemonApi } = useContext(PokemonContext)
	const [currPokemon, setCurrPokemon] = useState('')

	return (
		<div className='A'>
			<h1 style={{
				position: 'absolute',
				top: '0%'
			}}>
				{/* {pokemon?.name} */}
			</h1>
			A
			<B/>

			<input onChange={(e)=>{
				setCurrPokemon(e.target.value)
			}}>

			</input>

			<button onClick={()=>{
				setPokemonApi(currPokemon)
			}}>
				New Pokemon
			</button>
		</div>
	)
}

export default A;
