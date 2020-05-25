import '../styles/application.scss';
import { initTypedJs } from './init_typed';
import { fadeInScroll } from './fadeInScroll';
import { navbar, displayNavbar } from './navbar';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

window.addEventListener('load', () => {
  initTypedJs();
  // fadeInScroll();
  navbar();
  displayNavbar();
  AOS.init();
});

