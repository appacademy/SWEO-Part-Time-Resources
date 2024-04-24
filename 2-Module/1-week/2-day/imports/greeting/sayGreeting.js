function sayGreeting(){
    const randomNum = Math.floor(Math.random() * 3) + 1
    if(randomNum === 1){
        return 'Hello, '
    }
    else if(randomNum === 2){
        return 'Goodbye, '
    }
    else if(randomNum === 3){
        return "How are you "
    }
}

module.exports = {
    sayGreeting
}
