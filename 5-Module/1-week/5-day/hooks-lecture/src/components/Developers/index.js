import { useState } from 'react'


function Developers(){


	const [name, setName] = useState('Please Enter A Name')
	const [lastName, setLastName] = useState('Please Enter Your Lastname')
	const [isDev, setIsDev] = useState(false)
	const [gamesCreated, setGamesCreated] = useState([])

	return (
		<>
			<div>
				Name: {name}
			</div>
			<input onChange={(e)=> {
				// setName(e.target.value)
				setName(prev => {
					if (e.target.value !== prev){
						return e.target.value
					}
				})
			}}>
			</input>
			<div>
				LastName: {lastName}
			</div>
			<input onChange={(e)=> {
				setLastName(e.target.value)
			}}>
			</input>

			<button onClick={() => setIsDev(prev => !prev)}>
				{isDev ? <>
					Developer
				</> : <>
					Gamer
				</>}
			</button>
			<button onClick={() => setGamesCreated(prev => [...prev, 'new game']) }>
				Add Game
			</button>
		</>
	)
}

export default Developers;

// three primary lifecycles
// mounting
// updating
// unmounting

// componentWillMount
// componentDidMount

// componentWillUpdate
// componentDidUpdate

// componentWillMount

// useEffect()
