import luke from './luke.json'

function People(){
	return (
		<ul>
			{
				console.log(Object.entries(luke))
			}
		   {
			Object.entries(luke).map(([key, value], i)=>{
				return (
					<li key={i} style={{
						color: 'gold',
						backgroundColor: 'black'
					}}>{key} : {value}</li>
				);
			})
		  }
		</ul>
	)
}


export default People;
