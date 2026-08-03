const array = [1, 2, 3, 4, 5];

const doubledNumbers = array.map((number, index, originalArray) => {
  return number * 2;
});

console.log(`Doubled array elements = ${doubledNumbers}`);

// const arr = [1, 2, 3, 4, 5];
// const doubledArr = arr.map(num => num * 2)
// console.log(`Doubled array elements = ${doubledArr}`);