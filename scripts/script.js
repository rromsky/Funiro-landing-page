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

let heroItem = 1;
let normalize = 20;

const heroNextItem = element(".hero-btn.slider__btn--right");
const heroPrevItem = element(".hero-btn.slider__btn--left");
const heroSetItem = document.querySelectorAll("hero__indicator");

heroNextItem.addEventListener(`click`, () => {
  if (heroItem < 3) {
    document.querySelectorAll(".hero__photo-desctription").forEach((item) => {
      item.setAttribute(
        "style",
        `transform: translateX(${heroItem * -100 - normalize}%)`
      );
    });
    element(`.photo-desctription-container.id${heroItem}`).classList.toggle(
      `hide`
    );
    element(`.hero__indicator.id${heroItem}`).classList.toggle("active");
    heroItem++;
    element(`.photo-desctription-container.id${heroItem}`).classList.toggle(
      `hide`
    );
    element(`.hero__indicator.id${heroItem}`).classList.toggle("active");
  } else {
    element(`.hero__indicator.id${heroItem}`).classList.toggle("active");
    element(`.photo-desctription-container.id${heroItem}`).classList.toggle(
      `hide`
    );
    heroItem = 1;
    element(`.photo-desctription-container.id${heroItem}`).classList.toggle(
      `hide`
    );
    element(`.hero__indicator.id${heroItem}`).classList.toggle("active");

    document.querySelectorAll(".hero__photo-desctription").forEach((item) => {
      item.setAttribute(
        "style",
        `transform: translateX(${(heroItem - 1) * -100 - normalize}%)`
      );
    });
  }
});
heroPrevItem.addEventListener(`click`, () => {
  if (heroItem > 1) {
    document.querySelectorAll(".hero__photo-desctription").forEach((item) => {
      item.setAttribute(
        "style",
        `transform: translateX(${(heroItem - 2) * -100 - normalize}%)`
      );
    });

    element(`.hero__indicator.id${heroItem}`).classList.toggle("active");
    element(`.photo-desctription-container.id${heroItem}`).classList.toggle(
      `hide`
    );
    heroItem--;
    element(`.hero__indicator.id${heroItem}`).classList.toggle("active");
    element(`.photo-desctription-container.id${heroItem}`).classList.toggle(
      `hide`
    );
  } else {
    element(`.hero__indicator.id${heroItem}`).classList.toggle("active");
    element(`.photo-desctription-container.id${heroItem}`).classList.toggle(
      `hide`
    );
    heroItem = 3;
    element(`.hero__indicator.id${heroItem}`).classList.toggle("active");
    element(`.photo-desctription-container.id${heroItem}`).classList.toggle(
      `hide`
    );

    document.querySelectorAll(".hero__photo-desctription").forEach((item) => {
      item.setAttribute(
        "style",
        `transform: translateX(${(heroItem - 1) * -100 - normalize}%)`
      );
    });
  }
});
