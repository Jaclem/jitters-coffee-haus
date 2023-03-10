import { removeAllChildNodes } from "./removeChildren";
import { elFactory } from "./elFactory";

function menu() {
  const mainContainer = document.querySelector('.main-container');
  const navBar = document.querySelector('.nav-bar');

  removeAllChildNodes(mainContainer);

  mainContainer.classList.add('menu');
  mainContainer.classList.remove('contact');

  const menuWelcome = elFactory('h1', mainContainer, 'menu-h1');
  const header = elFactory('div', mainContainer, 'menu-header');
  const iced = elFactory('h1', header);
  const hot = elFactory('h1', header);

  menuWelcome.textContent = "Menu";
  iced.textContent = "Iced";
  hot.textContent = "Hot";

  const menuItemsContainer = elFactory('p', mainContainer, 'menu-item-container');
  const espresso = elFactory('p', menuItemsContainer);
  const chocolate = elFactory('p', menuItemsContainer);

  const latte = elFactory('p', menuItemsContainer);
  const flatWhite = elFactory('p', menuItemsContainer);

  const cocoa = elFactory('p', menuItemsContainer);
  const cappuccino = elFactory('p', menuItemsContainer);

  const mocha = elFactory('p', menuItemsContainer);
  const milkTea = elFactory('p', menuItemsContainer);

  espresso.textContent = "Espresso - $5";
  chocolate.textContent = "Chocolate - $5";

  latte.textContent = "Latte - $4";
  flatWhite.textContent = "Flat White - $5";

  cocoa.textContent = "Cocoa - $5";
  cappuccino.textContent = "Cappuccino - $5";

  mocha.textContent = "Mocha - $3";
  milkTea.textContent = "Milk Tea - $6.5";

}

export {menu};