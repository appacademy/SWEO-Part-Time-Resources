// Example of non async code 
// const slowCode = () => {
//     console.log('I just called an api')

//     let i = 0;
//     console.log('loading.....')
//     while( i < 10000000000){
//         i++
        
//     }
//     if(i === 10000000000) {
//         console.log('My api call done')
//     }
//     console.log('I am continuing to run')

//     console.log('code complete')

// }           
const fastCode = () => {
    console.log('I just called an api')

    let i = 0;
    setTimeout(() => {
        console.log('Api Complete')
    }, 0)
    
    console.log('I am continuing to run')

    console.log('code complete')

}           

// slowCode()
fastCode()
//more stuff
