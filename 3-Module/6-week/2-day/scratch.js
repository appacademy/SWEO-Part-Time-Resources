window.addEventListener('DOMContentLoaded', ()=>{
	const div = document.querySelector('div');
	console.log(div) // element
	console.log(div.dataset)
	console.log(div.dataset['type']) // food
	console.log(div.dataset.value) // ice cream
	div.setAttribute('data-type', 'pizza');
	div.setAttribute('data-randomness', 'abcde' );

	for(key in div.dataset){
		console.log(key, ' key')
		console.log(div.dataset[key], '= value in dataset')
	}

	delete div.dataset['type']
	delete div.dataset['value']
	delete div.dataset['options']
})
