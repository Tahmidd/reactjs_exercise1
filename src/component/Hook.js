import React, { useState } from 'react'

const Hook = props => {
	const [fruitState, setFruitState] = useState({
		fruits: [
			{ name: 'Mango', weight: '120gm' },
			{ name: 'Orange', weight: '20gm' },
			{ name: 'Apple', weight: '60gm' },
		]
	});

	
    const clickHandler = () => {
	// console.log('Hello everyone');
	// alert('Welcome');
		setFruitState({
		fruits: [
			{ name: 'Guava', weight: '120gm' },
			{ name: 'PAPAYA', weight: '20gm' },
			{ name: 'YEET', weight: '60gm' },
		]
	})
}
		return (
			<div>


				<button onClick={clickHandler} > Change me </button>
				<h1> fruit name is {fruitState.fruits[0].name} </h1>
				<h1> fruit name is {fruitState.fruits[1].name} </h1>
				<h1> fruit name is {fruitState.fruits[2].name} </h1>

			</div>
		)


}

export default Hook


