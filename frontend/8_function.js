// Задание 8.1
// Написать функцию, получающую на вход одно число. Если число чётное - функция возвращает `true` , если нет - `false`.

function isEven(num) {
    if (num % 2 == 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isEven(42)); // true
console.log(isEven(15)); // false
console.log(isEven(-111)); // false

// Задание 8.2
// Написать функцию, получающую на вход одно число. Она должна развращать противоположное число.

function oppositeNumber(num) {
    if (num > 0) {
        return -num
    } else {
        return + -num
    }
}
console.log(oppositeNumber(1)); // -1
console.log(oppositeNumber(-42)); // 42
console.log(oppositeNumber(56)); // -56


// Задание 8.3
// Написать функцию, получающую на вход два числа. Если оба числа чётные - функция возвращает их произведение. Если оба числа нечётные - функция возвращает их сумму. Если одно из чисел чётное, а второе нечётное - функция возвращает это нечётное число.


console.log(operationsWithEvenOdd(2, 4)); // 8
console.log(operationsWithEvenOdd(11, 31)); // 42
console.log(operationsWithEvebOdd(-8, -15)); // -15

function operationsWithEvenOdd(a, b) {
    if (a % 2 == 0 && b % 2 == 0) {
        return a * b;
    } 
    if (a % 2 !== 0 && b % 2 !== 0) {
        return a + b;
    } 
    if (a % 2 !== 0 && b % 2 == 0) {
        return a;
    }
    if (a % 2 == 0 && b % 2 !== 0) {
        return b;
    }
}

/* 
} */