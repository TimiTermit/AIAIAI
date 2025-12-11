document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.nav__item');
  links.forEach(a => {
    if (a.href === location.href || a.getAttribute('href') === location.pathname.split('/').pop()) {
      a.classList.add('is-active');
    }
  });

  const form = document.querySelector('.form--contact');
  if (form) form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Dziękujemy! Wiadomość wysłana (symulacja).');
    form.reset();
  });
});