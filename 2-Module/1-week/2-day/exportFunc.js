function hi(name) {
    console.log(`Hi, ${name}!`)
}

function bye() {
    console.log("Bye, Brother")
}

module.exports = {
    hi,
    bye
}

// module.exports.hi = hi;
// module.exports.bye = bye;