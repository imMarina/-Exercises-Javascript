// Задание 2.4
// Объявите три переменные a, b и c (например, a=3, b=2, c=4) не равные друг другу. Пользуясь операторами if выведете среднее из них (больше одного но меньше другого).

let aaa = 3;
let bbb = 2;
let ccc = 4;

if (aaa > bbb || aaa > ccc) {
    console.log(`Average is ${aaa}`);
} else if (aaa < bbb || ccc < bbb) {
    console.log(`Average is ${bbb}`);
} else {
    console.log(`Average is ${ccc}`);
}