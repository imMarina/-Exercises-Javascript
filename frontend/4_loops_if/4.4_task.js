// Задание 4.4
// Дано чётное n. С помощью одного цикла выведете половину нулей и половину единиц. Подсказка: думайте на каком шаге цикла вы находитесь в данный момент, номер шага - это i. Подумайте, как понять прошли мы уже половину шагов и пора выводить единицу или ещё не прошли и нужно выводить 0.

let num3 = 10;
let value = num3 / 2;
let data = '';

for (let i = 0; i < num3; i++) {
  if (i < value) {
    data += '0';
  } else {
    data += '1';
  }
  console.log(data);
}