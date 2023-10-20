// Задание 8.1
// Написать функцию, получающую на вход одно число. Если число чётное - функция возвращает `true` , если нет - `false`.

function isEven(num) {
    return !(num % 2);
}
console.log(isEven(42)); // true
console.log(isEven(15)); // false
console.log(isEven(-111)); // false