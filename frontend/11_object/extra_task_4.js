IsEmpty. Напишите функцию, которая делает поверхностную проверку объекта на пустоту.
/**
  * Описание задачи: Напишите функцию, которая делает поверхностную проверку объекта на пустоту.
  * Ожидаемый результат: ({}) => true,
      ({ a: undefined }) => true,
      ({ a: 1 }) => false
  * Пустые значения: '', null, NaN, undefined
  * Сложность задачи: 2 of 5
  * @param {Object} object - объект с примитивами
  * @returns {boolean}
*/

export const isEmpty = (object) => {
  throw new Error(`Напишите здесь свое решение ${object}`);
};

const data = { a: 1, b: undefined };
const data2 = { a: undefined };
console.log(isEmpty(data)); // false
console.log(isEmpty(data2)); // true



const isEmpty = (object) => {
  
    for (let key in object) {
      // если тело цикла начнет выполняться - значит в объекте есть свойства
      return false;
  }
  return true;
};

let schedule = {};
console.log(isEmpty(schedule)); // true

schedule["8:30"] = "get up";
console.log(isEmpty(schedule)); // false


// task's answer from the author
const isEmpty = (object) => {
  const objectKeys = Object.keys(object);
        if (objectKeys.length === 0) {
            return true;
        }
  return !objectKeys.filter((key) => object[key] || object[key] === 0 || object[key] === false).length;
};