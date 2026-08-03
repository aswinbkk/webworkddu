let result=0, limit=10, arr=[];

for(let i=1; i<=10; i++)
{
    result=i*7;
    arr.push(`${i} * 7 = ${result}`)
}

console.log(`Multipication table of 7 \n${arr.join('\n')}`)