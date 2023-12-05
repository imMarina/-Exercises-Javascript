// Without. Напишите функцию, которая возвращает новый объект без указанных значений.
/**
  * Описание задачи: Напишите функцию, которая возвращает новый объект без указанных значений.
  * Ожидаемый результат: ({ a: 1, b: 2 }, 'b') => { a: 1 }
  * Сложность задачи: 2 of 5
  * @param {Object} object - любой объект
  * @param {?} args - список значений для удаления
  * @returns {Object} - новый объект без удаленных значений
*/

const without = (object, ...args) => {
    
    for (let key in object) {
        if (args.find((elem) => elem === key)) {
            // delete object[key];
            object[key] = undefined;
        }
    }
  return object
};


const data = { a: 1, b: 2, c: 3 };
console.log(without(data, 'b', 'c')); // { a: 1, b: undefined, c: undefined }


// task's solution by author
const without2 = (object, ...args) => {
  const newObject = { ...object };

  args.forEach((arg) => {
    delete newObject[arg];
  });

  return newObject;
};

console.log(without2(data, 'b', 'c')); // { a: 1 }