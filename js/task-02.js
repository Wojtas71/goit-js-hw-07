// const ingredients = [
//   'Potatoes',
//   'Mushrooms',
//   'Garlic',
//   'Tomatos',
//   'Herbs',
//   'Condiments',
// ];

// const list = document.querySelector(".ingredients");
// ingredients.forEach((item) => {
  
//   const newItem = item.createElement("li");
//   console.log(list);
// });



// const list = document.querySelector(".ingredients");
// console.log(list);

// const newItem = document.createElement("li");
// console.log(newItem);


// ingredients.forEach(function(item, index) {
//   var elem = document.createElement("li");
//   elem.innerHTML = item;
//   mainList.appendChild(elem);
// });






// const newList = document.querySelector('.ingredients');
// for(let i=0; i < ingredients.length; i++){
//   let li = document.createElement("li");
//   li.textContent = ingredients[i];
//   newList.appendChild(li);
// };


const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ul = document.createElement("ul");
for (let i=0; i < ingredients.length; i++){
  let li = document.createElement("li");
  li.textContent = ingredients[i];
  ul.appendChild(li);
};