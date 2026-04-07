const arr = [10, 3.04, 4766, 216.60];
let forOfEven=[];
  for (let variable of arr) {
    if (variable % 2 === 0) {
      forOfEven.push(variable);
    }
  }
console.log(`Even numbers in given array = ${forOfEven}`);