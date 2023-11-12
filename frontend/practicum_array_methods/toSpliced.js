// method toSpliced (добавлен в ES2023)
// Метод toSpliced() является копией метода splice(), но возвращает новый массив.

// .toSpliced() — это метод, который изменяет несколько элементов массива. 
// Он имеет начальную точку (первый элемент, который нужно изменить) и конечную точку (последний элемент, который нужно изменить). может вносить следующие изменения в массив:.toSpliced()

// Извлечение элементов(ов)
// Заменить элемент(ы)
// Вставить элемент(ы)
// Примечание: возвращает копию массива с заданными изменениями. Он не изменяет родительский массив..toSpliced()

// syntax 
myArray.toSpliced(startIndex, count, elementN)

// .toSpliced принимает следующие параметры:
// startIndex: Местоположение первого элемента, подлежащего изменению. По умолчанию 0.
// count: Количество элементов, которые должны быть изменены, начиная с . По умолчанию 0.startIndex
// elementN (необязательно): Обновленные значения для элементов массива. Чтобы вставить несколько значений, разделите каждое значение запятой.


// example 1 - Извлечение элементов массива
const colors = ['red', 'yellow', 'blue', 'orange', 'green', 'purple'];
// Indices:       0        1       2        3         4        5

// Extracting red, yellow, and blue. Start at index 3 and delete 3 elements
const primaryColors = colors.toSpliced(3, 3);

console.log(primaryColors); // Output: 'red', 'yellow', 'blue'
console.log(colors); // Output: 'red', 'yellow', 'blue', 'orange', 'green', 'purple'


// example 2 - Замена элементов массива
const colors = ['red', 'yellow', 'blue', 'orange', 'green', 'purple'];

// Replacing red, yellow, and blue. Start at index 0, and replace three items.
const tertiaryColors = colors.toSpliced(
    0,
    3,
    'blue-green',
    'red-violet',
    'yellow-orange'
);

console.log(tertiaryColors); // Output: 'blue-green', 'red-violet', 'yellow-orange', 'orange', 'green', 'purple'
console.log(colors); // Output: 'red', 'yellow', 'blue', 'orange', 'green', 'purple'


// example 3 - Вставка новых элементов в массив
const colors = ['red', 'yellow', 'blue', 'orange', 'green', 'purple'];

// Inserting new colors. Insert into index 3 and delete 0 elements.
const allTheColors = colors.toSpliced(
    3,
    0,
    'blue-green',
    'red-violet',
    'yellow-orange'
);

console.log(allTheColors); // Output: 'red', 'yellow', 'blue', 'blue-green', 'red-violet', 'yellow-orange', 'orange', 'green', 'purple'
console.log(colors); // Output: 'red', 'yellow', 'blue', 'orange', 'green', 'purple'


const a = [2, 3, 6, 1];
const d = a.toSpliced(0, 1);
console.log(a) // вывод: [2, 3, 6, 1]
console.log(d) // вывод: [3, 6, 1]