export const findElementById = (id) => {
    // Return the element in the DOM with corresponding `id`

    // Your code here

	const que = [document] // root

	while(que.length){
		const currentNode = que.shift()

		if(currentNode.getAttribute('id') === id){
			return currentNode
		}

		que.push(...currentNode.children) // [], htmlCollection
	}
}

export const findFirstElementOfTag = (tag) => {
    // Return the first occurence of an element of tag name `tag`

    // Your code here
	const que = [document] // root

	while(que.length){
		const currentNode = que.shift()

		// console.log(currentNode)
		// console.log(currentNode.tagName)
		if(currentNode.tagName === tag){
			return currentNode
		}

		que.push(...currentNode.children) // [], htmlCollection
	}
}

export default (cls) => {
    // Return the first occurence of an element of class `cls`

	const que = [document] // root

	while(que.length){
		const currentNode = que.shift()

		if(currentNode.getAttribute('class') === cls){
			return currentNode
		}

		que.push(...currentNode.children) // [], htmlCollection
	}
}

export const findElementsOfTag = (tag) => {
    // Return an array of elements that have a tag name of `tag`
	const que = [document] // root
	const newArr = []

	while(que.length){
		const currentNode = que.shift()

		if(currentNode.tagName === tag){
			newArr.push(currentNode)
		}

		que.push(...currentNode.children) // [], htmlCollection
	}

	return newArr
}

export const findElementsOfClass = (cls) => {
    // Return an array of elements that have are of class `cls`

	const que = [document] // root
	const newArr = []

	while(que.length){
		const currentNode = que.shift()
		// console.log(currentNode)

		if(currentNode instanceof Element){
			if(currentNode.getAttribute('class') === cls){
				newArr.push(currentNode)
			}
		}

		que.push(...currentNode.children) // [], htmlCollection
	}

	return newArr
}
