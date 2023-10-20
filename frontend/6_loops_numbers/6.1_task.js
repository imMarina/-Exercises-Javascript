// Задание 1
// Выведите n первых членов последовательности Фибоначчи, где каждый следующий член равен сумме двух предыдущих:

let n = 7;
let previous = 1;
console.log(previous);

let step = 1;
for (let i = 0; i < n - 1; i++) {
    console.log(step);
    step += previous;
    previous = step - previous;
}


// 2 exmp
let n = 7;
let prev1 = 1;
let prev2 = 1;
  

for (let i = 0; i < n; i++) {
  	if (i < 2) {
    console.log(prev1);
    } else {
      let fibonacci = prev1 + prev2;
      prev1 = prev2;
      prev2 = fibonacci;
      console.log(fibonacci);
      }
}


// 3 exmp with WHILE
let x = 7;
let prev1 = 1;
let prev2 = 1;
  
let i = 0;
while (i < x) {
  if (i < 2) {
    console.log(prev1);
    }  else {
      let fibonacci = prev1 + prev2;
      prev1 = prev2;
      prev2 = fibonacci;
      console.log(fibonacci);
      }
  i++;
}

/* 
1
1
2
3
5
8
13
*/