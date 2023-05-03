// npm install cors

const cors = require('cors');

// server setup

app.use( cors({ origin: ["http://website.com"] }));