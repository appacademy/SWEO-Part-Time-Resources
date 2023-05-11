export const findElementById = (id) => {
    // Return the element in the DOM with corresponding `id`

    // children as neighbours
	// document.body => root

	const que = [document.body]

	while(que.length) {
		const currentNode = que.shift() //

		if(currentNode.getAttribute('id') === id){
			return currentNode
		}

		que.push(...currentNode.children)
	}
	return 'element not found'
}

export const findFirstElementOfTag = (tag) => {
    // Return the first occurence of an element of tag name `tag`

    const que = [document.body]

	while(que.length) {
		const currentNode = que.shift() //

		if(currentNode.tagName === tag){
			return currentNode
		}

		que.push(...currentNode.children)
	}

	return 'element not found'
}

function findFirstElementOfClass(cls) {
    // Return the first occurence of an element of class `cls`

    // Your code here
}

function findElementsOfTag(tag) {
    // Return an array of elements that have a tag name of `tag`

    // Your code here
}

function findElementsOfClass(cls) {
    // Return an array of elements that have are of class `cls`

    // Your code here
}
