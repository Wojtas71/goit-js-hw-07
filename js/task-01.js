const listWithId = document.querySelector('#categories');
const menuItemByTagName = listWithId.querySelectorAll(".item");
console.log("Number of categories: " + menuItemByTagName.length);
console.log(" ");

const totalItems = document.querySelectorAll('.item');
totalItems.forEach((item) => {
    const titleItem = item.firstElementChild.textContent;
    const totalPositionOfItem = item.lastElementChild.children.length;
    console.log("Category: " + titleItem);
    console.log("Elements: " + totalPositionOfItem);
    console.log(" ");
});
