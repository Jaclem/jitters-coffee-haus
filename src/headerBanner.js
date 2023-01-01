import jitterBanner from './assets/jitter-banner.jpg';


function headerBanner() {
  const navBar = document.createElement('nav');
  const liContainer = document.createElement('div');
  const bannerImg = new Image();

  navBar.setAttribute('class', 'nav-bar');

  bannerImg.className = 'nav-img';
  liContainer.className = 'list-container';
  bannerImg.src = jitterBanner;

  document.body.appendChild(navBar);
  navBar.appendChild(bannerImg);
  navBar.appendChild(liContainer);

  // creates 3 list items and "a" tags to append to the nav-bar element
  for(let i = 0; i < 3; i++) {
    const liTags = document.createElement('li');
    const aTags = document.createElement('a');

    liTags.className = 'nav-lists';
    aTags.className = 'nav-links';

    if(i <= 0){
      aTags.textContent = 'Home';
      aTags.setAttribute('href', '#');
    } else if(i <= 1){
      aTags.textContent = 'Menu';
      aTags.setAttribute('href', '#');
    } else if(i <= 2) {
      aTags.textContent = 'Contact Us';
      aTags.setAttribute('href', '#');
    }

    liTags.appendChild(aTags);
    liContainer.appendChild(liTags);
  }

}

export default headerBanner();