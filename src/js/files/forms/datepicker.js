/* Календар */

// Підключення функціоналу "Чертоги Фрілансера"
// Підключення списку активних модулів
import { flsModules } from "../modules.js";

// Підключення модуля
import datepicker from "js-datepicker";

// if (document.querySelector("[data-datepicker]")) {
//   const picker = datepicker("[data-datepicker]", {
//     customDays: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Нд"],
//     customMonths: [
//       "Січ",
//       "Лют",
//       "Берез",
//       "Квіт",
//       "Трав",
//       "Черв",
//       "Лип",
//       "Серп",
//       "Верес",
//       "Жовт",
//       "Листоп",
//       "Груд",
//     ],
//     overlayButton: "Застосувати",
//     overlayPlaceholder: "Рік (4 цифри)",
//     startDay: 1,
//     formatter: (input, date, instance) => {
//       const value = date.toLocaleDateString();
//       input.value = value;
//     },
//     onSelect: function (input, instance, date) {},
//   });
//   flsModules.datepicker = picker;
// }

//* Якщо в проєкті декілька календарів
document.querySelectorAll("[data-datepicker]").forEach((datepickerElement) => {
  const picker = datepicker(datepickerElement, {
    customDays: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Нд"],
    customMonths: [
      "Січ",
      "Лют",
      "Берез",
      "Квіт",
      "Трав",
      "Черв",
      "Лип",
      "Серп",
      "Верес",
      "Жовт",
      "Листоп",
      "Груд",
    ],
    overlayButton: "Застосувати",
    overlayPlaceholder: "Рік (4 цифри)",
    startDay: 1,
    formatter: (input, date, instance) => {
      const value = date.toLocaleDateString();
      input.value = value;
    },
    onSelect: function (input, instance, date) {
      // Твої дії при виборі дати
    },
  });

  // Якщо потрібен масив із кожним datepicker для подальшої роботи
  if (!flsModules.datepickers) {
    flsModules.datepickers = [];
  }
  flsModules.datepickers.push(picker);
});
