//named export of each of these functions

export function helloWorld(){
    console.log("hello world!");
}

export function goodbyeWorld(){
    console.log("goodbye world!")
}

// there can only be ONE export default in each file.
export default function anonymousFunction(){
    console.log("anonymous function")
}
