import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import luke from './luke.json'

// const style = {
// 	display: 'inline-block',
// 	paddingRight: '10px'
// }

function Loading(){
	return (
		<h1>.....loading</h1>
	)
}

function People(){

	const [isLoading, setLoading] = useState(true)

	useEffect(()=>{
		setTimeout(()=>{
			setLoading(false)
		}, 1000)
	})

	return (
		<>
			{
				isLoading ? Loading() :
				<ul>
					{
						Object.entries(luke).map(([key, value], i)=>{
							return (
								<li key={i}>{key}: {value}</li>
							);
						})
					}
				</ul>

			}
		</>
	);
}

export default People;
