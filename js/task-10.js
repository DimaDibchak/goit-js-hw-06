function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputElement = document.querySelector('#controls').children[0];

const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]")

const boxesEl = document.querySelector('#boxes');
function createBoxes ( ) {
  destroyBoxes();
  const array = [];
  for ( let i = 1; i <= inputElement.value; i++) {
    const div = document.createElement("div");
    div.textContent = i;
    div.style.backgroundColor = getRandomHexColor();
    div.style.width = `${20 + i*10}px`;
    div.style.height = `${20 + i*10}px`;
    div.style.display = 'flex';
    div.style.justifyContent = 'center';
    div.style.alignItems = 'center';
    div.style.marginBottom = '10px';
    div.style.fontSize = `${5 + i*10}px`;
    array.push(div);
  }
  boxesEl.append(...array);
}
createBtn.addEventListener('click', createBoxes)
function destroyBoxes () {
  boxesEl.innerHTML = ' ';
}
destroyBtn.addEventListener('click', destroyBoxes)
