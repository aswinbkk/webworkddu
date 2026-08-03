const array = [1, 2, 3, 4, 5];

const filteredEven = array.filter((number, index, originalArray) => {
  return number % 2 === 0;
});

console.log(`Even filtered array = ${filteredEven}`);

// const arr = [10, 3.04, 4766, 216.60];
// const filtterEven = arr.filter(variable => variable % 2 === 0);
// console.log(`Even numbers = ${filtterEven}`);