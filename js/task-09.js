function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const buttonEl = document.querySelector('.change-color');

const textEl = document.querySelector('.color');

function bgColorChange () {
  document.body.style.backgroundColor = getRandomHexColor();

  textEl.innerText = getRandomHexColor();
}


buttonEl.addEventListener('click', bgColorChange );

// document.body.style.backgroundColor