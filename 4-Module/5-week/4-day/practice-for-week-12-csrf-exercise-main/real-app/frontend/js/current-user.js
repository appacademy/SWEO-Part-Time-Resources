async function getCurrentUser() {
  let currentUser;
  try {
    const res = await fetch('/api/session', {
      credentials: 'include'
    });
    currentUser = await res.json();
  } catch {
  }
  return currentUser;
}