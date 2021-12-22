// utility
const getEle = (name, multiple) => {
  if (multiple) return document.querySelectorAll(name);
  return document.querySelector(name);
};

const listen = (DomName, event, callback) => {
  return DomName.addEventListener(event, callback);
};

const sidebar = getEle(".sidebar");
const menuBtn = getEle("#menu-btn");
const closeSidebar = getEle("#close-sidebar");
const searchForm = getEle(".search-form");
const searchBtn = getEle("#search-btn");
const accordions = getEle(".accordion-container .accordion", true);

listen(menuBtn, "click", () => {
  sidebar.classList.toggle("active");
});

listen(closeSidebar, "click", () => {
  sidebar.classList.remove("active");
});

listen(searchBtn, "click", () => {
  searchForm.classList.toggle("active");
});

window.onscroll = () => {
  sidebar.classList.remove("active");
  searchForm.classList.remove("active");
};

accordions.forEach((accordion) => {
  listen(accordion, "click", () => {
    accordion.classList.toggle("active");
  });
});

var swiper = new Swiper(".home-slider", {
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".review-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  breakpoints: {
    450: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
