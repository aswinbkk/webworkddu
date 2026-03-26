function first(a,b,fun) // fun = second
{
    let sum=0;
    sum=a+b;
    fun(sum)            // second(sum)
}

function second(para) 
{
    console.log(para);  // console.log(sum)
}

first(1,2,second)

