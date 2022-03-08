class FileOneClass {
    constructor(){
    }

    static printClassName(){
        console.log(this.className)
    }
}

class TestOfMultipleClasses {
    constructor(){}

    printClassName(){
        console.log('This is a test of exporting multiple classes from one file')
    }

}




