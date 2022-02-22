


const slowCode =  () => {
    console.log(
        'Before my code'
    )
    // let i = 0
    console.log('Loading...')
    setTimeout(() => {
        console.log('Executing code')
    }, 0)
    // while(i < 10000000000){
    //     i++
    // }
    // if(i === 10000000000){
    //     console.log('I have finished')
    // }
    console.log('Done')
}

// slowCode()

const fastCode = () => {
    console.log(
        'one')
    console.log('2')
    setInterval(() => {
        console.log('Complex code')
    }, 1000)
    console.log('4')
}

fastCode()