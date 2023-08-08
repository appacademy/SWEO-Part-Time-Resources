import './index.css'

function Body({data}){
	const background = 'bg-blue'
	const dataArray = [1,2,3,4,5,6,7,8,9,10]
	return (
		<div className={background} style={{'color': 'grey'}}>
			<div>
				REACT IS AWESOME!
			</div>
			<ul>
				{
					dataArray.map((e, i)=>{
						if (i < 8){
							return (
								<li>
									{e}
								</li>
							)
						}
						return (<>
						</>)
					})
				}
			</ul>
			<div style={{
				'color' : "yellow"
			}}>
				{data.firstName}
			</div>
		</div>
	)
}

export default Body;
