const createAddTweetForm = (currentUser) => {
  const createTweet = document.createElement("section");
  createTweet.setAttribute("id", "create-tweet");

  const profilePicture = createProfilePicture(currentUser);
  createTweet.appendChild(profilePicture);

  const form = document.createElement("form");
  form.classList.add("tweet-form");

  const formError = document.createElement("span");
  formError.classList.add("form-error");
  form.appendChild(formError);

  const bodyInput = document.createElement("textarea");
  bodyInput.setAttribute("maxlength", "280");
  bodyInput.setAttribute("name", "body");
  bodyInput.setAttribute("placeholder", "What's happening?");
  form.appendChild(bodyInput);

  const submitBtn = document.createElement("input");
  submitBtn.setAttribute("type", "submit");
  submitBtn.setAttribute("value", `Tweet as ${currentUser.username} from Malicious Twitter`);
  form.appendChild(submitBtn);

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const body = {
      body: formData.get('body') + "\n-- posted through Malicious Twitter 😈😈😈 --"
    };

    const res = await postTweet(body);

    if (res.ok) {
      const errorMessage = document.createTextNode('You just allowed the MaliciousUser to make a tweet with your credentials!! Check the original site to confirm.');
      formError.replaceChildren(errorMessage);
      return;
    }

    try {
      const err = await res.json();
      const errorMessage = document.createTextNode(err.message);
      formError.replaceChildren(errorMessage);
    } catch {
      throw res;
    }
  });

  createTweet.appendChild(form);

  return createTweet;
};