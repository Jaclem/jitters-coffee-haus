import latteImg from './assets/latte.jpg';
import americanoImg from './assets/americano.jpg';
import mochaImg from './assets/mocha.jpg';
import placeholderImg from './assets/placeholder.jpg';

function mainContent() {
  const mainContainer = document.createElement('main');
  mainContainer.className = 'main-container';
  document.body.appendChild(mainContainer);

  const elFactory = (type, parent, ...className) => {
    const el = document.createElement(type);
    el.className = className;
    parent.appendChild(el);

    return el;
  }

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
  menuText.textContent = 'ljsdflkjsdf lksdkkfke, l;askkkdfjsl';
  menuBtn.textContent = 'Menu';

}

//   titleContainer.appendChild(titles);
// }
// mainContainer.append(titleContainer, menuContainer);

// const menuContent = document.createElement('div');
// const menuAside = document.createElement('div');
// const menuHeader = document.createElement('h1');
// const menuText = document.createElement('p');
// const menuBtn = document.createElement('button');

// menuContainer.append(menuContent, menuAside);
// menuContent.append(menuHeader, menuText, menuBtn);
// menuAside.append(placeholder);

// menuHeader.textContent = 'Have a look at our menu!';
// menuText.textContent = 'lkjsdj lkjsdkkke kslla, ljsdf;;aslkdjf, llslieiisi lkjsdj lkjsdkkke kslla, ljsdf;;aslkdjf, llslieiisi';
// menuBtn.textContent = 'Menu';
// menuBtn.setAttribute('href', '#');

// menuContent.className = 'menu-aside-left';
// menuAside.className = 'menu-aside-right';

// const test = elFactory('div', 'test-div', mainContainer);
// test.append();
// // mainContainer.appendChild(test);

export default mainContent();