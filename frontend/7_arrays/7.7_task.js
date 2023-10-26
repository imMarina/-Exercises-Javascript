// Задание 7.7
// Дан массив `a`. Сформируйте новый массив `b`, который будет зеркальным отражением массива `a` и выведете его. Не пользуйтесь методом `reverse`.


let arr = [1, 2, 3, 4, 5];
let reverseArr = [];

for (let i = arr.length - 1; i >= 0; i--) {
    reverseArr.push(arr[i]);
}
console.log(reverseArr);