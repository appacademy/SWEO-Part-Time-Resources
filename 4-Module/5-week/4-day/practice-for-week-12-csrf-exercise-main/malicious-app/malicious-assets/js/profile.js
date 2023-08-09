window.addEventListener('DOMContentLoaded', async () => {
  const username = window.location.pathname.split('/')[1];

  const currentUser = await getCurrentUser();

  if (
    currentUser &&
    currentUser.user &&
    currentUser.user.username === username
  ) {
    const h1 = document.querySelector("h1");
    const addTweetForm = createAddTweetForm(currentUser.user);
    h1.insertAdjacentElement('afterend', addTweetForm)
  }

  const tweets = {
    DemoUser: [
      {
        body: 'This is a fake tweet.',
        createdAt: 'Feb 10, 2022',
        User: {
          username: 'DemoUser'
        }
      },
      {
        body: 'This tweet is another fake tweet.',
        createdAt: 'Feb 10, 2022',
        User: {
          username: 'DemoUser'
        }
      }
    ],
    MaliciousUser: [
      {
        body: 'This website was made by MaliciousUser.',
        createdAt: 'Feb 10, 2022',
        User: {
          username: 'MaliciousUser'
        }
      },
      {
        body: 'This website was made to steal the user login details from the logged-in user from the cloned website.',
        createdAt: 'Feb 10, 2022',
        User: {
          username: 'MaliciousUser'
        }
      },
      {
        body: "It does this by taking the user's cookie information and adding it to a request to do an action that only the logged-in user should be able to make.",
        createdAt: 'Feb 10, 2022',
        User: {
          username: 'MaliciousUser'
        }
      },
    ]
  };

  tweets[username].forEach(createTweet);
});

