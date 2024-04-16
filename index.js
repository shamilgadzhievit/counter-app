// 2. Counter App
// 8. Обрабатываем нажатие на кнопку --------------

// let counter = 0;
// let button = document.querySelector("button");
// button.addEventListener("click", function () {
//   console.log("Произошел клик");
// });

// 2. Counter App
// 9. Увеличиваем счетчик по клику на 1 -------------------

// let counter = 0;
// let button = document.querySelector("button");
// button.addEventListener("click", function () {
//     counter++;
//   console.log(counter);
// });

// 2. Counter App
// 11. Отображаем счетчик через innerText -----------------------------

// let counterText = document.querySelector(".counter");
// let button = document.querySelector("button");

// let counter = 0;

// button.addEventListener("click", function () {
//   counter++;
//   counterText.innerText =        counter;
// });

// ..------------------------------------------------------------------------------------------------------
// let counter = 0;
// let button = document.querySelector("button"); /* выбираем в dom  button  */

// button.addEventListener("click", function () {
//   /* при клике добавляем ему фун-ю увел счетчика */
//   counter++;
//   counterText.innerText = counter;
// });
// let counterText = document.querySelector('.counter');/*
// выбирпем в dom  .counter
// -------------------------------------------------------------------------------------
// let counter = 0;
// let button1 = document.querySelector("button");
// let counterText = document.querySelector(".counter");

// button1.addEventListener("click", function () {
//   counter++;
//   counterText.innerText = counter;
// });

// console.log(typeof counter);
//

// -----------------------------------------------------------------
// -----------------------------------------------------------------
// -----------------------------------------------------------------
// -----------------------------------------------------------------

// Задание 1️⃣
// Напишите функцию printNumbers, которая выводит в консоль числа от -10 до 10.

// Задание 2️⃣

// Напишите функцию printNumbersByRange(start, end), которая выводит в консоль числа в диапазоне. Диапазон задается начальным и конечным числом. Например, в результате вызова функции с параметрами -3 и 2 (printNumbersByRange(-3, 2) в консоль выводятся числа: -3, -2, -1, 0, 1, 2.

// Задание 3️⃣

// Напишите функцию calculateNumbersSum(numbers), которая на вход принимает массив чисел и возвращает сумму этих чисел. Например, calculateNumbersSum([0, 1, 2, 4, 8] возвращает 15.

// Задание 4️⃣

// Напишите функцию includes(numbers, number), которая на вход принимает массив чисел и число. Если число есть в массиве чисел, функция возвращает true, иначе - false.

// Задание 5️⃣

// Напишите функцию createPerson(name, surname, age). Функция принимаем имя человека, фамилию и возраст. Функция возвращает объект с полями name, surname, age.

// Задание 6️⃣

// Напишите функцию findOldest(people). Функция принимает массив из объектов. Каждый объект создайте через функцию createPerson. Функция возвращает имя самого старшего человека.
// 1--------------------------------------------------------------------------------------------------------
// function printNumbers() {
//   for (let i = -10; i <= 10; i++) {
//     console.log(i);
//   }
// }
//  printNumbers();

// ---------------------------------------------------------------------------------------------------------------------------------------------------------
//
// // 2
// function printNumbersByRange(start, end) {
//     for (let i = start; i<= end; i++){
//         console.log(i);
//     }
// }
// console.log(printNumbersByRange(-3, 6));
// ------------------------------------------------------------------------------------------
// 3------------------------------------------------------
// let sum = 0;
// let numbers = [1, 2, 3, 4, 5];
// function calculateNumbersSum(numbers) {
//   //   for (let i = 0; i < numbers.length; i++) {
//   //     sum += numbers[i];
//   numbers.forEach(function (elem) {
//     sum += elem;
//   });

//   return sum;
// }
// console.log(calculateNumbersSum(numbers));

// 4-----------------------------------------------------
// let numbers = [1, 2, 3, 4, 5];
// function uncludes(numbers, number) {
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] === number) {
//       return true;
//     }
//   }
//   return  false;
// }

// console.log(uncludes(numbers, 1));

// 5-----------------------------------------------------------------------------------------------------------------------------------------
// function createPerson(name, surname, age) {
//   return {name, surname, age};

// }
// const name1 = 'shamil';
// const surname1 = 'gadzhiev';
// const age1 = 28;

// const person  = createPerson(name1, surname1,age1);
// console.log(person);
// ---------------------------------------------
// let obj = {};
// let name1 = null;
// let surname1 = null;
// let age1 = null;
// function createPerson(name, surname, age) {
//   obj.name1 = name;
//   obj.surname = surname;
//   obj.age = age;
//   return console.log(obj);
// }
// createPerson("SHAMIL",'gadzhiev', '28');

// 6-----------------------------------------------------------------------------------------------------------
// let people = [
//   {
//     name: "Shamvil",
//     surname: "Gadzhiev",
//     age: 28,
//   },
//   {
//     name: "Muhammad",
//     surname: "Gatsalov",
//     age: 21,
//   },
//   {
//     name: "Fatima",
//     surname: "Gadzhieva",
//     age: 19,
//   },
// ];

// function findOldest(people) {
//   let indexOldest = 0;
//   people.forEach(function (elem,index) {
//     if (elem.age > people[indexOldest].age) {
//       indexOldest = index;
//     }
//     return people[indexOldest].name;
//   });
//   console.log(findOldest(people));

// for (let i = 0; i < people.length; i++) {
//   if (people[i].age > people[indexOldest].age) {
//     indexOldest = i;
//   }
// }
// return people[indexOldest].name;

// ----------------------------------------------------
// ----------------------------------------------------
// ----------------------------------------------------
// ----------------------------------------------------
// ----------------------------------------------------
// ----------------------------------------------------

/* let counter = 0;
let counterAddButton = document.querySelector(".counter__addButton");
let counterValue = document.querySelector(".counter__value");
let counterReset = document.querySelector(".counter__resetButton");

counterAddButton.addEventListener("click", function () {
  counter++;
  counterValue.innerText = counter;
});

counterReset.addEventListener("click", function () {
  counter = 0;
  counterValue.innerText = counter;
});
 */ // ----------------------------------------------------
// ----------------------------------------------------
// ----------------------------------------------------
// ----------------------------------------------------
// ----------------------------------------------------
// --------------------------------------------------------------------------------------------------------------
/* let counter = 0;
const counterAddButton = document.querySelector(".counter__addButton");
const counterValue = document.querySelector(".counter__value");
const counterReset = document.querySelector(".counter__resetButton");

counterAddButton.addEventListener("click", function () {
  counter++;
  counterValue.innerText = counter;
});

counterReset.addEventListener("click", function () {
  counter = 0;
  counterValue.innerText = counter;
});
 */

let counter = 0;
let counterAddButton = document.querySelector(".counter__addButton");
let counterValue = document.querySelector(".counter__value");
let counterReset = document.querySelector(".counter__resetButton");

counterAddButton.addEventListener("click", function () {
  counter++;
  counterValue.innerText = counter;
});

counterReset.addEventListener("click", function () {
  counter = 0;
  counterValue.innerText = counter;
});
