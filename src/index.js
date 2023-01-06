import './style/main.scss';
import {headerBanner} from './headerBanner';
import {mainContent} from './mainContent';
import {footer} from './footer';
import { menu } from './menu';

headerBanner();
mainContent();
footer();

const menuBtn = document.getElementById('menu-btn');
const homeBtn = document.getElementById('home-btn');

let clicked = false;

homeBtn.addEventListener('click', () => {
  if(clicked) {
    const menu = document.querySelector('.menu');
    menu.remove();
    mainContent();
  }
})

menuBtn.addEventListener('click', () => {
  const menuContainer = document.querySelector('.menu');
  if(menuContainer != null) {
    menuContainer.remove();
  }
  menu();
  clicked = true;
});
