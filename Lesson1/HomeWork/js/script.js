// //***1***
// // Робота зі змінними
// // Оголосіть дві змінні: name та city.
// // Присвойте значення "Іван" змінній name.
// // Скопіюйте значення зі змінної name в city.
// // Виведіть значення змінної city, використовуючи функцію console.log (яка повинна показати “Іван”).

// let name = "Іван";
// let city = "Kyiv";
// city = name;
// console.log(city);

// //***2***
// //Який буде результат виконання скрипта?
// // let name = "Olga";
// // console.log(`привіт ${1}`); привіт 1//
// // console.log(`привіт ${"name"}`); привіт name//
// // console.log(`привіт ${name}`); привіт Olga// ?

// //***3***
// //Видобути число зі змінних
// let a = "5";
// console.log(Number.parseFloat(a));
// let b = "13cvb";
// console.log(Number.parseFloat(b));
// let c = "12.9sxdcfgv";
// console.log(typeof parseFloat(c));
// console.log(parseFloat(c));
// // вивести в консоль тип

// //***4***
// //Зробіть, щоб 0.1 + 0.2 = 0.3

// console.log((0.1 * 10 + 0.2 * 10) / 10);

// //***5**
// //Поверніть найбільше число с набору 20, 10, 50, 40

// console.log(Math.max(20, 10, 50, 40));

// //***6**
// //Поверніть випадкове число в діапазоні від 2 до 4

// //ФОРМУЛА console.log(Math.random()*(max-min)+min);
// console.log(Math.random() * (4 - 2) + 2);

// //***7**
// //дізнатись довжину message

// const message = "Welcome to Bahamas!";
// console.log(message.length);

// //***8**
// //вивести в консоль message  великими літерами

// const message = "Welcome to Bahamas!";
// console.log(message.toUpperCase());

// //***9**
// // створити пустий об*єкт
// let user = {};
// // додати туди ім*я, вік і місто

// //1 варіант
// // let user = {};
// // user.name = "Ivan";
// // user.age = 23;
// // user.city = "Lozova";

// //2 варіант
// let user = {
//   name: "Ivan",
//   age: 23,
//   city: "Lozova",
// };

// console.log(user);
// // вивести результат в консоль
// // видалити місто
// let user = {
//   name: "Ivan",
//   age: 23,
//   city: "Lozova",
// };
// delete user.city;
// console.log(user);
// // додати буль з ключем: like flowers
// // вивести результат в консоль
// let user = {
//   name: "Ivan",
//   age: 23,
//   city: "Lozova",
//   "like flowers": true,
// };
// delete user.city;
// console.log(user["like flowers"]);

// //***10**
// // За допомогою циклу  “for…in” вивести в консоль ключі і значення об*єкта

// //for (let key in object) {console.log(key);}перебираємо лише ключі (name, age...)
// //for (let key in object) {console.log(user[key]);} перебираємо значення
// //for (let key in object) {console.log(key); console.log(user[key]);} перебираємо і те і те

// let user = {
//   name: "Ivan",
//   age: 23,
//   city: "Lozova",
//   "like flowers": true,
// };
// for (key in user) {
//   console.log(key);
// }

// let user = {
//   name: "Ivan",
//   age: 23,
//   city: "Lozova",
//   "like flowers": true,
// };
// for (let key in user) {
//   console.log(user[key]);
// }

// let user = {
//   name: "Ivan",
//   age: 23,
//   city: "Lozova",
//   "like flowers": true,
// };
// for (let key in user) {
//   console.log(key);
//   console.log(user[key]);
// }
