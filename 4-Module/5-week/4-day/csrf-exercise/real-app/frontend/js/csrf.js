function getCSRFTokenCookie() {
  // CSRF Protection:
  const cookies = document.cookie.split('; ').reduce((acc, cookie) => {
    const [name, value] = cookie.split('=');
    acc[name] = value;
    return acc;
  }, {});
  const csrfToken = cookies['XSRF-Token'];
  return csrfToken;
}