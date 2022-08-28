const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.querySelector('#ingredients');




 function addIngredients (ingredients) {
  const listArray = [];
  ingredients.forEach( (ingredient) => {
    const list = document.createElement('li');
    list.textContent = ingredient;
    list.classList.add('item');
    listArray.push(list);
  })
  return listArray;
}



const liList = addIngredients (ingredients);
ulEl.append(...liList);
