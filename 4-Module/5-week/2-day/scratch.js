// CORS - Cross-Origin Resource Sharing
// Indicates which sources (origins) are allowed to make requests to a server

// npm install cors

const cors = require('cors');

// server setup

app.use( cors({
  origin: ["http://website.com"],
  credentials: true
}));

const allowGoogle = () => {
  cors({ origin: ["http://google.com"]})
}

app.get('/users', allowGoogle, (req, res) => {

})