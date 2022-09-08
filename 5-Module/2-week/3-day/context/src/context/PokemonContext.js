import { useState, useEffect } from 'react';
import { createContext } from "react";

export const PokemonContext = createContext();


export function PokemonProvider(props){

	const [ pokemonApi, setPokemonApi ] = useState('charizard')
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
		<PokemonContext.Provider value={{
			pokemon,
			setPokemonApi
		}}>
			{props.children}
		</PokemonContext.Provider>
	)
}
