let textArea = document.querySelector('.container__text-area')
let paragraph = document.querySelector('.container__paragraph');

const btn = document.querySelector('.btn');
const inputAmnt = document.querySelector('.container__form-input_type_amnt');
const inputPerc = document.querySelector('.container__form-input_type_perc');

console.log(inputPerc);

function showBadRes() {
  paragraph.textContent = 'Oh shit, try again 🤨';
  btn.style.backgroundColor = '#eb520b'; 
}

function showGoodRes() {
  paragraph.textContent = `Oh shit, try again 🤨 ${calcPers(100000, 18)}`;
  btn.style.backgroundColor = '#efa2ef'; 
}

function calcPers(Amnt, Perc) {
  let value = Amnt * Perc / 365 / 100;
  return value;
}

// showGoodRes();
console.log(calcPers(100000, 18));
