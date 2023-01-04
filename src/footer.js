
function footer() {
  const footerContainer = document.createElement('div');
  footerContainer.className = 'footer-container';
  document.body.appendChild(footerContainer);

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

  const subscribeConatiner = elFactory('div', footerContainer, 'sub-container');
  const subLabel = elFactory('label', subscribeConatiner);
  const subDiv = elFactory('div', subscribeConatiner, 'sub-div');
  const subInput = elFactory('input', subDiv);
  const subBtn = elFactory('button', subDiv);

  subLabel.textContent = 'Sign up to our monthly news letter and receive monthly deals on coffee, accessaries, and more!';
  subBtn.textContent = 'Subscribe';  
}

export default footer();