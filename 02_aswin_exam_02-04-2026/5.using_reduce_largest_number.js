const array = [1, 2, 3, 4, 5];

const largestNumber = array.reduce((largest, number, index, originalArray) => {
  return number > largest ? number : largest;
}, 0);

console.log(`Largest number = ${largestNumber}`);

// const arr = [10, 3.04, 4766, 216.60];
// const maxNum = Math.max(...arr);
// console.log(`Largest number = ${maxNum}`);