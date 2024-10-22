// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

const isTouchScreen = window.matchMedia("(any-hover:none)").matches;

window.addEventListener("load", windowLoaded);

function windowLoaded() {
  //* Додавання класів .ім'я-класу_open до тегу <head>
  /*let documentActions = (e) => {
    const targetElement = e.target;
    const typeEvent = e.type;
    const targetTag = targetElement.tagName;

    if (targetElement.closest(".search-header__open")) {
      document.documentElement.classList.toggle("search-open");
    } else if (!targetElement.closest(".search-header__body")) {
      document.documentElement.classList.remove("search-open");
    }

    //* Подія при кліку на кнопку фільтру для показу секції Filter
    if (targetElement.closest(".filter-button")) {
      if (window.innerWidth < 768) {
        document.documentElement.classList.toggle("filter-open");
      }
    } else if (!targetElement.closest(".content-category__filter")) {
      document.documentElement.classList.remove("filter-open");
    }
  };*/

  //* Функція для визначення висоти у header і встановлення висоти для &:before .menu__body
  function updateHeightMenuBodyBefore() {
    const header = document.querySelector(".header");
    if (!header) return;
    const headerHeight = header.offsetHeight;
    document.documentElement.style.setProperty(
      "--header-height",
      `${headerHeight}px`
    );
  }

  updateHeightMenuBodyBefore();

  //* Функція для визначення динамічної висоти половини слайдеру
  function updateHeightSwiperVideoSlider() {
    const swiperVideo = document.querySelector(".swiper-video__slider");
    if (!swiperVideo) return;
    const swiperVideoHeight = swiperVideo.offsetHeight;
    const swiperVideoHeightHalf = swiperVideoHeight * 0.5;
    console.log(swiperVideoHeightHalf);

    document.documentElement.style.setProperty(
      "--swiper-height",
      `${-swiperVideoHeightHalf}px`
    );
  }

  updateHeightSwiperVideoSlider();

  //* Функція для зміни data-атрибуту data-scroll в Header
  function updateDataAttributeBasedOnHeight() {
    const header = document.querySelector(".header");
    if (!header) return;
    const headerHeight = header.offsetHeight;
    header.setAttribute("data-scroll", headerHeight);
  }
  updateDataAttributeBasedOnHeight();

  //document.addEventListener("click", documentActions);
  // document.addEventListener("keydown", keypressActions);
}
