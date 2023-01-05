
function menu() {
  const mainContainer = document.querySelector('.main-container');
  const navBar = document.querySelector('.nav-bar');
  const menuContainer = document.createElement('div');
  mainContainer.remove();

  menuContainer.className = 'menu';

  const elFactory = (type, parent, ...className) => {
    const el = document.createElement(type);
    parent.appendChild(el);

    if(className.length !== 0){
      el.className = className;
    }

    return el;
  }

  navBar.after(menuContainer);

  const header = elFactory('div', menuContainer, 'menu-header');
  const iced = elFactory('h1', header);
  const hot = elFactory('h1', header);

  iced.textContent = "Iced";
  hot.textContent = "Hot";

  const menuItemsContainer = elFactory('p', menuContainer, 'menu-item-container');
  const espresso = elFactory('p', menuItemsContainer);
  const chocolate = elFactory('p', menuItemsContainer);

  const latte = elFactory('p', menuItemsContainer);
  const flatWhite = elFactory('p', menuItemsContainer);

  const cocoa = elFactory('p', menuItemsContainer);
  const cappuccino = elFactory('p', menuItemsContainer);

  const mocha = elFactory('p', menuItemsContainer);
  const milkTea = elFactory('p', menuItemsContainer);
}

export {menu};