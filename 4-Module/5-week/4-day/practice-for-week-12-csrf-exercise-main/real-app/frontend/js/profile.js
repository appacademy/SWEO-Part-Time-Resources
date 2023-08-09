const fetchUserTweets = async (username) => {
  const res = await fetch('/api/users/' + username + '/tweets', {
    credentials: 'include'
  });

  if (res.ok) return await res.json();

  try {
    const err = await res.json();
    const li = document.createElement("li");
    const errorMessage = document.createTextNode(err.message);
    li.appendChild(errorMessage);
    ul.appendChild(li);
  } catch(res) {
    throw res;
  }
};

window.addEventListener('DOMContentLoaded', async () => {
  const currentUser = await getCurrentUser();

  const username = window.location.pathname.split('/')[1];
  const tweets = await fetchUserTweets(username);

  if (
    currentUser &&
    currentUser.user &&
    currentUser.user.username === username
  ) {
    const h1 = document.querySelector("h1");
    const addTweetForm = createAddTweetForm(currentUser.user);
    h1.insertAdjacentElement('afterend', addTweetForm)
  }

  tweets.forEach(createTweet);
});

