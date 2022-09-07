import { useContext } from 'react';
import { PokemonContext } from '../../context/PokemonContext'

import B from '../B';

import './A.css'

function A(){

	const { pokemon, setPokemonApi } = useContext(PokemonContext);

	// setPokemonApi('mewtwo')

	return (
		<div className='A'>
			<h1 style={{
				position: 'absolute',
				top: '0%'
			}}>
				{pokemon.name}
			</h1>
			A
			<B />
			<button onClick={()=> setPokemonApi('shinx')}>
				Set Pokemon
			</button>
		</div>
	)
}

export default A;
