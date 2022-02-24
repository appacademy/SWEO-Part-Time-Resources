// const func1= () => {
//     console.log('Alright im done')
// }

// const step1 = () => {
// console.log('I need to run first, and nothing else can run before I finish') 
// console.log('Step one')   
// func1()
// }

// setTimeout(() => {
//     step1()
//     console.log('Step One has ran moving on..')
//     setTimeout(() => {
//         console.log('Step two')
//          console.log('I depend on the previous codes')
//          setTimeout(() => {
//              console.log('Step three')
//              let someNum = 100 + 100
//              setTimeout(() => {
//                  console.log(someNum)
//                  console.log('Done')
//              }, 3000)
//          }, 3000)
//     }, 3000)
// }, 3000)
// console.log('None of the above code blocks me')






const func1 = () => {
    console.log('I need to run first, and nothing can run until im done')
}

setTimeout(() => {
    console.log('Step 1')
    let num = 100
    func1()
    setTimeout(() => {
        num += 100
        console.log('Step 2')
        console.log('Dont some calculation that future code depends on')
        setTimeout(() => {
            num += 100
            console.log('Step 3')
            console.log(num, 'We needed the previous code to run in order to get this number')
        }, 3000)
    }, 3000)
}, 3000)

console.log('this is based on func1, and I need func 1 to run first')