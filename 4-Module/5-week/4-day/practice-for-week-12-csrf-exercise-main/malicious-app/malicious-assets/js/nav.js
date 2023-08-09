window.addEventListener('DOMContentLoaded', async () => {
  const currentUser = await getCurrentUser();

  if (currentUser && currentUser.user) {
    const logoutBtn = document.createElement("a");
    logoutBtn.setAttribute("href", "");
    logoutBtn.classList.add("logout-button");
    logoutBtn.setAttribute("title", "Log out from Malicious Twitter");
    logoutBtn.addEventListener("click", async () => {
      alert('You can never log out of this site! Mu ha ha!! 😈\nJK, I will be nice and let you sign out if you clear your cookies on the frontend 😊.\nBUT my server will always know your login token forever... 😉')
    });

    logoutIcon = document.createElement("i");
    logoutIcon.classList.add("fa", "fa-sign-out");
    logoutBtn.appendChild(logoutIcon);

    document.querySelector("#nav-links").appendChild(logoutBtn);
  } else {
    const authLinks = document.createElement("section");
    authLinks.setAttribute("id", "auth-links");

    const innerSection = document.createElement("div");
    authLinks.appendChild(innerSection);

    const sectionText = document.createElement("p");
    sectionText.appendChild(document.createTextNode("Log in to Malicious Twitter"));
    innerSection.appendChild(sectionText);

    const loginBtn = document.createElement("a");
    loginBtn.setAttribute("href", "/login");
    loginBtn.classList.add("login-button");
    loginBtn.setAttribute("title", "Log in to Malicious Twitter");
    loginBtn.appendChild(document.createTextNode("Log in to Malicious Twitter"));
    innerSection.appendChild(loginBtn);

    document.querySelector("body").appendChild(authLinks);
  }
});