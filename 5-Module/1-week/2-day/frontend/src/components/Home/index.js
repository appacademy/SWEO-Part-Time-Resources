// import { Link } from 'react-router-dom';
// const style = {
// 	display: 'inline-block',
// 	paddingRight: '10px'
// }

function Home({message}){
	return (
		// fragment
		<>

			{/* <Link to='/people'>
				<h3 style={style}> PEOPLE </h3>
			</Link> */}
			<h1>
				{ message }
			</h1>
		</>
	)
}


export default Home;
