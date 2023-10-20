// Задача 6.4
// Выведете количество разрядов числа x используя цикл. Выведете фразу "В числе 238 - 3 разряда". 
// Притом слово "разряда" должно быть грамматически правильным (разряда, разрядов, разряд в зависимости от числа).


let numberX = 5673;
let divider = 10;

let numConsole = numberX;

let digit = 0;
let out = '';

while (numberX >= 1) {
    
    numberX = Math.floor(numberX / divider);
    digit++;
    
    if (digit === 1) {
    out = `В числе ${numConsole} - ${digit} разряд.`;
    } 
    if (digit > 1 && digit < 5) {
    out = `В числе ${numConsole} - ${digit} разряда.`;
    } 
    if (digit >= 5) {
    out = `В числе ${numConsole} - ${digit} разрядов.`;
    } 
}

console.log(out);

// В числе 5673 - 4 разряда.
// В числе 238 - 3 разряд
// В числе 23800 - 5 разрядов
// В числе 1 - 1 разряд
// В числе 91 - 2 разряда.


