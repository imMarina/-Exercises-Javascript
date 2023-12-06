IsEqual. Напишите функцию, которая поверхностно сравнивает два объекта.
/**
  * Описание задачи: Напишите функцию, которая поверхностно сравнивает два объекта.
  * Ожидаемый результат: True если объекты идентичны, false если объекты разные ({ a: 1, b: 1 }, { a: 1, b: 1 }) => true
  * Сложность задачи: 2 of 5
  * @param {Object<string | number>} firstObj - объект с примитивами
  * @param {Object<string | number>} secondObj - объект с примитивами
  * @returns {boolean}
*/

export const isEqual = (firstObject, secondObject) => {
  throw new Error(`Напишите здесь свое решение ${firstObject} ${secondObject}`);
};

const data = { a: 1, b: 1 };
const data2 = { a: 1, b: 1 };
const data3 = { a: 1, b: 2 };
console.log(isEqual(data, data2)); // true
console.log(isEqual(data, data3)); // false



function isEqual(obj1, obj2) {
    
    let arr1 = Object.entries(obj1);
    let arr2 = Object.entries(obj2);
    
    let result = arr1.every( (arr, i) => arr.every( (elem, j) => (elem === arr2[i][j]) ) );
    // console.log(result);
    
    if (arr1.length === arr2.length) {
        return result;
    } else {
        return false;
    }
}
