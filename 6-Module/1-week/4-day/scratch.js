// const upperCase = (string) => {
//     console.log(string);
// };

// console.log(multiplyString('hello'))

const multiplyString = function(string){
    return () => string * 2
}

console.log(multiplyString('hello'))

array = [1,2,3,4,5,6]

for(let i = 0; i < array.length; i++){
    console.log(array[i])
}

// pythons for loop version

// for i in range(len(list1)):
//     print('Index ' + str(i) + ' in supplies is: ' + list1[i])

