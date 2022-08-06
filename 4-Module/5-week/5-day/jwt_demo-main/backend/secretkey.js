// generate secret key
console.log('THIS IS YOUR SECRET KEY---------')
console.log(require('crypto').randomBytes(64).toString('hex'))
