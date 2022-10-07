const bcrypt = require('bcrypt');

const myPlaintextPassword = 'password';

const password = bcrypt.hashSync(myPlaintextPassword);


