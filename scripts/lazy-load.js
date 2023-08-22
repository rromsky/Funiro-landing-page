`use strict`;

const targets = document.querySelectorAll(".lazy-hide");

const lazyLoad = (target) => {
  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const t = entry.target;
        t.classList.add("animation-left");
        t.classList.remove("lazy-hide");

        observer.disconnect();
      }
    });
  });

  io.observe(target);
};

targets.forEach(lazyLoad);

const containers = document.querySelectorAll(".lazy-container");

const lazyLoadContainer = (target) => {
  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const t = entry.target;
        const src = t.getAttribute("data-lazy");
        t.classList.remove("lazy-container");
        t.setAttribute("style", `background-image: url(${src})`);
        observer.disconnect();
      }
    });
  });

  io.observe(target);
};

containers.forEach(lazyLoadContainer);

const images = document.querySelectorAll(".lazy-image");

const lazyLoadImage = (target) => {
  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const t = entry.target;
        const src = t.getAttribute("data-lazy");
        t.setAttribute("src", src);
        t.classList.remove("lazy-image");
        observer.disconnect();
      }
    });
  });

  io.observe(target);
};

images.forEach(lazyLoadImage);

const bac = document.querySelector(".photo-desctription-container");
bac.addEventListener("hover", () => {
  console.log("hovered");
});
