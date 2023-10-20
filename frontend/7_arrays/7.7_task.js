// Задание 7.7
// Дан массив `a`. Сформируйте новый массив `b`, который будет зеркальным отражением массива `a` и выведете его. Не пользуйтесь методом `reverse`.

let g = [1, 2, 3, 4, 5];

console.log(g.sort((a, b) => b - a)); // [5,4,3,2,1]
/*
Функция сортировки
function compareNumeric(a, b) {
    console.log(`Сравниваем ${a} и ${b}`);
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;

    //return a - b
} */