const groupRandomizer = () => {
    const students = ['Chris', 'Aman', 'Cherry', 'Derek', 'Jimmy']
    const visited = []
    const group1 = []
    const group2 = []
    while(students.length){
        let randomNum = getRandomNumber(students.length)
        let student = students[randomNum]
        if(!visited.includes(student)){
            if(group1.length < 4) {
                group1.push(student)
                visited.push(student)
            }
            else {
                group2.push(student)
                visited.push(student)
            }
        }
        students.splice(randomNum, 1)
    }
    console.log(group1)
    console.log(group2)
}

const getRandomNumber = (length) => {
    return Math.floor(Math.random() * length)
}

groupRandomizer()
