let input = document.querySelector(".field__input");
let btn = document.querySelector(".field__btn");
let check = document.querySelector(".result_check_out");
let help = document.querySelector(".result_help_out"); 
let count = document.querySelector(".result_count_out"); 

let item = 0;
let randNum = 1 + Math.floor(Math.random() * 100);

btn.onclick = function (evt) {
  evt.preventDefault(); 
  let userNum = input.value;

  if (userNum > randNum) {
    check.textContent = "Пока что не угадали . . . ";
    help.textContent = "Многовато будет";
    item++;
    count.textContent = item;
  } else if (userNum < randNum) {
    check.textContent = "Пока что не угадали . . . ";
    help.textContent = "Маловато будет";
    item++;
    count.textContent = item;
  } else {
    check.textContent = "Поздравляем: Вы угадали.";
    help.textContent = "В самый раз";
    item++;
    count.textContent = item;
  }
};
