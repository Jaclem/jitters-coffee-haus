import './style/main.scss';
import {headerBanner} from './headerBanner';
import {mainContent} from './mainContent';
import {footer} from './footer';
import { menu } from './menu';
import { init } from './init';

init();
headerBanner();
mainContent();
footer();

const homeBtn = document.getElementById('home-btn');
const menuBtn = document.getElementById('menu-btn');
const contactBtn = document.getElementById('contact-btn');

// let clicked = false;

// homeBtn.addEventListener('click', () => {
//   if(clicked) {
//     const menu = document.querySelector('.menu');
//     menu.remove();
//     mainContent();
//   }
// })

homeBtn.addEventListener('click', () => {
  mainContent();
});

menuBtn.addEventListener('click', () => {
  menu();
});

// menuBtn.addEventListener('click', () => {
//   const menuContainer = document.querySelector('.menu');
//   if(menuContainer != null) {
//     menuContainer.remove();
//   }
//   menu();
//   clicked = true;
// });

// contactBtn.addEventListener('click', () => {
//   const menu = document.querySelector('.menu');
//   menu.remove();
//   clicked = true;
// })
