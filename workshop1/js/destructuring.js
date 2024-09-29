// Array destructuring

// let arr = ["John", "Doe"];

// let  firstName = arr[0]
// let  surname = arr[1]

// let [firstName, surname] = arr;

// console.log(firstName); // John
// console.log(surname); // Doe

// ----------------------------------
// example 1

// let [firstName, surname] = "John Doe".split(" ");

// console.log(firstName);
// console.log(surname);

// ----------------------------------
// example 2

// first and second element is not needed
// let info = ["John", "Doe", "johnDoe@gmail.com"];
// let [, , email] = info;

// console.log(email); // johnDoe@gmail.com

// ----------------------------------
// example 3 default values

// let [name = "Guest", surname = "Anonymous"] = ["Julius"];

// console.log(name); // Julius (from array)
// console.log(surname); // Anonymous (default used)

// ----------------------------------
// Objects Destructuring

// let info = {
//   name: "John",
//   surname: "Doe",
//   age: 25,
// };

// const { name, age } = info;

// console.log(name);
// console.log(age);

// ----------------------------------
// example 1 change the Name

// let info = {
//   name: "John",
//   surname: "Doe",
//   age: 25,
//   fullName: "John Doe",
// };

// const { name, fullName: f } = info;

// console.log(f);

// ----------------------------------
// example 2 default values

// let info = {
//   name: "John",
//   surname: "Doe",
//   age: 25,
//   fullName: "John Doe",
// };

// const { name = "Jane" } = info;

// console.log(name);

// ----------------------------------
// example Nested destructuring

// let info = {
//   data: {
//     name: "John",
//     surname: "Doe",
//   },
//   age: 25,
//   isAdmin: false,
// };

// const {
//   data: { name, surname },
//   age: userAge,
// } = info;

// console.log(name);
// console.log(surname);
// console.log(userAge);
