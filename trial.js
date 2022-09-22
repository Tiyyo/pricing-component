const rangeInput = document.getElementsByClassName("slidebar__input");
const pageview = document.getElementById("numberPages");
const price = document.getElementsByClassName("subscription__price--dollars");
const displayDiscount = document.getElementById("switch");
let rangeValue;
let priceMonth;
let priceYear;
const body = document.querySelector("body");
const tSwitch = document.querySelector(".round");

console.log(displayDiscount.checked);

// console.log(price[0]);

// display number/pagesview and prices/month
rangeInput.range.addEventListener("input", (e) => {
  rangeValue = e.target.value / 100;
  rangeBackground = e.target.value;

  rangeInput[0].style.background = `linear-gradient(90deg, 
    hsl(174, 77%, 80%) 0%,
    hsl(174, 77%, 80%) ${rangeBackground}%, 
    hsl(224, 65%, 95%) 0%,
    hsl(224, 65%, 95%) 100%)`;

  if (rangeValue <= 0.25) {
    pageview.textContent = "10K ";
    price[0].textContent = "$8.00 ";
  }
  if (displayDiscount === true) {
    price[0].textContent = "$6.00";
  }
  if (rangeValue <= 0.5 && rangeValue > 0.25) {
    pageview.textContent = "50K ";
    price[0].textContent = "$16.00 ";
  }
  if (rangeValue <= 0.75 && rangeValue > 0.5) {
    pageview.textContent = "500K ";
    price[0].textContent = "$24.00 ";
  }
  if (rangeValue <= 1 && rangeValue > 0.75) {
    pageview.textContent = "1M ";
    price[0].textContent = "$36.00 ";
  }
});

// display price/year
displayDiscount.addEventListener("input", (e) => {
  let toggleEnable = e.composedPath()[0].checked;

  if (toggleEnable === true) {
    let priceMonth = price[0].textContent.split("$")[1];
    let priceYear = parseInt(priceMonth) - (25 * parseInt(priceMonth)) / 100;

    price[0].textContent = "$" + priceYear + ".00";
    tSwitch.classList.add("active");
  } else {
    let priceMonth = price[0].textContent.split("$")[1];
    price[0].textContent = "$" + priceMonth;
    tSwitch.classList.remove("active");
  }
});
