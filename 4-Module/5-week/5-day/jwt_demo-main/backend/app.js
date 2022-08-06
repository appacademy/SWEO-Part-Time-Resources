require('dotenv').config()

const express = require('express');
const cors = require('cors');
const csrf = require('csurf');
const cookieParser = require('cookie-parser');

const app = express();

const { User } = require('./db/models')

const { authorize, checkAuthorization } = require('./middlewares/authorization')

// enable cors
app.use(cors({
  origin: [/http:\/\/localhost/, /http:\/\/\d/], // allow any origin beginning with 'http://localhost' and any ip digit
  credentials: true // allow sending and receiving cookies
}));

// json parsing
app.use(express.json());

// enable cookie parsing
// use by req.cookies
app.use(cookieParser());

// enable csurf
// app.use(csrf({cookie: true}));


// unauthorized endpoint
app.get('/api', async (req, res) => {
    res.json({
        // "csrfToken" : req.csrfToken(),
        "message" : "Welcome to my api!"
    })
})

// create new user
app.post('/api/signup', authorize, async (req, res, next) => {

    const { firstName, lastName, email, password } = req.body
    let newUser;

    try{
        newUser = await User.create({
            firstName,
            lastName,
            email,
            password
        });
    }
    catch (e){
        next(new Error('User already exists'))
    }

    if(newUser){
        res.json({
            "message" : "User has been successfully created",
            "status" : "Signed Up",
            newUser,
            token : res.locals.token
        });
    }

})

// login user
// authenticate user
app.post('/api/login', authorize, async (req, res, next) => {

    const { email, password } = req.body

    const user = await User.findOne({
        where: {
            email,
            password
        }
    })

    if(user){
        res.json({
            "message" : "User has been successfully logged in",
            "status" : "Logged In",
            token : res.locals.token
        });

    } else {
        next(new Error('User does not exist'))
    }

})

// check current user
// authorized endpoint
app.get('/api/profile', checkAuthorization, async (req, res, next) => {

    try {
        const { email, password } = res.locals.payload

        const user = await User.findOne({
            where: {
                email,
                password
            }
        })

        res.json({
            "message": `Welcome Back ${user.firstName} ${user.lastName} `,
            currentUser : user
        })

    } catch(e){
       next(new Error(e))
    }
})


app.use(async (err, req, res, next)=> {
    console.log(err)
    res.json({
        error : err.message
    })
})

const port = process.env.PORT

app.listen(port, ()=>{
    console.log(`Server is now listening on port ${port}`)
})
