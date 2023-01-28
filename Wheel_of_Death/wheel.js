let allStudents = [
    'Dylan McDougall',
    "Ledian Fekaj",
    "Carlos Stich",
    "Emily Norman",
    "Dylan Berry",
    "Enea Jorgji",
    "Dorian Rivas",
    "Yassin Tantawy",
    "Adrienne Tran",
    "Gino Farfaglia",
    "Stephen Raymond Sy",
    "David Soto",
    "Joshua Krienke",
    "Myles Spikes",
    "Avery Illustre",
    "Luke Morgan",
    "Kyle Seeley",
    "Saman Rana",
    "Brian Cabral",
    "Mariia Gribacheva",
    "Kevin Sy",
    "Manuel Salazar"
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
    "Brian Cabral"
]

let pst = [
    "Yassin Tantawy",
    "Adrienne Tran",
    "Gino Farfaglia",
    "Stephen Raymond Sy",
    "Joshua Krienke",
    "Myles Spikes",
    "Avery Illustre",
    "Mariia Gribacheva",
    "Kevin Sy",
    "Manuel Salazar"
]

let deathWheel = array => array[Math.floor(Math.random() * array.length)]



console.log(deathWheel(allStudents), deathWheel(allStudents))