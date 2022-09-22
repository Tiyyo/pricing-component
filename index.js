const rangeInput = document.getElementsByClassName("slidebar__input");
const slideBar = document.getElementsByClassName("slidebar");
const pageview = document.getElementById("numberPages");
const price = document.getElementsByClassName("subscription__price--dollars");
const displayDiscount = document.getElementById("switch");
let rangeValue;
let priceMonth;
let priceYear;
const body = document.querySelector("body");
const tSwitch = document.querySelector(".round");
let pageviews = ["10k", "50K", "100K", "500K", "1M"];
let perMonth = ["$8.00", "$12.00", "$16.00", "$24.00", "$36.00"];
let perYear = ["$6,00", "$8,00", "$12,00", "$18,00", "$27,00"];
let i;
let toggleEnable;

// function which display prices per month and number of pages chosen
function displayPriceandPages(i) {
  if (rangeValue === i) {
    price[0].textContent = perMonth[i] + " ";
    pageview.textContent = pageviews[i] + " ";
  }
}

// function which dispay prices after discount
function displayYearlyPrice(i) {
  if (rangeValue === i) {
    price[0].textContent = perYear[i] + " ";
  }
}

// display number/pagesview and prices/month
rangeInput.range.addEventListener("input", (e) => {
  rangeValue = e.target.value;
  rangeBackground = e.target.value * 25;

  // make the runable track fit thumb progress

  rangeInput[0].style.background = `linear-gradient(90deg, 
    hsl(174, 77%, 80%) 0%,
    hsl(174, 77%, 80%) ${rangeBackground}%, 
    hsl(224, 65%, 95%) 0%,
    hsl(224, 65%, 95%) 100%)`;
  if (toggleEnable === false) {
    displayPriceandPages(rangeValue);
  } else displayYearlyPrice(rangeValue);
});

// display price/year

displayDiscount.addEventListener("change", (e) => {
  let toggleEnable = e.composedPath()[0].checked;
  if (toggleEnable === true) {
    console.log(rangeValue);
    displayYearlyPrice(rangeValue);
    tSwitch.classList.add("active");
  } else {
    tSwitch.classList.remove("active");
  }
});
