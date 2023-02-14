let allStudents = [
    'Dylan McDougall',
    "Ledian Fekaj",
    "Carlos Stich",
    "Emily Norman",
    "Enea Jorgji",
    "Yassin Tantawy",
    "Adrienne Tran",
    "Gino Farfaglia",
    "Stephen Raymond Sy",
    "David Soto",
    "Joshua Krienke",
    "Luke Morgan",
    "Kyle Seeley",
    "Saman Rana",
    "Brian Cabral",
    "Mariia Gribacheva",
    "Kevin Sy",
    "Finley Joseph"
]

let est = [
    "Dylan McDougall",
    "Ledian Fekaj",
    "Carlos Stich",
    "Emily Norman",
    "Dylan Berry",
    "Enea Jorgji",
    "Dorian Rivas",
    "Luke Morgan",
    "David Soto",
    "Kyle Seeley",
    "Saman Rana",
    "Brian Cabral",
]

let pst = [
    "Yassin Tantawy",
    "Adrienne Tran",
    "Gino Farfaglia",
    "Joshua Krienke",
    "Mariia Gribacheva",
    "Kevin Sy",
    "Finley Joseph",
    "Stephen Sy"
]

let deathWheel = array => array[Math.floor(Math.random() * array.length)]


function deathPairs(arr) {
    let rooms = Array.from(Array(arr.length).keys())
    let randomRoom = Math.floor(Math.random() * (arr.length / 2))
    while (arr.length) {
        if (arr.length === 1) {
            let solo = arr[0]
            console.log(`SOLO - Add ${solo} to room ${randomRoom}`)
            return;
        }
        let student1 = arr.splice((Math.random() * 1000) % arr.length, 1)
        let student2 = arr.splice((Math.random() * 1000) % arr.length, 1)

        let room = rooms.splice(1, 1);
      
        console.log(`${student1} and ${student2} are in Room ${room}`)
    }
}

deathPairs(pst)