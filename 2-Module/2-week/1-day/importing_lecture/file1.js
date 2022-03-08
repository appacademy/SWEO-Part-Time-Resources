class NewClass {
    constructor(){

    }
    printSomething(){
        console.log('Something')
    }
}
class NewClass2 {
    constructor(){
    }
    printSomething2(){
        console.log('Something')
    }
}


module.exports = {
    NewClass, 
    NewClass2
}
// module.exports = NewClass
// module.exports.NewClass = NewClass
// module.exports.NewClass2 = NewClass2
// exports.NewClass = NewClass
// exports.NewClass2 = NewClass2