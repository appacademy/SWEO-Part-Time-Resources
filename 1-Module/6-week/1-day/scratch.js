const slowCode =  () => {
    console.log(
        'Before'
    )
	// setTimeout(()=>{
	// 	hello('Alex')
	// }, 0)
	for(let i = 0; i <= 10000000000; i++){
		if(i === 10000000000){
			console.log(`I'm done running the for loop`)
		}
	}
	console.log('Function is done')
}

// slowCode()

// const fastCode = () => {
//     console.log(
//         'one')
//     console.log('2')
//     setTimeout(() => {
//         console.log('Complex code')
//     }, 2000)
//     console.log('4')
// }

// fastCode()


// synchronous
// console.log('First')
// console.log('Second')

// asychronous

// setTimeout
// setInterval


function hello(name){
	console.log(`Hello ${name}`)
}

// function async(langauge){
// 	console.log(`I love this programming language = ${langauge}`)
// }

// setTimeout(()=>{
// 	hello('Alex')
// }, 2)

// setTimeout(()=>{
// 	hello('Patrick')
// }, 1)

// setTimeout(()=>{
// 	hello('Derek')
// }, 3)

// setTimeout(()=>{
// 	hello('Geoffrey')
// }, 1)

// hello('Patrick')
// async('Javascript')

// setInterval

let intervalId = setInterval(hello, 1000, 'Alex')

// setInterval(()=>{
// 	hello('Alex')
// }, 1000)

for(let i = 0; i <= 100; i++){
	console.log(i)
	if(i === 100){
		setTimeout(()=>{
			clearInterval(intervalId)
		}, 3000)
	}
}
