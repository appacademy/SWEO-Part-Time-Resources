import { Component } from "react";

class WaveShow extends Component {

	constructor(props){
		super(props);
		this.state = {

		}
	}

	render(){
		return (
			<>
				<li>
					{this.props.test}
				</li>
			</>
		)
	}
}

export default WaveShow;
