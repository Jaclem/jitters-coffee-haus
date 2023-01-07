
const elFactory = (type, parent, ...className) => {
  const el = document.createElement(type);
  parent.appendChild(el);

  if(className.length !== 0){
    el.className = className;
  }

  return el;
}

export {elFactory};
