const arr = [10, 3.04, 4766, 216.60];
const reduceSum = arr.reduce((accu, varCurrent) => accu + varCurrent, 0);
console.log(`Sum of the given array = ${reduceSum}`);