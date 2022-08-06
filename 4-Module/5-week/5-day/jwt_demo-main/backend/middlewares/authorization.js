
const jwt = require('jsonwebtoken');

authorize = async (req, res, next) => {
    const { email, password } = req.body

    // generate a token for user
    const token = jwt.sign(
        { email, password },
        process.env.SECRET_KEY
    )

    res.locals.token = token

    next()
}

checkAuthorization = async (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1]
    try {
        const payload = jwt.verify(token, process.env.SECRET_KEY);
        res.locals.payload = payload
    } catch (e) {
        next(new Error(e))
    }
    next()
}


module.exports = {
    authorize,
    checkAuthorization
}