const select = () => {
    /* Write queries for each of the following */

    /* Section 1 */
    // 1. Get all seeded fruit elements
    // Your code here
	const seededQueryAll = document.querySelectorAll('.seed')
	const seededGet = document.getElementsByClassName('seed')
	console.log(seededQueryAll) // nodeList
	console.log(seededGet) // htmlCollection
    // 2. Get all seedless fruit elements
    // Your code here
	const seedless = document.querySelectorAll(".seedless");
	console.log(seedless) // nodelist

    // 3. Get first seedless fruit element
    // Your code here
	// const firstSeedless = document.querySelectorAll('.seedless')[0];
	// const firstSeedless = document.querySelectorAll('.seedless');
    // console.log(firstSeedless[0]) // element/node

	const firstSeedless = document.querySelector('.seedless')
	console.log(firstSeedless)

    /* Section 2 */
    // 4. Get inner span with text "you"
    // Your code here
	// const span = document.getElementById('wrapper').getElementsByTagName('span');
    // console.log(span)
	const span = document.querySelector('span')
	console.log(span)

	const youText = document.getElementsByTagName("span");
	const arrYouText = Array.from(youText).filter(el => el.innerText === 'you')
	console.log(arrYouText[0])
    // 5. Get all children of element "wrapper"
    // Your code here
	const wrapperChildren = document.getElementById("wrapper");
    console.log(wrapperChildren.children) // htmlCollection
	console.log(wrapperChildren.childNodes) // nodelist

    // 6. Get all odd number list items in the list
    // Your code here
	// const odd = document.getElementsByClassName("odd");

	// console.log(odd)

	// const odd = document.querySelectorAll('#two > ol > li:nth-child(odd)')
	// console.log(odd)

	const odd = document.querySelectorAll('.odd')
	console.log(odd)

    // 7. Get all even number list items in the list
    // Your code here
				// #two > ol >
	const even = document.getElementById("two").querySelectorAll("li:not(.odd)");
	console.log(even)

    /* Section 3 */
    // 8. Get all tech companies without a class name
    // Your code here

	const techWithoutAClass = document.querySelector('section#three')
								.children[1].querySelectorAll('a:not(a[class])');
    console.log(techWithoutAClass)

    // 9. Get "Amazon" anchor element
    // Your code here
	const amazon = document.getElementsByClassName('shopping');
    console.log(amazon)

    // 10. Get all unicorn list elements (not the image element)
    // Your code here
	const unicorns = document.querySelector('#three > ul').childNodes
	console.log(unicorns)

}

window.onload = select;


// document.addEventListener('DOMContentLoaded', e => {

// })
