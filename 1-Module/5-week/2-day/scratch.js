// Call stack demo

// please read these comments in logical order, jump to the line it tells you to.
// Below these functions is a function call for first. When this file is ran, the function
// 'first' is added to the call stack. Since it is the only thing on the stack at that point
// it is going to run.
// function first(){ 
	// console.log('1') // this is the first line of code that gets evaluated, because it's at the top of this function.
	// second() // once this line gets evaluated, we jump to line 18 since it is the first line of this function. the first function is now paused.
	// console.log('5') // once second has been popped off the stack, first is now the last item in the stack again, so js will now
	// evaluate this line. Once this line is complete, this function will be popped off and the stack will be empty again.
// }

// as soon as this function gets called on line 8, the first function pauses, and this function gets
// added to the call stack. Since the stack is a last in first out data structure, and this function
// was the last one added to the stack, this function will now run. 
// function second(){ 
	// console.log('2') // this line is the third line of code evaluated since first was called. (8 and 9 ran first)
	// third() // once this line gets evaluated we jump to line 29 since its the first line of this function. the second function is now paused.
	// console.log('4') // once third is complete, it will be popped off the stack, and now second is the last item in the stack
	// again. So it will move to line 20 and read it now. Once it completes this line, second will be complete, so it will be
	// popped off the stack, and first will be the last (only) item in the stack once again. We will now jump back to line 10.
// }

// as soon as this function gets called on line 17, the second function pauses. The stack now consists of 
// three functions, first is on the bottom, second is right above that, and now third is on top. because
// third is on top, it will now run. 
// function third(){
	// console.log('3') // this line is the 5th line of code to be evaluated since first was called. because this function is now 
	// complete, it will be popped off of the stack, so the stack will only hold first on the bottom and now second on the top.
	// we will jump back to line 20, since second is now at the top of the stack and that line is right after the function call for third.
// }

// debugger demo

function first(){ 
	console.log('1')
	second()
	console.log('5') 
}

function second(){ 
	console.log('2') 
	third() 
	console.log('4')
}

function third(){
	console.log('3') 
}

first();

// Recursion Demo

// Write a function called rec_sum that intakes a number, and adds up all numbers from 1 
// to the number and returns the sum. Must be recursive. We're expecting all nums to be >= 1

