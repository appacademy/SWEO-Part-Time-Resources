document.addEventListener('DOMContentLoaded', () => {
  document
    .getElementById('date-selector')
    .addEventListener('change', function () {
      const d = new Date(Date.parse(this.value));
      location.href = `/${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate() + 1}`;
    });
});
