const arr = [1,24.68,8673.95,436,8];

// Largest number in an array.
  const maxNum = Math.max(...arr);
  console.log(`Largest number = ${maxNum}`);

// Create a new array with each number doubled.
  const mapDouble = arr.map(variable => variable*2);
  console.log(`Doubled numbers = ${mapDouble}`);

// Given an array of objects, use map() to get all names.
  let objectArray = [ {name: "name1", marks: 10}, {name: "name2", marks: 20} ];
  let mapName = objectArray.map(variable => variable.name);
  console.log(mapName);

// To get all even numbers from an array.
  const filtterEven = arr.filter(variable => variable % 2 === 0);
  console.log(`Even numbers = ${filtterEven}`);

// Check if an element exists in an array.
  const includesExists = arr.includes(8673.95);
  console.log(`Even exists in an array = ${includesExists}`);

// Sort an array in ascending order.
  arr.sort((a,b) => a-b);
  console.log(`Sorted array in ascending order = ${arr}`);

// Sum of all elements in an array.
  const reduceSum = arr.reduce((accumulator, variableCurrent) => accumulator + variableCurrent, 0);
  console.log(`Sum of the given array = ${reduceSum}`);

// Print only even numbers from an array.
  let forOfEven=[];
  for (let variable of arr) {
    if (variable % 2 === 0) {
      forOfEven.push(variable);
    }
  }
  console.log(`Even numbers in given array = ${forOfEven}`);