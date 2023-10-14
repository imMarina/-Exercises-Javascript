// Задание 8.1
// Написать функцию, получающую на вход одно число. Если число чётное - функция возвращает `true` , если нет - `false`.

function isEven(num) {
    return !(num % 2);
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

console.log(operationsWithEvenOdd(2, 4)); // 8
console.log(operationsWithEvenOdd(11, 31)); // 42
console.log(operationsWithEvenOdd(-8, -15)); // -15


// Задача 8.4
// Написать функцию, которая будет получать неотрицательное число, например 3, и возвращать строку `"1 sheep...2 sheep...3 sheep..."`. Проверять полученное число не нужно, оно всегда неотрицательное целое.

function iWantToSleep(counter) {
    let text = 'sheep...'
    let result = '';
    
    for (let i=1; i <= counter; i++) {
        result += `${i} ${text}`
    }
    return result;
}

  console.log(iWantToSleep(3)); // 1 sheep...2 sheep...3 sheep...
  console.log(iWantToSleep(5)); // 1 sheep...2 sheep...3 sheep...4 sheep...5 sheep...


  // Задача 8.5
  // Написать функцию, принимающую массив чисел. Она должна развращать элемент с максимальным значением.

// first exm
function max(array) {
    // с помощью оператора spread
    return Math.max(...array);
}

// second exm
function max(array) {
    let max = array[0];
    let min = array[0];
    
    for (let i = 0; i < array.length; i++) {
        if (max < array[i]) {
            max = array[i];
        }
        if (max > array[i]) {
            min = array[i];
        }
    }
    return max;
}

console.log(max([1, 42, 34, 12])); // 42
console.log(max([-5, -10, -100])); // -5


// Задача 8.6
// Написать функцию, принимающую массив чисел. Она должна возвращать элемент с минимальным значением.

function min(array) {
    let max = array[0];
    let min = array[0];
    
    for (let i = 0; i < array.length; i++) {
        if (min < array[i]) {
            max = array[i];
        }
        if (min > array[i]) {
            min = array[i];
        }
    }
    return min;
}

console.log(min([1, 42, 34, 12])); // 1
console.log(min([-5, -10, -100])); // -100


// Задача 8.7
// Написать функцию, принимающую массив чисел. Она должна возвращать сумму всех элементов.

function sum(array) {
    let sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }
    return sum;
}

// method reduce
function sum(array) {
    let sum = array.reduce((index, item) => index += item)
    return sum;
}

console.log(sum([1, 2, 3, 4])); // 10
console.log(sum([-5, -10, 15])); // 0


// Задача 8.8
// Написать функцию, принимающую массив чисел. Она должна возвращать новый массив с квадратами элементов переданного массива.

const arr = [1, 2, 3, 4];

const arrWithSquare = arr.map((item) => item ** 2); // first option - method map


function map(array) {
    let result = [];
    for (let item of array) {
        result.push(item ** 2);
    }
    return result;
    
    
}
console.log(arrWithSquare); // [1, 4, 9, 16]


// Задача 8.9
// Написать функцию, принимающую массив отрицательных и положительных чисел. Она должна возвращать новый массив только с отрицательными числами.



