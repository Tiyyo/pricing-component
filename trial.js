


const rangeInput = document.getElementsByClassName("slidebar__input").range; //rangeInput
const slideBar = document.getElementsByClassName("slidebar");
const pageview = document.getElementById("numberPages"); // viewcontainer
const price = document.getElementsByClassName("subscription__price--dollars"); //costcontainer
const priceFreq = document.getElementsByClassName("monthly");
const displayDiscount = document.getElementById("switch");

const DATA = [
  {
    pageviews: "10K",
    monthlycost: 8,
  },
  {
    pageviews: "50K",
    monthlycost: 12,
  },
  {
    pageviews: "100K",
    monthlycost: 16,
  },
  {
    pageviews: "500K",
    monthlycost: 24,
  },
  {
    pageviews: "1M",
    monthlycost: 36,
  },
];

function getData() {
  const currentValue = rangeInput.value;
  const index = currentValue;
  return ({ pageviews, monthlycost } = DATA[index]);
}

function displayPage() {
  const { pageviews } = getData();
  pageview.textContent = `${pageviews} `;
}

function isAnnualFrequency() {
  return frequencyToggle.checked;
}

function displayPrice() {
  const { monthlycost } = getData();
  const isAnnual = isAnnualFrequency();
  const cost = isAnnual ? monthlycost * 0.75 : monthlycost;
  price[0].textContent = `$${cost.toFixed(2)}`;
  if (isAnnual) {priceFreq.textContent ='/month'} else {
    priceFreq.textContent ='/year'
  }
}

function displayPriceAndPage() {
  displayPage();
  displayPrice();
}

rangeInput.addEventListener("input", 
rangeInput[0].style.background = `linear-gradient(90deg, 
    hsl(174, 77%, 80%) 0%,
    hsl(174, 77%, 80%) ${rangeBackground}%, 
    hsl(224, 65%, 95%) 0%,
    hsl(224, 65%, 95%) 100%)`;
    displayPriceAndPage()
    );
