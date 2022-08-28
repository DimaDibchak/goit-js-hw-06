const ulEl = document.querySelector('#categories');
const categories = ulEl.querySelectorAll('.item');
const categoriesAmount = [...categories].reduce((amount, category) => amount += 1, 0);
console.log(`Number of categories: ${categoriesAmount}`);


categories.forEach((categori) => {
    const titleEl = categori.querySelector('h2');
    const elemenst = categori.querySelectorAll('li');
    const elemenstAmount = [...elemenst].reduce((amount, element) => amount += 1, 0);
    console.log(`Category: ${titleEl.textContent}`);
    console.log(`Elements: ${elemenstAmount}`);
})
