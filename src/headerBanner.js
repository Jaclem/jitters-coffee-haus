import jitterBanner from './assets/paper-background.jpg';

function headerBanner() {
  const navBar = document.createElement('nav');
  const liContainer = document.createElement('div');
  const bannerTextContainer = document.createElement('div');
  const bannerHeaderText = document.createElement('h1');
  const bannerParagraphText = document.createElement('p');
  const content = document.getElementById('content');
  const bannerImg = new Image();

  navBar.setAttribute('class', 'nav-bar');

  bannerTextContainer.className = 'welcome-container';
  bannerHeaderText.className = 'welcome-header';
  bannerParagraphText.className = 'welcome-par';
  bannerImg.className = 'nav-img';
  liContainer.className = 'list-container';
  bannerImg.src = jitterBanner;

  bannerHeaderText.textContent = 'JITTERS COFFEE HAUS';
  bannerParagraphText.textContent = 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident';

  bannerTextContainer.appendChild(bannerHeaderText);
  bannerTextContainer.appendChild(bannerParagraphText);
  content.appendChild(navBar);
  navBar.appendChild(bannerImg);
  navBar.appendChild(liContainer);
  navBar.appendChild(bannerTextContainer);

  // creates 3 list items and "a" tags to append to the nav-bar element
  for(let i = 0; i < 3; i++) {
    const liTags = document.createElement('li');
    const aTags = document.createElement('a');

    liTags.className = 'nav-lists';
    aTags.className = 'nav-links';

    if(i <= 0){
      aTags.textContent = 'Home';
      aTags.setAttribute('id', 'home-btn');
      aTags.setAttribute('href', '#');
    } else if(i <= 1){
      aTags.textContent = 'Menu';
      aTags.setAttribute('id', 'menu-btn');
      aTags.setAttribute('href', '#');
    } else if(i <= 2) {
      aTags.textContent = 'Contact Us';
      aTags.setAttribute('id', 'contact-btn');
      aTags.setAttribute('href', '#');
    }

    liTags.appendChild(aTags);
    liContainer.appendChild(liTags);
  }
}

export {headerBanner};