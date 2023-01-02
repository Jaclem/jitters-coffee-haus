import latteImg from './assets/latte.jpg';
import americanoImg from './assets/americano.jpg';
import mocaImg from './assets/moca.jpg';
import placeholderImg from './assets/placeholder.jpg';

function mainContent() {
  const mainContainer = document.createElement('main');
  const imgContainer = document.createElement('div');
  const titleContainer = document.createElement('div');
  const menuContainer = document.createElement('div');

  const latte = new Image();
  const americano = new Image();
  const moca = new Image();
  const placeholder = new Image();

  // adding src to images;
  latte.src = latteImg;
  americano.src = americanoImg;
  moca.src = mocaImg;
  placeholder.src = placeholderImg;

  // adding class names to the contents
  mainContainer.className = 'main-container';
  imgContainer.className = 'img-container';
  titleContainer.className = 'title-container';
  menuContainer.className = 'menu-container';
  latte.className = 'latte-img';
  americano.className = 'americano-img';
  moca.className = 'moca-img';

  document.body.appendChild(mainContainer);
  imgContainer.append(latte, americano, moca);
  mainContainer.appendChild(imgContainer);

  for(let i = 0; i < 3; i++){
    const titles = document.createElement('h1');

    if(i <= 0){
      titles.textContent = 'Latte';
    } else if(i <= 1){
      titles.textContent = 'Americano';
    } else if(i <= 2) {
      titles.textContent = 'Moca';
    }

    titleContainer.appendChild(titles);
  }
  mainContainer.append(titleContainer, menuContainer);

  const menuContent = document.createElement('div');
  const menuAside = document.createElement('div');
  const menuHeader = document.createElement('h1');
  const menuText = document.createElement('p');
  const menuBtn = document.createElement('button');

  menuContainer.append(menuContent, menuAside);
  menuContent.append(menuHeader, menuText, menuBtn);
  menuAside.append(placeholder);

  menuHeader.textContent = 'Have a look at our menu!';
  menuText.textContent = 'lkjsdj lkjsdkkke kslla, ljsdf;;aslkdjf, llslieiisi lkjsdj lkjsdkkke kslla, ljsdf;;aslkdjf, llslieiisi';
  menuBtn.textContent = 'Menu';
  menuBtn.setAttribute('href', '#');

  menuContent.className = 'menu-aside-left';
  menuAside.className = 'menu-aside-right';
  menuImg.className = 'aside-img';
}

export default mainContent();