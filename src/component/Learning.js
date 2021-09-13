import React, { Component } from 'react'
import './Learning.css'

class Learning extends Component{
	constructor(props){
		super(props);
	
	this.state= {
		fruits:[
		{name: 'Mango', weight: '120gm'},
		{name: 'Orange', weight: '20gm'},
		{name: 'Apple', weight: '60gm'},
		]
	}
}
	clickHandler = () => {
		// console.log('Hello everyone');
		// alert('Welcome');
		this.setState  ({
			fruits: [
				{ name: 'Guava', weight: '120gm' },
				{ name: 'PAPAYA', weight: '20gm' },
				{ name: 'YEET', weight: '60gm' },
			]
		})
    }
	render() {
		const style = {
			backgroundColor: 'white',
			font: 'inherit',
			border: '2px solid white',
			padding: '10px',
			cursor:'pointer',
        }
		return (
			<div>
							
				<button style={style} onClick={this.clickHandler} > click me </button>
				<h1 className="Card"> fruit name is {this.state.fruits[0].name} </h1>
				<h1 className="Card"> fruit name is {this.state.fruits[1].name} </h1>
				<h1 className="Card"> fruit name is {this.state.fruits[2].name} </h1>
		
		</div>
		)
	}

}

export default Learning 