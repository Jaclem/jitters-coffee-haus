import latteImg from './assets/latte.jpg';
import americanoImg from './assets/americano.jpg';
import mochaImg from './assets/mocha.jpg';
import placeholderImg from './assets/placeholder.jpg';
import { removeAllChildNodes } from './removeChildren';
import { elFactory } from './elFactory';

function mainContent() {
  const mainContainer = document.querySelector('.main-container');
  const navBar = document.querySelector('.nav-bar');

  removeAllChildNodes(mainContainer);

  mainContainer.classList.remove('menu');
  mainContainer.classList.remove('contact');

  const imgFactory = (name, src, className, parent) => {
    name = new Image();
    name.className = className;
    name.src = src;
    parent.appendChild(name);
  }

  const imgContainer = elFactory('div', mainContainer, 'img-container');

  const latte = imgFactory('latte', latteImg, 'latte-img', imgContainer);
  const americano = imgFactory('Americano', americanoImg, 'americano-img', imgContainer);
  const moca = imgFactory('mocha', mochaImg, 'mocha-latte', imgContainer);

  const titleContainer = elFactory('div', mainContainer, 'title-container');

  for(let i = 0; i < 3; i++){
    if(i <= 0){
      const title = elFactory('h1', titleContainer);
      title.textContent = 'Latte';
    } else if(i <= 1){
      const title = elFactory('h1', titleContainer);
      title.textContent = 'Americano';
    } else if(i <= 2) {
      const title = elFactory('h1', titleContainer);
      title.textContent = 'Mocha';
    }
  }

  const menuContainer = elFactory('div', mainContainer, 'menu-container');
  const menuContent = elFactory('div', menuContainer, 'menu-aside-left');
  const menuAside = elFactory('div' , menuContainer, 'menu-aside-right');
  const menuHeader = elFactory('h1', menuContent);
  const menuText = elFactory('p', menuContent);
  const menuBtn = elFactory('button', menuContent);

  const placeholder = imgFactory('placeholder', placeholderImg, 'placeholder-img', menuAside);

  menuHeader.textContent = 'Test';
  menuText.textContent = 'Have a look at our hand-crafted coffee\'s and latte\'s';
  menuBtn.textContent = 'Menu';

  menuBtn.id = 'middle-menu-btn';

  menuBtn.setAttribute('href', '#');

}

export {mainContent};