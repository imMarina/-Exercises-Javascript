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