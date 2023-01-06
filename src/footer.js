
function footer() {
  const footerContainer = document.querySelector('.footer-container');
  const content = document.getElementById('content');
  footerContainer.className = 'footer-container';
  content.appendChild(footerContainer);

  const elFactory = (type, parent, ...className) => {
    const el = document.createElement(type);
    parent.appendChild(el);

    if(className.length !== 0){
      el.className = className;
    }

    return el;
  } 

  const elementOne = elFactory('div', footerContainer, 'element-one');
  const elementHeader = elFactory('h1', elementOne);
  const elementText = elFactory('p', elementOne);

  elementHeader.textContent = 'Jitters Coffee Haus';
  elementText.textContent = 'The most delicious caffeinated drinks this side of Atlanta';

  const subContainer = elFactory('div', footerContainer, 'sub-container');
  const subLabel = elFactory('label', subContainer);
  const subDiv = elFactory('div', subContainer, 'sub-div');
  const subInput = elFactory('input', subDiv);
  const subBtn = elFactory('button', subDiv);

  subLabel.textContent = 'Sign up to our monthly news letter and receive monthly deals on coffee, accessaries, and more!';
  subBtn.textContent = 'Subscribe';  
}

export {footer};