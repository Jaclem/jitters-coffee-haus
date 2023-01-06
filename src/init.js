
function init() {
  const navBar = document.createElement('nav');
  const main = document.createElement('main');
  const footer = document.createElement('footer');
  const content = document.getElementById('content');

  navBar.className = 'nav-bar';
  main.className = 'main-container';
  footer.className = 'footer-container';

  content.append(navBar, main, footer);
}

export {init};