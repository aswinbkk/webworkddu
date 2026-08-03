let limit = 40, arr = [];

for (let i = 1; i <= 40; i++) {
    if (i % 2 !== 0)
        arr.push(i);
}

console.log(`Odd number from 1 to ${limit} are = ${arr}`);