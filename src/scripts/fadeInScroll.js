import anime from 'animejs/lib/anime.es.js';

const fadeInScroll = () => {
  const portfolioElements = document.querySelectorAll('.portfolio-item, .card, .contact-form');

  window.addEventListener('scroll', () => {
    
    portfolioElements.forEach((item) => {
      const windowBottom = window.innerHeight + window.scrollY;
      const topItem = item.offsetTop;
      const extraTopItem = item.offsetTop + 250;
      // const bottomItem = item.offsetTop + item.offsetHeight;

      if (windowBottom > extraTopItem) {
        anime({
          targets: item,
          translateY: -20,
          opacity: 1,
          duration: 3000
        });
      } else if (windowBottom < topItem) {
        anime({
          targets: item,
          translateY: 20,
          opacity: 0,
          duration: 3000
        });
      }
    });
  });

};

export { fadeInScroll };
