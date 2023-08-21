`use strict`;

const productItem = document.querySelector(".product__item");
const productItemHovered = document.querySelector(".product__item-hovered");

productItem.addEventListener("click", () => {
  productItemHovered.classList.toggle("hide");
});
