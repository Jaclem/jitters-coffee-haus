import { removeAllChildNodes } from "./removeChildren";
import { elFactory } from "./elFactory";

function contact() {
  const mainContainer = document.querySelector('.main-container');

  removeAllChildNodes(mainContainer);

  mainContainer.classList.remove('menu');
  mainContainer.classList.add('contact');

  const contactMessage = elFactory('h1', mainContainer);
  const contactForm = elFactory('form', mainContainer, 'form-container');
  const labelName = elFactory('label', contactForm, 'full-name');
  const inputName = elFactory('input', contactForm, 'name-input');
  const labelEmail = elFactory('label', contactForm, 'email-label');
  const inputEmail = elFactory('input', contactForm);
  const labelMessage = elFactory('label', contactForm);
  const inputMessage = elFactory('textarea', contactForm);
  const submitBtn = elFactory('button', contactForm);


  contactMessage.textContent = 'Send us a message!';
  labelName.textContent = 'Full Name';
  labelEmail.textContent = 'Email';
  labelMessage.textContent = 'Your message';
  submitBtn.textContent = 'Submit';
  
}

export {contact};