function equals(x, y) {
  //   return Object.is(x, y);
  if (x === y) {
    return true;
  }
  return false;
}

console.log(equals("12", 12) === false);
// console.log(equals(0, NaN) === false);
// console.log(equals(NaN, 0) === false);
// console.log(equals(5, "5") === false);
// console.log(equals("john", "doe") === false);
// console.log(equals(false, true) === false);
// console.log(equals(undefined, null) === false);
// console.log(equals(NaN, null) === false);
// console.log(equals(0, -0) === false);

// console.log(equals("john", "john") === true);
// console.log(equals(-0, -0) === true);
// console.log(equals(5, 5) === true);
// console.log(equals(false, false) === true);
// console.log(equals(null, null) === true);
// console.log(equals(undefined, undefined) === true);
// console.log(equals(0, 0) === true);
// console.log(equals(NaN, NaN) === true);

// let obj1 = { name: "John", surname: "Doe" };
// let obj2 = { name: "John", surname: "Doe" };
// console.log(obj1 == obj2);
// console.log(obj1 === obj2);
// console.log(equals(obj1, obj2));
