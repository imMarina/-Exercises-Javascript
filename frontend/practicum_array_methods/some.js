// method SOME - Array.prototype.some()
// Метод some() проверяет, проходит ли хоть один элемент массива заданную функцией проверку.

// Метод Array.prototype.some() проверяет, соответствует ли хотя бы один элемент массива условию, задаваемому передаваемой ему функцией. 
// Этот метод способен хорошо показать себя в решении задачи проверки полномочий пользователя. 
// Его можно рассматривать в качестве аналога ранее рассмотренного .forEach(), с той разницей, что, при его применении, с помощью функции, которая ему передана, можно выполнять над элементами массива некие действия до тех пор, пока эта функция не вернёт истинное значение, после чего — прервать обработку.


// syntax by mozilla docs
array.some(callback(currentValue), thisArg);

// Параметры some():
// callback функцию с проверкой, для вызова на каждом элементе массива. Принимает:
// currentValue текущий обрабатываемый элемент в массиве.
// thisArg (необязательно) - значение, используемое в качестве this, при вызове функции callback. По умолчанию определен как undefined.

// return value some()
// true, если функция проверки возвращает truthy значение хотя бы для одного элемента массива. Иначе, false.

// Примечания:
// some() не изменяет исходный массив.
// some() не вызывает функцию callback для элементов массива без значений.
// метод возвращает false при любом условии для пустого массива.


// example 1
// функция с проверкой: является ли возраст меньше 18 лет
function checkMinor(age) {
    return age < 18;
}
const ageArray = [34, 23, 20, 26, 12];

// проверяем, содержит ли массив ageArray какой-либо элемент, возраст которого меньше 18 лет
let check = ageArray.some(checkMinor);
console.log(check); // true

// В приведенном выше примере мы использовали метод some(), чтобы выяснить, содержит ли какой-либо элемент массива ageArray значение меньшее 18.
// Сначала мы создали callback функцию checkMinor(), которая возвращает результат условия является ли возраст меньше 18.
// Затем мы передали callback в метод some() как ageArray.some(checkMinor), который проверяет наличие элементов меньших 18 и возвращает true.


// example 2
// массив баллов, полученных студентом
let scoreObtained = [45, 50, 39, 78, 65, 20];
// функция с проверкой: возвращает результат условия являются ли баллы меньше 40
function studentIsPassed(score) {
    return score < 40;
}

// проверяем, есть ли хоть один студент с баллами меньше 40
if (scoreObtained.some(studentIsPassed) == true) {
    console.log("At least one of the students failed.");
} else console.log("All students are passed."); 
// At least one of the students failed.

// В приведенном выше примере мы использовали метод some(), чтобы узнать, набрал ли кто-нибудь из студентов оценку менее 40.
// Мы передали callback в метод как scoreObtained.some(studentIsPassed), который возвращает true. Потому что scoreObtained содержит по крайней мере один элемент, т.е. 20, что меньше 40.
// Поскольку тестовое выражение в операторе if истинно, программа выводит - At least one of the students failed.


// example 3 - Проверим, имеется ли в массиве как минимум одна строка admin.
const userPrivileges = ['user', 'user', 'user', 'admin'];
const containsAdmin = userPrivileges.some( element => element === 'admin'); // в containsAdmin будет записано true