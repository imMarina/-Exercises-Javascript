// Задание 7.1
// Дан массив `a`. Выведете первый, третий элемент и длину массива.

let a = [5, 2, -1, 9];
console.log(a[0], a[2], a.length);

// Задание 7.2
// Дан массив `a`. Выведете минимальный и максимальный элементы массива.

console.log(Math.min(...a));
console.log(Math.max(...a));

let min = a[0];
let max = min;
  for (i = 1; i < a.length; i++) {
      if (a[i] > max) max = a[i];
      if (a[i] < min) min = a[i];
  }
console.log(min); // min = -1
console.log(max); // max = 9

// Задание 7.3
// Дан массив `a`. Выведете сумму элементов массива.

let b = [1, 3, 2];
let sum = 0;

for (let i = 0; i < b.length; i++) {
  sum += b[i];
  console.log(sum); // sum = 6
}

// Задание 7.4
// Дан массив `a`. Выведете сумму только нечётных неотрицательных элементов массива. Нечётными элементами будем считать первый, третий, пятый и так далее по счёту. Однако их индексы: 0, 2, 4 и так далее.
// Здесь нечётные элементы (первый, третий и пятый): -2, 5, 2
// Неотрицательные из них: 5, 2


let c = [-2, 10, 5, 1, 2, 6];
let sum2 = 0;
for (let i = 0; i < c.length; i = i + 2) {
    if (c[i] > 0){
        sum2 += c[i];
    }
}
console.log(sum2); // sum = 6


// Задание 7.5
// Дан массив `a`. Найдите количество положительных элементов массива.

let d = [-2, 10, -5, -1, 2, 6];
let positive = [];

for (let i = 0; i < d.length; i++) {
    if (d[i] >= 0) {
        positive.push(d[i]);
    } else {
      continue;
    }
}
  console.log(positive.length); // sum = 6

// Задание 7.6
// Дан массив `a`. Сформируйте новый массив `b`, который будет состоять только из положительных чисел массива `a` и выведете его на экран. Не пользуйтесь методом `filter`.

let e = [-2, 10, -5, -1, 2, 6];
let f = [];

for (let i = 0; i < e.length; i++) {
    if (e[i] >= 0) {
        f.push(e[i]);
    } else {
      continue;
    }
}
  console.log(f); // [object Array] (3) [10,2,6]


// Задание 7.7
// Дан массив `a`. Сформируйте новый массив `b`, который будет зеркальным отражением массива `a` и выведете его. Не пользуйтесь методом `reverse`.

let g = [1, 2, 3, 4, 5];

console.log(g.sort((a, b) => b - a)); // [5,4,3,2,1]
/*
Функция сортировки
function compareNumeric(a, b) {
    console.log(`Сравниваем ${a} и ${b}`);
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;

    //return a - b
} */

// Задание 7.8
// Дан массив `a`. Поменяйте местами его минимальный и максимальный элементы и выведете на экран.

let h = [7, 2, 3, 0];

console.log(h.sort((a, b) => a - b)); // [0,2,3,7]

/* extra info 
let a = [7, 2, 3, 0];
console.log(a.includes(2)); // выведет true
console.log(a.includes(-1)); // выведет false
console.log(a.indexOf(3)); // выведет 2 - индекс элемента со значением 3
console.log(a.indexOf(10)); // выведет -1 так как такого элемента нет в массиве

if (a.includes(2)) {
  // выполнится только если в массиве a есть 2
}

if (!a.includes(-1)) {
  // выполнится только если в массиве a нет -1
}
*/

// Задание 7.9
// Дан массив `a`. Сформируйте новый массив `b`, в котором будут все элементы из массива `a`, но не будет повторений.
// Подсказка: с помощью метода `includes` можно проверить положили ли вы уже такой элемент в новый массив.

let j = [1, 4, 10, 10, 4, 2, 10, 0];
let k = [];

j.forEach((item) => {
    if (!k.includes(item)) {
        k.push(item);
    }
});
console.log(k); // [1,4,10,2,0]

// Задание 7.10
// Дан массив `a`. Определите длину самой длинной возрастающей последовательности в массиве.

/*
let a = [1, 5, 6, 0, 1, 2, 1, 1, 7, 10, 11, 0];
const b = a.sort((a, b) => a - b)
console.log(b);
*/

for (int i = 2; i < index + 1; i++) {
    numbers[index] = numbers[i - 1] + numbers[i - 2];
}


// Задание 7.11
// Дано число `n`. Сформировать массив из `n` первых простых чисел и вывести его на экран.
// Число является простым если делится только на 1 и на само себя.
// Пример 1, 2, 3, 5, 7, 11


let array = [];
array.length = 6;

for (let i = 1; i <= array.length; i++) {
  if (i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0) {
    array.push(i);
  } else {
    continue;
  }
  console.log(array);
}


// by Sasha
const n = 6;
const arrPrimes = [];
  
for (let i = 1; arrPrimes.length < n; i++) {    
    let prime = true;

    for (let j = 1; j < arrPrimes.length; j++) {
    	if (i % arrPrimes[j] === 0) {
        prime = false;
        break;
      }
    }
    
    if(prime) {
    	arrPrimes.push(i);
    }
  }
  
  console.log(arrPrimes);
