export default function findElementById(id, elements = document.body.children)
{
    // Return the element in the DOM with corresponding `id`

    // Your code here
	for (let element of elements) {
		if (element.id === id) return element;
			if (element.children.length) {
				let answer = findElementById(id, element.children);
				if (answer) return answer;
			}
		}
	return false;
}

function findFirstElementOfTag(tag) {
    // Return the first occurence of an element of tag name `tag`

    // Your code here
}

function findFirstElementOfClass(cls) {
    // Return the first occurence of an element of class `cls`

    // Your code here
}

function findElementsOfTag(tag, elements = document.body.children) {
	// Return an array of elements that have a tag name of `tag`
	let elementsOfTag = [];


	for (let element of elements) {
	  if (element.tagName.toLowerCase() === tag.toLowerCase()) elementsOfTag.push(element)
	  if (element.children.length) {
		let answer = findElementsOfTag(tag, element.children);
		elementsOfTag = elementsOfTag.concat(answer);
	  }
	}
	return elementsOfTag;
}


function findElementsOfClass(cls, elements = document.body.children) {
	// Return an array of elements that have are of class `cls`
	let elementsOfClass = [];

	for (let element of elements) {
	  if (element.classList.contains(cls)) elementsOfClass.push(element);
	  if (element.children.length) {
		let answer = findElementsOfClass(cls, element.children);
		elementsOfClass = elementsOfClass.concat(answer);
	  }
	}
	return elementsOfClass;
}


export {
	findElementsOfTag,
	findElementsOfClass
}
