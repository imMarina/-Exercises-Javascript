// Задание 2.3
// Объявите три переменные a, b и c не равные друг другу (например, a=3, b=2, c=4). Пользуясь операторами if выведете максимальное из них.

let aa = 3;
let bb = 2;
let cc = 4;

if (aa > bb && aa > cc) {
    console.log(`Max num is ${aa}`);
} else if (aa < bb && cc < bb) {
    console.log(`Max num is ${bb}`);
} else {
    console.log(`Max num is ${cc}`);
}
