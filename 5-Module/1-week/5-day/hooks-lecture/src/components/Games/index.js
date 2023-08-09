import { useState, useEffect } from 'react'

function Games(){

	const [games, setGames] = useState({})
	const [page, setPage] = useState(1)

	useEffect(()=>{
		let x = 0
		const interval = setInterval(()=>{
			console.log(x)
			x++
		}, 1000)

		return () => {
			clearInterval(interval)
		}

	}, [page]) // componentWillUpdate

	return (
		<>
			{/* {games.seo_title}
			<input value={page} onChange={(e) => setPage(e.target.value)}>

			</input>
			{games?.results?.map((game)=>{
				return(<>
					{game.name}
				</>)
			})} */}
		</>
	)
}

export default Games;
