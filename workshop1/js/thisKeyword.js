// this in methods

// let user = {
//   name: "John",
//   surname: "Doe",
//   sayHello() {
//     console.log(`Hello! my name is ${this.name}`);
//   },
// };

// user.sayHello();

// -------------------------------------------------------
// // access the object without this

// let user = {
//   name: "John",
//   surname: "Doe",
//   sayHello() {
//     console.log(`Hello! my name is ${user.name}`);
//   },
// };

// user.sayHello();

// // But But But :)

// -------------------------------------------------------
// // this approach is very unreliable

// let user = {
//   name: "John",
//   age: 30,

//   sayHi() {
//     console.log(`Hi ${user.name}`); // leads to an error
//   },
// };

// user.sayHi();
// let admin = user;
// user = null; // overwrite to make things obvious

// admin.sayHi(); // TypeError: Cannot read property 'name' of null

// -------------------------------------------------------
