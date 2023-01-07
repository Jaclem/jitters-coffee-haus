import './style/main.scss';
import { headerBanner } from './headerBanner';
import { mainContent } from './mainContent';
import { footer } from './footer';
import { menu } from './menu';
import { init } from './init';
import { contact } from './contact';

init();
headerBanner();
mainContent();
footer();

const homeBtn = document.getElementById('home-btn');
const menuBtn = document.getElementById('menu-btn');
const contactBtn = document.getElementById('contact-btn');
const middleMenuBtn = document.getElementById('middle-menu-btn');

homeBtn.addEventListener('click', () => {
  mainContent();
});

menuBtn.addEventListener('click', () => {
  menu();
});

middleMenuBtn.addEventListener('click', () => {
  menu();
});

contactBtn.addEventListener('click', () => {
  contact();
})

