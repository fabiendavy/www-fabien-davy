import anime from 'animejs/lib/anime.es.js';

const navbar = () => {
  document.addEventListener('DOMContentLoaded', () => {
  
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
  
      // Add a click event on each of them
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {
  
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);
  
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
  
        });
      });
    }
  });
};

const displayNavbar = () => {
  const windowBottom = window.innerHeight;
  const nav = document.querySelector('nav');

  window.addEventListener('scroll', () => {
    if (window.scrollY >= windowBottom) {
      anime({
        targets: nav,
        opacity: 1,
        duration: 2000
      });
    } else {
      anime({
        targets: nav,
        opacity: 0,
        duration: 2000
      });
    }
  });
};

export { navbar, displayNavbar };
