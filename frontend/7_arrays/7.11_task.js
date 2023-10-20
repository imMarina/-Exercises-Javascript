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
