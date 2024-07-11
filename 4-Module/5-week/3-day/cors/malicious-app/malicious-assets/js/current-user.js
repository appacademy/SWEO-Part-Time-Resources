async function getCurrentUser() {
  let currentUser;
  try {
    const cookies = document.cookie.split('; ').reduce((acc, cookie) => {
      const [name, value] = cookie.split('=');
      acc[name] = value;
      return acc;
    }, {});
    const token = cookies['token'];
  
    const payloadEncoded = token.split('.')[1];
    const payload = atob(payloadEncoded);
    currentUser = JSON.parse(payload);
  } catch {}
  return currentUser;
}