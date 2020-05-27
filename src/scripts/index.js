import '../styles/application.scss';
import { initTypedJs } from './init_typed';
import { navbar, displayNavbar } from './navbar';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

window.addEventListener('DOMContentLoaded', () => {
  initTypedJs();
  navbar();
  displayNavbar();
  AOS.init();
});

