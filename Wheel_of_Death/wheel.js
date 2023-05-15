let allStudents = [
    "Dylan McDougall",
    "Ledian Fekaj",
    "Emily Norman",
    "Enea Jorgji",
    "Carlos Stich",
    "David Soto",
    "Saman Rana",
    "Charles Carroll",
    "Will Herrington",
    "Nook Muenseeprom",
    "Yassin Tantawy",
    "Adrienne Tran",
    "Gino Farfaglia",
    "Joshua Krienke",
    "Mariia Gribacheva",
    "Kevin Sy",
    "Finley Joseph",
    "Stephen Sy",
    "Melynie Phothong",
    "Jamie Cardona"
]

let est = [
    "Dylan McDougall",
    "Ledian Fekaj",
    "Emily Norman",
    "Enea Jorgji",
    "Carlos Stich",
    "David Soto",
    "Saman Rana",
    "Charles Carroll",
    "Will Herrington",
    "Nook Muenseeprom"
]

let pst = [
    "Yassin Tantawy",
    "Adrienne Tran",
    "Gino Farfaglia",
    "Joshua Krienke",
    "Mariia Gribacheva",
    "Kevin Sy",
    "Finley Joseph",
    "Stephen Sy",
    "Melynie Phothong",
    "Jamie Cardona"
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