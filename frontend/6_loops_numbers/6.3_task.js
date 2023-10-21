// Задача 6.3
// Выведите первые члены последовательности Фибоначчи, которые не превышают числа x вместе с порядковым номером члена последовательности, 
// а также напишите чётное число или нечётное:

/*
x = 10
1. 1 - нечётное
2. 1 - нечётное
3. 2 - чётное
4. 3 - нечётное
5. 5 - нечётное
6. 8 - чётное
*/

let x = 10
let fibonacci = 0;
let prev1 = 1;
let prev2 = 1;

let item = 1;
console.log(`${item}. ${prev1} - нечётное`);

while (prev2 < x) {
    
    item++;

    if (prev2 % 2 === 0) {
        console.log(`${item}. ${prev2} - чётное`);
    } else if (prev2 % 2 !== 0) {
        console.log(`${item}. ${prev2} - нечётное`);
    }

    fibonacci = prev1 + prev2;
    prev1 = prev2;
    prev2 = fibonacci;
}
/*
1. 1 - нечётное
2. 1 - нечётное
3. 2 - чётное
4. 3 - нечётное
5. 5 - нечётное
6. 8 - чётное
*/

// 2 exmp 

let x = 10

let fibonacci = 0;
let prev1 = 1;
let prev2 = 1;

let item = 0;

while (fibonacci < x) {
    
    item+=1;
    
    if (item <= 2) {
        console.log(`${item}. ${prev1} - нечётное`)
    } else {
        fibonacci = prev1 + prev2;
        prev1 = prev2;
        prev2 = fibonacci;
        
        if (fibonacci < x) {
            if (fibonacci % 2 === 0) {
                console.log(`${item}. ${fibonacci} - чётное`);
            } else if (fibonacci % 2 !== 0) {
                console.log(`${item}. ${fibonacci} - нечётное`);
            }
        }
    }
}

/*
1. 1 - нечётное
1. 1 - нечётное
1. 2 - чётное
2. 3 - нечётное
3. 5 - нечётное
4. 8 - чётное
5. 13 - нечётное
*/
