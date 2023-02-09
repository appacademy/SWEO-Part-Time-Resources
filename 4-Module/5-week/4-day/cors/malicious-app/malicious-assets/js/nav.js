window.addEventListener('DOMContentLoaded', async () => {
  const currentUser = await getCurrentUser();

  if (currentUser && currentUser.user) {
    const logoutBtn = document.createElement("a");
    logoutBtn.setAttribute("href", "");
    logoutBtn.classList.add("logout-button");
    logoutBtn.setAttribute("title", "Log out");
    logoutBtn.addEventListener("click", async () => {
      await fetch('http://localhost:5001/api/session', {
        method: 'DELETE',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        }
      });
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