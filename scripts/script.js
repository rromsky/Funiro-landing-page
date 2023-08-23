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
const heroSetItem = document.querySelectorAll(".hero__indicator");

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
// heroSetItem.forEach((item) => {
//   item.addEventListener("click", () => {
//     element(`.photo-desctription-container.id${heroItem}`).classList.toggle(
//       `hide`
//     );
//     element(`.hero__indicator.id${heroItem}`).classList.toggle("active");
//     heroItem = item.getAttribute("idd") - 0;
//     element(`.photo-desctription-container.id${heroItem}`).classList.toggle(
//       `hide`
//     );
//     element(`.hero__indicator.id${heroItem}`).classList.toggle("active");
//     console.log(`${heroItem}`);
//     console.log(`.hero__indicator.id${heroItem}`);
//     document.querySelectorAll(".hero__photo-desctription").forEach((el) => {
//       el.setAttribute(
//         "style",
//         `transform: translateX(${heroItem * -100 - normalize}%)`
//       );
//     });
//   });
// });
//MOBILE NAVIGATION OPEN/CLOSE

const mobileOpenBtn = element(".mobile-nav--open");
const mobileCloseBtn = element(".mobile__menu-close--btn");
const mobileNav = element(".mobile__menu");

const swapNav = () => {
  mobileNav.classList.toggle("ab-hide");
};
mobileOpenBtn.addEventListener(`click`, swapNav);
mobileNav.addEventListener(`click`, swapNav);

//Tips & Tricks slide bar

const nextTipItem = document.getElementById(`pls`);
const prevTipItem = element(".tips-btn.slider__btn--left");
let tipSlide = 2;

nextTipItem.addEventListener("click", () => {
  element(`.slide.id${tipSlide}`).classList.toggle(`active`);
  element(`.tips__indicator.id${tipSlide}`).classList.toggle(`active`);
  tipSlide = tipSlide == 5 ? 1 : tipSlide + 1;
  element(`.slide.id${tipSlide}`).classList.toggle(`active`);
  element(`.tips__indicator.id${tipSlide}`).classList.toggle(`active`);
  console.log(tipSlide);
  for (let i = 1; i <= 5; i++) {
    element(`.slide.id${i}`).setAttribute(
      "style",
      `transform: translateX(${i * 105 + (tipSlide - 1) * -100}%)`
    );
  }
});
prevTipItem.addEventListener("click", () => {
  element(`.tips__indicator.id${tipSlide}`).classList.toggle(`active`);
  element(`.slide.id${tipSlide}`).classList.toggle(`active`);
  tipSlide = tipSlide == 1 ? 5 : tipSlide - 1;
  element(`.slide.id${tipSlide}`).classList.toggle(`active`);
  element(`.tips__indicator.id${tipSlide}`).classList.toggle(`active`);
  console.log(tipSlide);
  for (let i = 1; i <= 5; i++) {
    element(`.slide.id${i}`).setAttribute(
      "style",
      `transform: translateX(${i * 105 + (tipSlide - 1) * -100}%)`
    );
  }
});

//Rooms slide bar
const nextRoom = element(`.slider__btn.rooms-btn`);
const rooms = [1, 2, 3];

nextRoom.addEventListener(`click`, () => {
  element(`.rooms__indicator.id${rooms[0]}`).classList.toggle(`active`);
  rooms.push(rooms[0]);
  rooms.reverse();
  rooms.pop();
  rooms.reverse();
  element(`.rooms__indicator.id${rooms[0]}`).classList.toggle(`active`);
  for (let i = 1; i <= 3; i++) {
    element(`.photo__section-element.item--id-${rooms[i - 1]}`).classList.add(
      `item${i}`
    );
    element(
      `.photo__section-element.item--id-${rooms[i - 1]}`
    ).classList.remove(`item${i == 3 ? 1 : i + 1}`);
  }
});
