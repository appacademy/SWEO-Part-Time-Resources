window.addEventListener('DOMContentLoaded', () => {
  console.log('event-handling.js script was successfully loaded');
  const cogIcon = document.querySelector('.fas.fa-cog');
  cogIcon.addEventListener('click', event => {
    console.log('Gear clicked');
    event.stopPropagation();
    document.querySelector('.pref').classList.remove('pref--hidden');
  });

  window.addEventListener('click', () => {
    console.log('HTML document clicked');
    document.querySelector('.pref').classList.add('pref--hidden');
  });

  const searchIcon = document.querySelector('.fa.fa-search');
  searchIcon.addEventListener('click', () => {
    console.log('Search clicked');
    const modal = document.querySelector('.search-modal');
    modal.classList.toggle('search-modal--hidden');
  });
});