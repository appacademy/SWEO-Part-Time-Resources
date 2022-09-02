window.addEventListener('DOMContentLoaded', async () => {
  const currentUser = await getCurrentUser();

  if (currentUser && currentUser.user) {
    const logoutBtn = document.createElement("a");
    logoutBtn.setAttribute("href", "");
    logoutBtn.classList.add("logout-button");
    logoutBtn.setAttribute("title", "Log out");
    logoutBtn.addEventListener("click", async () => {
      await fetch('/api/session', {
        method: 'DELETE',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          /* -------------------- Pass CSRF Protection ------------------- */
          'XSRF-Token': getCSRFTokenCookie()
          /* ------------------------------------------------------------- */
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
    sectionText.appendChild(document.createTextNode("Log in to Twitter"));
    innerSection.appendChild(sectionText);

    const loginBtn = document.createElement("a");
    loginBtn.setAttribute("href", "/login");
    loginBtn.classList.add("login-button");
    loginBtn.setAttribute("title", "Log in");
    loginBtn.appendChild(document.createTextNode("Log in"));
    innerSection.appendChild(loginBtn);

    document.querySelector("body").appendChild(authLinks);
  }
});