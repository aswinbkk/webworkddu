const arr = [10, 3.04, 4766, 216.60];
arr.sort((a, b) => a - b);
console.log(`Sorted array in ascending order = ${arr}`);

// const array = [1, 4, 2, 5, 3];
// const sortArray = array.reduce((sorted, number) => {
//   const index = sorted.findIndex(item => item > number);

//   if (index === -1) {
//     sorted.push(number);
//   } else {
//     sorted.splice(index, 0, number);
//   }

//   return sorted;
// }, []);
// console.log(`Sorted array are = ${sortArray}`);