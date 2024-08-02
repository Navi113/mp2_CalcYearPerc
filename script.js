let textArea = document.querySelector('.container__text-area')
const form = document.querySelector('.container__form');
const inputAmnt = document.querySelector('.container__form-input_type_amnt');
const inputPerc = document.querySelector('.container__form-input_type_perc');
const btn = document.querySelector('.btn');

// Функция показывает ошибку
function showBadRes() {
  textArea.innerHTML = '<p class="container__paragraph">Ошибочка вышла! Что-то введено неправильно, попробуйте еще разик</p><span class="container__span">🫠</span>';
  btn.style.backgroundColor = '#eb520b';
}

// Функция показывает верный результат
function showGoodRes(day, month, year) {
  textArea.innerHTML = `<p class="container__paragraph">С вкладом в ${inputAmnt.value} руб. и ${inputPerc.value}% вы получите:</p><p class="container__paragraph">в день: ${day} руб.</p><p>в месяц: ${month} руб.</p><p class="container__paragraph">в год: ${year} руб.</p><span class="container__span">😊</span>`;
  btn.style.backgroundColor = '#efa2ef';
}

// Функция расчета процентов
function calcPers(Amnt, Perc) {
  let day = Amnt * Perc / 365 / 100;
  let month = Amnt * Perc / 31 / 100;
  let year = Amnt * Perc / 1 / 100;

  return {
    day: day.toFixed(2),
    month: month.toFixed(2),
    year: year.toFixed(2)
  };
}

// Функция очистки полей ввода
function clearImputs() {
  inputAmnt.value = '';
  inputPerc.value = '';
}

// Функция проверки формы
function getRes(evt) {
  evt.preventDefault();

  let valueAmnt = inputAmnt.value;
  let valuePerc = inputPerc.value;

  if (valueAmnt && valuePerc > 0) {
    showGoodRes(
      calcPers(valueAmnt, valuePerc).day,
      calcPers(valueAmnt, valuePerc).month,
      calcPers(valueAmnt, valuePerc).year
    );
    clearImputs()
  } else {
    showBadRes();
    clearImputs()
  }
}

// Слушатель на форму
form.addEventListener('submit', getRes)

console.log(inputAmnt.textContent);