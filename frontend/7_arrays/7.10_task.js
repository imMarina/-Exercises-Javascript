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