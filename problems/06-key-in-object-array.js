/***********************************************************************
Write a function `keyInObjectArray(objArray, keyString)` that takes in an array
of objects as the first parameter and a string as the second. The
`keyInObjectArray` function will return `true` if any of the objects contains
the `keyString` as a key within them, and `false` if not.


Examples:
let objArray = [
  { name: "Rupert" },
  { age: 42 },
  { planet: "Earth", system: "Milky Way" }
];

keyInObjectArray(objArray, 'planet'); // => true
keyInObjectArray(objArray, 'age'); // => true
keyInObjectArray(objArray, 'food'); // => false
keyInObjectArray(objArray, 'animal'); // => false

Plan
  Create an array using object.keys


***********************************************************************/

function keyInObjectArray(objArray, keyString)
{
  for (let i = 0; i < objArray.length; i++)
  {
    let subArray = objArray[i]
    if (keyString in subArray) return true;
    // for (let key in subArray)
    // {
    //   console.log(key);
    //   if (key === keyString)
    //   {
    //     return true;
    //   }
    // }
  }

  return false;
}

// let objArray = [
//   { name: "Rupert" },
//   { age: 42 },
//   { planet: "Earth", system: "Milky Way" }
// ];

// keyInObjectArray(objArray, 'planet'); // => true
// keyInObjectArray(objArray, 'age'); // => true
// keyInObjectArray(objArray, 'food'); // => false
// keyInObjectArray(objArray, 'animal'); // => false

// for(let i = 0; i < objArray.length; i++)
// {
//   let subArray = objArray[i]
//   for(let key in subArray)
//   {
//     if (key === keyString)
//     {
//       return true;
//     }
//   }
// };

// return false;



// console.log(Object.keys(objArray[2]));
// console.log(objArray[0]);

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = keyInObjectArray;
