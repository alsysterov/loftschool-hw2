/* ДЗ 2 - работа с массивами и объектами */

/*
 Задание 1:

 Напишите аналог встроенного метода forEach для работы с массивами
 Посмотрите как работает forEach и повторите это поведение для массива, который будет передан в параметре array
 */
function forEach(array, fn) {
    for (let element of array) {
        fn(element);
    }

    return undefined;
}

console.log("Test 1: ");
let arr1 = [2, 3, 4, 5, 6, 7, 9];

forEach(arr1, (element) => console.log(element));

/*
 Задание 2:

 Напишите аналог встроенного метода map для работы с массивами
 Посмотрите как работает map и повторите это поведение для массива, который будет передан в параметре array
 */
function map(array, fn) {
    let array2 = [];

    for (let element of array) {
        array2.push(fn(element));
    }

    return array2;
}

console.log("Test 2: ");
let arr2 = [4, 6, 9, 144];
let arrFunc2 = map(arr2, Math.sqrt);

console.log("Second array:", arrFunc2);
console.log("First array:", arr2);

/*
 Задание 3:

 Напишите аналог встроенного метода reduce для работы с массивами
 Посмотрите как работает reduce и повторите это поведение для массива, который будет передан в параметре array
 */
function reduce(array, fn, initial) {
    let result = 0;

    try {
        if (array.length > 0) {
            if (initial === undefined) {
                for (let i = 0; i < array.length; i++) {
                    result = fn(result, array[i]);
                }
            } else {
                result = fn(initial, array[0]);
                for (let i = 1; i < array.length; i++) {
                    result = fn(result, array[i]);
                }
            }
        } else {
            if (initial !== undefined) {
                result = initial;
            } else {
                throw new Error(
                    "Error: Reduce of empty array with no initial value"
                );
            }
        }

        return result;
    } catch (e) {
        console.log(e.message);
    }
}

let resultReal, resultFunc;
let arr3 = [];

console.log("Test 3: ");
resultReal = arr3.reduce((sum, current) => sum + current, -43435423545);
console.log("Real reduce:", resultReal);
resultFunc = reduce(arr3, (sum, current) => sum + current, -43435423545);
console.log("Function reduce:", resultFunc);

/*
 Задание 4:

 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистр и вернуть в виде массива

 Пример:
   upperProps({ name: 'Сергей', lastName: 'Петров' }) вернет ['NAME', 'LASTNAME']
 */
function upperProps(obj) {
    let arrayOfProps = [];

    for (let key in obj) {
        let newProp = key.toUpperCase();
        arrayOfProps.push(newProp);
    }

    return arrayOfProps;
}

console.log("Test 4: ");

let objTest5 = {
    name: "Alex",
    lastName: "Jones",
    age: 36,
    "year of birth": 1955,
};

console.log("Array of properties:", upperProps(objTest5));

/*
 Задание 5 *:

 Напишите аналог встроенного метода slice для работы с массивами
 Посмотрите как работает slice и повторите это поведение для массива, который будет передан в параметре array
 */
function slice(array, from, to) {
    let array2 = [];

    if (Math.abs(from) + Math.abs(to) <= array.length) {
        if (from < 0 && to > 0 && Math.abs(from) > Math.abs(to)) {
            for (let i = array.length + from; i < to; i++) {
                array2.push(array[i]);
            }
        } else if (from >= 0 && to < 0 && Math.abs(from) < Math.abs(to)) {
            for (let i = from; i < array.length + to; i++) {
                array2.push(array[i]);
            }
        } else if (from < 0 && to < 0 && Math.abs(from) > Math.abs(to)) {
            for (let i = from + array.length; i < array.length + to; i++) {
                array2.push(array[i]);
            }
        } else if (from >= 0 && to > 0 && Math.abs(from) < Math.abs(to)) {
            for (let i = from; i < to; i++) {
                array2.push(array[i]);
            }
        }
    } else if (to === undefined || to >= array.length) {
        if (from < -array.length) {
            array2 = array;
        } else if (from < 0 && from >= -array.length) {
            for (let i = from + array.length; i < array.length; i++) {
                array2.push(array[i]);
            }
        } else if (from >= 0 && from < array.length) {
            for (let i = from; i < array.length; i++) {
                array2.push(array[i]);
            }
        }
    } else if (from < -array.length) {
        if (to > 0 && to < array.length) {
            for (let i = 0; i < to; i++) {
                array2.push(array[i]);
            }
        }
    }

    return array2;
}

let arr5 = [5, 7, 9, 13, 17, 1];

console.log("Test 5: ");
console.log("Real slice:", arr5.slice(0, 6), "Remaining array:", arr5);
console.log("Function slice:", slice(arr5, 0, 6), "Remaining array:", arr5);

/*
 Задание 6 *:

 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат
 */
function createProxy(obj) {
    obj = new Proxy(obj, {
        set(target, property, value) {
            if (typeof value == "number") {
                target[property] = Math.pow(value, 2);

                return true;
            } else {
                return false;
            }
        },
    });

    return obj;
}

let obj6 = {
    first: 1,
    second: 2,
    third: 3,
};

console.log("Test 6: ");
console.log("Object before proxy:", obj6);
obj6 = createProxy(obj6);
obj6.fourth = 4;
obj6.fifth = 5;
obj6.sixth = 6;
console.log("Object after proxy:", obj6);

/*export {
    forEach,
    map,
    reduce,
    upperProps,
    slice,
    createProxy
};*/
