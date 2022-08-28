let counterValue = 0;
const valueEl = document.querySelector('#value');
const addBtn = document.querySelector('button[data-action="increment"]');
const decreseBtn = document.querySelector('button[data-action="decrement"]');

addBtn.addEventListener("click", () => {
    counterValue += 1;
    valueEl.textContent = counterValue;
})

decreseBtn.addEventListener("click", () => {
    counterValue -= 1;
    valueEl.textContent = counterValue;
})