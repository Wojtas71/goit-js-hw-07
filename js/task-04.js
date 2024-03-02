function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

function createBoxes(amount) {
  const boxesContainer = document.getElementById('boxes');
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = '30px';
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);
  }
}

function destroyBoxes() {
  const boxesContainer = document.getElementById('boxes');
  boxesContainer.innerHTML = '';
}

// document.addEventListener('DOMContentLoaded', () => {
//   const createBtn = document.querySelector('[data-create]');
//   const destroyBtn = document.querySelector('[data-destroy]');
  
//   createBtn.addEventListener('click', () => {
//     const amount = parseInt(document.querySelector('input').value);
//     createBoxes(amount);
//   });
  
//   destroyBtn.addEventListener('click', destroyBoxes);
// });

document.querySelector("[data-create]").addEventListener("click", () =>{
  const amount = document.querySelector("input").value;
});

document.querySelector("[data-destroy]").addEventListener("click", () => {
  destroyBoxes();
});