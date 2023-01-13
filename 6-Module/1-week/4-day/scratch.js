// const upper = (string) => {
//     return string.toUpperCase()
// }

// console.log(upper('uppercase'))

// const multiplyString = function(string){
//     return (string) => string + string
// }

// // console.log(multiplyString('hello'))

// const cb = multiplyString('hello')

// console.log(cb('hello'))

arr = [1,2,3,4,5]

console.log(arr);
for(let i = 0; i < arr.length; i++){
    arr[i] = 'z'
}
console.log(arr);

// python equivalent to for (let i = 0; i < arr.length; i++)
// for i in range(len(list1)):
//     print('Index ' + str(i) + ' in supplies is: ' + list1[i])
