import { Component } from 'react';

class ClassComponent extends Component {

	constructor(){
		super();
		this.state = {
			'firstName' : 'Alex',
			'test' : 'hello',
			'language' : 'english',
			'interval' : ''
		}
	}

	componentDidMount(){
		console.log('WILL RENDER ONCE')
	}

	// useEffect(()=>{
	// 	console.log('WILL RENDER ONCE')
	// },[])

	componentDidUpdate(prevProps, prevState){
		if(prevState.firstName !== this.state.firstName){
			console.log('STATE HAS CHANGED AND WILL RERENDER')
		}
	}

	// useEffect(()=>{
	// 	console.log('WILL RENDER ONCE')
	// },[firstName])

	componentWillUnmount(){
		clearInterval(this.state.interval)
	}

	addInterval(){
		this.setState({
			interval: setInterval(()=>{
				console.log('Hello!')
			}, 1000)
		})
	}

	// useEffect(()=>{
	// 	return
	// })


	render(){
		return (
			<>
				Weclcome {this.state.firstName} {this.props.lastName}

				<button onClick={()=>{
					this.setState({
						firstName: 'Lec'
					})
				}}>
					Change Name
				</button>

				<button onClick={()=>{
					this.addInterval()
				}}>
					Add Interval
				</button>
			</>
		)
	}
}

export default ClassComponent;
