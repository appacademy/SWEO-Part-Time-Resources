import { useContext } from 'react';
import { PokemonContext } from '../../context/PokemonContext';


import './E.css'

function E(){

	const { pokemon } = useContext(PokemonContext)

	return (
		<div className='E'>
			E
			<img src={pokemon?.sprites?.front_shiny} alt='not found'/>
		</div>
	)
}

export default E;
