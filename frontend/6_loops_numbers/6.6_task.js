// Задача 6.6*
// Выведете большую и меньшую цифры числа x


// Большая цифра 8
// Меньшая цифра 1


let numberX = 13817
let divider = 10;

let digit = 0;

while (numberX >= 1) {
    
    console.log(numberX);
    let lastNum = numberX.toString().slice(-1);
    console.log(lastNum);
    
    numberX = Math.floor(numberX / divider);

    
    digit++;
}