/***********************************************************************
Write a function `valuePair(obj1, obj2, key)` that takes in two objects
and a key (string). The function should return an array containing the
corresponding values of the objects for the given key.

Examples:
let object1 = {name: 'One', location: 'NY', age: 3};
let object2 = {name: 'Two', location: 'SF'};
valuePair(object1, object2, 'location'); // => [ 'NY', 'SF' ]
valuePair(object1, object2, 'name'); // => [ 'One', 'Two' ]
***********************************************************************/

function valuePair(obj1, obj2, key) {
  let newArray = [obj1[key], obj2[key]];
  // if (key in obj1)
  // {
  //   newArray.push(obj1[key])
  // }

  // if (key in obj2)
  // {
  //   newArray.push(obj2[key])
  // }

  return newArray;
}

// function valuePair(obj1, obj2, key) {
//   let val1 = obj1[key];
//   let val2 = obj2[key];
//   let arr = [val1, val2];

//   return arr;
// }


// let object1 = {name: 'One', location: 'NY', age: 3};
// let object2 = {name: 'Two', location: 'SF'};
// valuePair(object1, object2, 'location'); // => [ 'NY', 'SF' ]
// valuePair(object1, object2, 'name'); // => [ 'One', 'Two' ]

// console.log(valuePair(object1, object2, 'name'));


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = valuePair;
