// method INDEXOF
// Этот метод служит для поиска. Он определён для массивов и строк.
// Метод indexOf() возвращает первый индекс, по которому данный элемент может быть найден в массиве, 
// или -1, если его нет.


// Syntax by mozilla docs
indexOf(searchElement)
indexOf(searchElement, fromIndex)


// Параметры
// searchElement - Элемент, который будет найден в массиве.
// fromIndex (Необязательный) 
// Отсчитываемый от нуля индекс, с которого начинается поиск, преобразованный в целое число.

//      Отрицательный индекс отсчитывается от конца массива — если используется , используется . Обратите внимание, что в этом случае массив по-прежнему ищется спереди назад.fromIndex < 0fromIndex + array.length
//      Если или опущено, то используется поиск по всему массиву.fromIndex < -array.lengthfromIndex0
//      Если , то поиск массива не выполняется и возвращается.fromIndex >= array.length-1

// Return value
// Первый индекс в массиве; если не найдено -1

// Примечания:
// Метод сравнивает элементы массива с помощью строгого равенства (тот же алгоритм, что и оператор). Значения NaN никогда не сравниваются как равные, поэтому всегда возвращает, когда равно .indexOf()searchElement===indexOf()-1searchElementNaN

// Вы не можете использовать для поиска .indexOf()NaN
const array = [NaN];
array.indexOf(NaN); // -1

// Метод пропускает пустые слоты в разреженных массивах.indexOf()


// example 1
// Для массивов: ищет переданный элемент в массиве. Если элемент один, то возвращает индекс этого элемента. Если элементов много — возвращает индекс первого подходящего элемента. Элемента в массиве нет — вернёт -1

const haystack = ['Петя', 'Настя', 'Артур', 'Лена', 'Настя']

console.log(haystack.indexOf('Лена')) // 3
console.log(haystack.indexOf('Настя')) // 1
console.log(haystack.indexOf('Эдуард Аркадьевич')) // -1


// example 2
// Для строк: работает так же, как с массивами, но можно искать не только буквы в строке, но и подстроки. Например:

const haystack = 'Мама мыла раму'

console.log(haystack.indexOf('а')) // 1
console.log(haystack.indexOf('мыла')) // 5
console.log(haystack.indexOf('ё')) // -1


// example 3 (arr)
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison')); // Expected output: 1

// Start from index 2
console.log(beasts.indexOf('bison', 2)); // Expected output: 4
console.log(beasts.indexOf('giraffe'));// Expected output: -1


// example 4
// Нахождение всех вхождений элемента

const indices = [];
const array = ["a", "b", "a", "c", "a", "d"];
const element = "a";
let idx = array.indexOf(element);
while (idx !== -1) {
    indices.push(idx);
    idx = array.indexOf(element, idx + 1);
}
console.log(indices); // [0, 2, 4]


// example 5
// Поиск того, существует ли элемент в массиве или нет, и обновление массива

function updateVegetablesCollection(veggies, veggie) {
    if (veggies.indexOf(veggie) === -1) {
        veggies.push(veggie);
        console.log(`New veggies collection is: ${veggies}`);
    } else {
        console.log(`${veggie} already exists in the veggies collection.`);
    }
}

const veggies = ["potato", "tomato", "chillies", "green-pepper"];

updateVegetablesCollection(veggies, "spinach");
// New veggies collection is: potato,tomato,chillies,green-pepper,spinach
updateVegetablesCollection(veggies, "spinach");
// spinach already exists in the veggies collection.

