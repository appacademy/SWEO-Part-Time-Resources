const express = require('express');
const app = express();

const peopleRouter = require('./routes/people');
app.use('/people', peopleRouter);

// we got our colorsRouter mini app
const colorsRouter = require("./routes/colors");
//we need to mount (add this mini app as part of the big app)
app.use("/colors", colorsRouter);


const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));