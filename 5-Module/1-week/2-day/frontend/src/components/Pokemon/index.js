// hooks --
// useEffect
// useState
// useRef
// customHooks
import { useState, useEffect, useRef } from 'react';

function tag(id){
	return(
		<h3 key= {id}> NEW TAG</h3>
	)
}

function Pokemon(){
	console.log('Has rerendered')
	// const [currPokemon, setCurrPokemon] = useState(0);
	const [arrayOfTags, setCurrentTags] = useState([]);
	const [count, setCount] = useState(0);
	const noRender = useRef(0);

	useEffect(()=>{

	},[arrayOfTags])

	return (
		<>
			<button onClick={
				()=> {
					noRender.current += 1
					if(noRender.current === 10){
						setCount(noRender.current)
					}
				}
			}>
				Change Pokemon
			</button>
			<h1>
				{noRender.current}
			</h1>
			{
				arrayOfTags.map((tags, i) => {
					return(tags(i))
				})
			}
		</>
	)
};



export default Pokemon;
