const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// const list = document.querySelector("#ingredients");
// for(let i=0; i < ingredients.length; i++){
//   const li = document.createElement("li");
//   li.textContent = ingredients[i];
//   list.append(li);
// };


const list = document.querySelector("#ingredients");
const items = ingredients.map((item) => {
  const li = document.createElement("li");
  li.textContent = item;
  li.classList.add("item")
  return li;
});
list.append(...items)