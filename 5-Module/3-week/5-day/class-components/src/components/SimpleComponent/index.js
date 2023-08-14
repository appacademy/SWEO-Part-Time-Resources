import React from "react";


class SimpleComponent extends React.Component {

	constructor(props){
		super(props);

		// initial state
		this.state = {
			count : 0,
			name: ''
		}

		// this.incrementCount = this.incrementCount.bind(this)
	}

	componentDidMount(){
		console.log('THE COMPONENT DID MOUNT')
	}

	componentDidUpdate(prevProps, prevState){
		console.log('THE COMPONENT DID UPDATE')
		// assuming that we're fetching update the initial state
		if(prevState.name !== "Kate"){
			this.setState(prevState => ({
				name: 'Kate'
			}))
		}
	}


	componentWillUnmount(){
		console.log('THE COMPONENT DID UNMOUNT')
	}

	incrementCount(){
		this.setState(prevState => ({
			count: prevState.count + 1
		}))
	}

	render(){
		return (
			<div>
				<div>
					{this.state.name}
				</div>
				<div>
					{this.state.count}
				</div>
				<button onClick={()=> this.incrementCount()}>
					INCREMENT COUNT
				</button>
			</div>
		)
	}

}



export default SimpleComponent;
