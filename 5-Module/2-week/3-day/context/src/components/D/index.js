import { useContext } from 'react';
import { PokemonContext } from '../../context/PokemonContext';

import './D.css'

function D(){

	const { pokemon } = useContext(PokemonContext)

	return (
		<div className='D'>
			D
			<img src={pokemon?.sprites?.front_default} alt='not found'/>
		</div>
	)
}

export default D;
