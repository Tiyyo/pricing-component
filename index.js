const rangeInput = document.getElementsByClassName("slidebar__input");
const slideBar = document.getElementsByClassName("slidebar");
const pageview = document.getElementById("numberPages");
const price = document.getElementsByClassName("subscription__price--dollars");
const displayDiscount = document.getElementById("switch");
const priceFreq = document.getElementsByClassName("monthly");
const tSwitch = document.querySelector(".round");
let rangeValue;
let pageviews = ["10k", "50K", "100K", "500K", "1M"];
let perMonth = ["$8.00", "$12.00", "$16.00", "$24.00", "$36.00"];
let perYear = ["$6,00", "$8,00", "$12,00", "$18,00", "$27,00"];
let i;
var toggleEnable;

// return true is toggle is enable
function isAnnualFrequency() {
  return displayDiscount.checked;
}

// function which display prices per month and number of pages chosen
function displayPriceandPages(i) {
  const isAnnual = isAnnualFrequency();
  console.log(isAnnual);
  if (rangeValue === i && isAnnual === false) {
    price[0].textContent = perMonth[i] + " ";
    pageview.textContent = pageviews[i] + " ";
  } else {
    price[0].textContent = perYear[i] + " ";
    pageview.textContent = pageviews[i] + " ";
  }
}

// display number/pageview and prices/month
rangeInput.range.addEventListener("input", (e) => {
  rangeValue = e.target.value;
  rangeBackground = e.target.value * 25;

  // make the runable track fit thumb progress

  rangeInput[0].style.background = `linear-gradient(90deg, 
    hsl(174, 77%, 80%) 0%,
    hsl(174, 77%, 80%) ${rangeBackground}%, 
    hsl(224, 65%, 95%) 0%,
    hsl(224, 65%, 95%) 100%)`;

  displayPriceandPages(rangeValue);
});

// display price/year

function displayToggleBackground() {
  displayDiscount.addEventListener("input", (e) => {
    var toggleEnable = e.composedPath()[0].checked;
    console.log(price[0].textContent);
    if (price[0].textContent === undefined) {
      price[0].textContent = "$0.00";
    }
    if (toggleEnable === true) {
      tSwitch.classList.add("active");
      displayPriceandPages(rangeValue);
    } else {
      tSwitch.classList.remove("active");
      displayPriceandPages(rangeValue);
    }
  });
}
displayToggleBackground();
