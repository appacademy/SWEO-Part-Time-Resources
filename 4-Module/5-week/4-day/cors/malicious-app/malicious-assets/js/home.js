const postTweet = async (body) => {
  const res = await fetch('http://localhost:5001/api/tweets', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body)
  });

  if (res.ok) {
    window.location.reload();
    return;
  }

  throw res;
}

const fetchAllTweets = async () => {
  const res = await fetch('http://localhost:5001/api/tweets', {
    // credentials: 'include'
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

  if (currentUser && currentUser.user) {
    const h1 = document.querySelector("h1");
    const addTweetForm = createAddTweetForm(currentUser.user);
    h1.insertAdjacentElement('afterend', addTweetForm)
  }
  const tweets = await fetchAllTweets();

  tweets.forEach(createTweet);
});