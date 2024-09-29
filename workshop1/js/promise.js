// promise successful job completion

// let promise = new Promise((resolve, reject) => {
//   // after 1 second signal that the job is finished with success
//   setTimeout(() => {
//     resolve("Done");
//   }, 1000);
// });

// ------------------------------------------------------------

// promise rejecting

// let promise = new Promise(function (resolve, reject) {
//   // after 1 second signal that the job is finished with an error
//   setTimeout(() => reject("Whoops!"), 1000);
// });

// ------------------------------------------------------------
// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Done");
//   }, 1000);
// });

// promise.then((data) => {
//   console.log(data);
// });

// ------------------------------------------------------------
// .catch same as .then second param

// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("oops");
//   }, 1000);
// });

// promise.catch((err) => {
//   console.log(err);
// });

// -------------------------------------------------------------
// . finally

// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Done");
//   }, 1000);
// });

// promise
//   .then((data) => {
//     console.log(data);
//   })
//   .finally(() => {
//     console.log("Final block");
//   });

// -------------------------------------------------------------
// FETCH example

// const url = "https://jsonplaceholder.typicode.com/users";

// let result = fetch(url);

// result
//   .then((response) => {
//     if (response.ok) {
//       return response.json();
//     }
//   })
//   .then((data) => {
//     console.log(data);
//   });

// -------------------------------------------------------------
// POST example

// const url = "https://jsonplaceholder.typicode.com/posts";

// let mypost = {
//   userId: 1,
//   id: 1,
//   title: "my one day",
//   body: "random story",
// };

// fetch(url, {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json;charset=utf-8",
//   },
//   body: JSON.stringify(mypost),
// })
//   .then((response) => {
//     console.log(response);
//     console.log(response.status); // 201 Created
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });
