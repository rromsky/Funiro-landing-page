`use strict`;

const productItems = document.querySelectorAll(".product__item");
let previousItem;

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
