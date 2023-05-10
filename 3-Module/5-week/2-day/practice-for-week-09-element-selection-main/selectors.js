const select = () => {
    /* Write queries for each of the following */

    /* Section 1 */
    // 1. Get all seeded fruit elements
    // Your code here
	// Brute force way!
	// get to the section tag from the body (it's the 2nd child)
	let section = document.body.children[1];
	// children = htmlCollection
	// childNodes = nodeList
	// get to the ul tag (3rd child)
	let ul = section.children[2];
	// grab both children
	let seeded_fruits0 = ul.children[0];
	let seeded_fruits1 = ul.children[1];
	// grab the inner text, not the entire element
	let fruit1 = seeded_fruits0;
	let fruit2 = seeded_fruits1;

	console.log(fruit1);
	console.log(fruit2);
	//
	// const seededFruit = document.querySelectorAll('.seed')

	// const seededFruit = document.getElementsByClassName('seed')
	// const seededFruit = document.getElementsByTagName('section')[0]
	// 						.getElementsByTagName('ul')[0]
	// 						.getElementsByClassName('seed')
	// console.log(seededFruit)
    // 2. Get all seedless fruit elements
    // Your code here
	const seedlessFruit = document.querySelectorAll('li.seedless')
	console.log(seedlessFruit)

    // 3. Get first seedless fruit element
    // Your code here
	const firstSeedlessFruit = document.querySelectorAll('li.seedless') // nodeList
	// const firstSeedlessFruit = document.getElementsByClassName('seedless') // htmCollection
	// console.log(firstSeedlessFruit[0])

	// const firstSeedlessFruit = document.querySelector('.seedless') // first

	console.log(firstSeedlessFruit[0])

    /* Section 2 */
    // 4. Get inner span with text "you"
    // Your code here
	// const spanWithYou = document.querySelectorAll('*[text="you"]')
	const spanWithYou = document.querySelectorAll('span')
	// const spanArray = Array.from(spanWithYou).filter(el => el.innerText === 'you')
	const spanArray = []
	for(let i = 0; i < spanWithYou.length; i++){
		if(spanWithYou[i].innerText === 'you'){
			spanArray.push(spanWithYou[i])
		}
	}

	console.log(spanArray)

    // 5. Get all children of element "wrapper"
    // Your code here
	const childrenOfWrapper = document.querySelector('#wrapper')
	console.log(childrenOfWrapper.children)

    // 6. Get all odd number list items in the list
    // Your code here
	const oddElements = document.querySelectorAll('.odd')
	console.log(oddElements)

    // 7. Get all even number list items in the list
    // Your code here
	const evenElements = document.querySelectorAll('#two > ol > li:nth-child(even)')
	console.log(evenElements)

	// const evenElements = document.getElementById('two')
	// 						.getElementsByTagName('ol')[0]
	// 						.getElementsByTagName('li')

	// for(let i = 0; i < evenElements.length; i++){
	// 	if (i % 2 === 1){
	// 		console.log(evenElements[i])
	// 	}
	// }

    /* Section 3 */
    // 8. Get all tech companies without a class name
    // Your code here

	const techNoClass = document.querySelectorAll('#three a:not([class])')

	console.log(techNoClass)

    // 9. Get "Amazon" list element
    // Your code here

	const amazon = document.querySelector('.shopping')
	console.log(amazon)


    // 10. Get all unicorn list elements (not the image element)
    // Your code here
	const unicorns = document.querySelector('#three > ul')
	console.log(unicorns.children)
}

window.onload = select;

// nodeList = [nodes]
// htmlCollection = [elements]
