function calculator(operation){
	switch (operation) {
		case 'add' :
			console.log(1+1)
			return
		case 'subtract':
			console.log(1-1)
			return
		default :
			console.log('not using calc')
			return
	}
}

export {
	calculator
}
