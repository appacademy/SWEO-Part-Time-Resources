window.addEventListener('DOMContentLoaded', async () => {
  const form = document.querySelector('#login-form');
  const formError = document.querySelector('.form-error');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const body = {
      username: formData.get('username'),
      password: formData.get('password')
    };
    const res = await fetch('/api/session', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    });

    if (res.ok) {
      window.location.href = window.location.origin;
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
});

