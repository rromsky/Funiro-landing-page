`use strict`;

const element = (name) => document.querySelector(`${name}`);

const productItems = document.querySelectorAll(".product__item");
let previousItem;

// Display product items
productItems.forEach((item) => {
  item.addEventListener("click", () => {
    if (previousItem !== undefined && previousItem !== item) {
      const previousItemHiden = previousItem.querySelector(
        ".product__item-hovered"
      );

      if (!previousItemHiden.classList.contains("hide")) {
        previousItemHiden.classList.add("hide");
      }
      if (previousItem.classList.contains("product__item-sale--hover")) {
        previousItem.classList.remove("product__item-sale--hover");
      }
      previousItem = item;
    } else if (previousItem === undefined) {
      previousItem = item;
    }
    const hoveredItem = item.querySelector(".product__item-hovered");
    hoveredItem.classList.toggle("hide");
    item.classList.toggle("product__item-sale--hover");
  });
});
console.log(window.innerWidth);
