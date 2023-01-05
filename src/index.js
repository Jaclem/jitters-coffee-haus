import './style/main.scss';
import {headerBanner} from './headerBanner';
import {mainContent} from './mainContent';
import {footer} from './footer';
import { menu } from './menu';

headerBanner();
mainContent();
footer();
// menu();

const menuBtn = document.getElementById('menu-btn');
const homeBtn = document.getElementById('home-btn');

let clicked = false;

homeBtn.addEventListener('click', () => {
  if(clicked) {
    mainContent();
  }
})

menuBtn.addEventListener('click', () => {
  menu();
  clicked = true;
});
