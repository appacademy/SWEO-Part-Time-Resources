const createTweet = (tweet) => {
  const ul = document.querySelector('#tweet-list');

  const li = document.createElement("li");

  const profilePicture = createProfilePicture(tweet.User);
  li.appendChild(profilePicture);

  const tweetContent = document.createElement("div");
  tweetContent.classList.add("tweet-content");

  const tweetHeader = createTweetHeader(tweet);
  tweetContent.appendChild(tweetHeader);

  const tweetBody = createTweetBody(tweet);
  tweetContent.appendChild(tweetBody);

  li.appendChild(tweetContent);

  ul.appendChild(li);
};

const createProfilePicture = (user) => {
  const username = user.username;

  const iconType = username === "MaliciousUser" ? "fa-user-secret" : "fa-user";
  const tweetIcon = document.createElement("i");
  tweetIcon.classList.add("fa");
  tweetIcon.classList.add(iconType);
  tweetIcon.setAttribute("aria-hidden", "true");
  
  const profilePicture = document.createElement("a");
  profilePicture.classList.add("user-profile-image");
  profilePicture.setAttribute("href", "/" + username);
  username === "MaliciousUser" && profilePicture.classList.add("malicious");
  profilePicture.appendChild(tweetIcon);

  return profilePicture;
};

const createTweetHeader = (tweet) => {
  const tweetHeader = document.createElement("div");
  tweetHeader.classList.add("tweet-header");
  
  const username = tweet.User.username;
  const tweetAuthor = document.createElement("a");
  tweetAuthor.classList.add("tweet-author");
  tweetAuthor.setAttribute("href", "/" + username);
  const authorName = document.createTextNode(username);
  tweetAuthor.appendChild(authorName);
  tweetHeader.appendChild(tweetAuthor);

  const tweetAuthorSeparator = document.createElement("span");
  tweetAuthorSeparator.classList.add('dot-separator');
  const separator = document.createTextNode(" · ");
  tweetAuthorSeparator.appendChild(separator);
  tweetHeader.appendChild(tweetAuthorSeparator);

  const tweetDate = document.createElement("span");
  tweetDate.classList.add("tweet-date");
  const dateString = new Date(tweet.createdAt).toLocaleDateString('en-US', {
    year: 'numeric', month: 'short', day: 'numeric'
  });
  const date = document.createTextNode(dateString);
  tweetDate.appendChild(date);
  tweetHeader.appendChild(tweetDate);

  return tweetHeader;
};

const createTweetBody = (tweet) => {
  const tweetBody = document.createElement("div");
  tweetBody.classList.add("tweet-body");

  const bodyText = document.createTextNode(tweet.body);
  tweetBody.appendChild(bodyText);

  return tweetBody;
};