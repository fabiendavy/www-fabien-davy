import Typed from 'typed.js';
 
const initTypedJs = () => {
  const options = {
    strings: ['FULLSTACK DEVELOPER', 'MAKER', 'BOUDARIES PUSHER'],
    typeSpeed: 150,
    loop: true
  };
  
  const p = document.querySelector('p');
  new Typed(p, options);
};

export { initTypedJs };
