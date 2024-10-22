// Підключення з node_modules
import * as noUiSlider from "nouislider";

// Підключення стилів з scss/base/forms/range.scss
// у файлі scss/forms/forms.scss

// Підключення стилів з node_modules
// import 'nouislider/dist/nouislider.css';

// export function rangeInit() {
//   const priceSlider = document.querySelector(".filter-price__range");
//   if (priceSlider) {
//     let textFrom = priceSlider.getAttribute("data-from");
//     let textTo = priceSlider.getAttribute("data-to");
//     noUiSlider.create(priceSlider, {
//       start: [1600, 4000],
//       connect: true,
//       range: {
//         min: [0],
//         max: [10000],
//       },
//       /*
// 			format: wNumb({
// 				decimals: 0
// 			})
// 			*/
//     });

//     const priceStart = document.getElementById("price-start");
//     const priceEnd = document.getElementById("price-end");
//     priceStart.addEventListener("change", setPriceValues);
//     priceEnd.addEventListener("change", setPriceValues);

//     function setPriceValues() {
//       let priceStartValue;
//       let priceEndValue;
//       if (priceStart.value != "") {
//         priceStartValue = priceStart.value;
//       }
//       if (priceEnd.value != "") {
//         priceEndValue = priceEnd.value;
//       }
//       priceSlider.noUiSlider.set([priceStartValue, priceEndValue]);
//     }
//   }
// }
// rangeInit();

//* NoUiSlider підключений з Krovato
const priceRange = document.querySelector(".filter-price__range");

if (priceRange) {
  const priceRangeInputs = document.querySelectorAll(".filter-price__input");
  const formatForSlider = {
    from: function (formattedValue) {
      return Number(formattedValue);
    },
    to: function (numericValue) {
      return Math.round(numericValue);
    },
  };

  noUiSlider.create(priceRange, {
    start: [1600, 4000],
    format: formatForSlider,
    connect: true,
    range: {
      min: 0,
      max: 10000,
    },
  });

  priceRange.noUiSlider.on("update", function (values, handle) {
    priceRangeInputs[handle].value = values[handle];
  });

  priceRangeInputs.forEach(function (priceRangeInput, handle) {
    priceRangeInput.addEventListener("change", function () {
      priceRange.noUiSlider.setHandle(handle, this.value);
    });
  });
}
