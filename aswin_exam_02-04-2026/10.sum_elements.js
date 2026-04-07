const arr = [10, 3.04, 4766, 216.60];
const reduceSum = arr.reduce((variableTotal, variableCurrent) => variableTotal + variableCurrent, 0);
console.log(`Sum of the given array = ${reduceSum}`);