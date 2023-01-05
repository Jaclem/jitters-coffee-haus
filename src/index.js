import './style/main.scss';
import {headerBanner} from './headerBanner';
import {mainContent} from './mainContent';
import {footer} from './footer';
import { menu } from './menu';

headerBanner();
mainContent();
footer();
menu();

const menuBtn = document.getElementById('menu-btn');
const homeBtn = document.getElementById('home-btn');

homeBtn.addEventListener('click', () => {
  headerBanner();
  mainContent();
  footer();
})

menuBtn.addEventListener('click', () => {
  menu();
});
