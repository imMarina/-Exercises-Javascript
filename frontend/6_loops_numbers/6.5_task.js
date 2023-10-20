// Задача 6.5
// Поделите число x на разряды и выведете каждый разряд в отдельно строке таким образом (с последнего до первого):

/*
x = 10819

1 цифра равна 9
2 цифра равна 1
3 цифра равна 8
4 цифра равна 0
5 цифра равна 1
*/

let numberX = 10819;
let divider = 10;

let digit = 0;

while (numberX >= 1) {
    let lastNum = numberX.toString().slice(-1);
    digit++;
    
    out = `${digit} цифра равна ${lastNum}`;
    
    numberX = Math.floor(numberX / divider);
    console.log(out);
}

console.log(`Digit = ${digit}`);

/*
1 цифра равна 9
2 цифра равна 1
3 цифра равна 8
4 цифра равна 0
5 цифра равна 1
Digit = 5
*/

/*
x = 1;
1 цифра равна 1
Digit = 1
*/