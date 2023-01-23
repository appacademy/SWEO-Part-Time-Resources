document.addEventListener('DOMContentLoaded', (e) => {
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');

    document.getElementById('click-me').addEventListener('click', (e) => {
      modal.style.display = 'flex';
      modalContent.style.display = 'flex';
      modalContent.innerHTML = `
      <h2>Subscribe to our newsletter</h2>
      <form id="my-form" action="/users" method="POST">
          <label for="email">Email</label>
          <input type="text" name="email">
          <button>Submit</button>
      </form>
      `;

      const form = document.getElementById('my-form');
      form.addEventListener('submit', (e) => {
        const inputVal = document.querySelector('input').value;
        if (
          !inputVal.includes('@') &&
          (!inputVal.includes('.com') || !inputVal.includes('.io'))
        ) {
        //   e.preventDefault(); //prevents form from submitting if there's an error!
          alert('Invalid email');
        }
      });
    });

    modal.addEventListener('click', (e) => {
      modal.style.display = 'none';
    });

    modalContent.addEventListener('click', (e) => {
      e.stopPropagation();
    });
  });
