
// let a=10;
// let b=20;
// let p=1000;
// let r=10;
// let t=1;

// console.log(
//     "A=",a,
//     "B=",b,
//     "Add Two Numbers =",a+b,
//     "Area of a Rectangle =",a*b,
//     "Remainder =",a%b,
//     "Square of A =",a**2,
//     "Cube of B =",b**3,
//     "Increase Value Using += in A =",a+=1,
//     "Increase Value Using += in B =",b-=1
// );

// console.log(
//     "P=",p,
//     "R=",r,
//     "T=",t,
//     "Simple Interest =", (p*r*t)/100,
// );

// // Check if User Can Vote
// let age=17;
// if(age>=18)
// {
// console.log("User can vote age is =",age)
// }
// else{
// console.log("User can not vote bcz age is =",age)
// }

// // Login Validation (Using === and &&) 
// let user=true;
// if (user===true&&user!=0){
//     console.log("User validation successfull",user)
// }
// else{
//     console.log("User validation failed",user)
// }

// // Weekend Checker
// let weekend="Saturday";
// weekend=weekend.toLowerCase();
// if(weekend=="saturday")
// {
//     console.log("Today is weekend",weekend)
// }
// else if(weekend=="sunday")
// {
//     console.log("Today is holiyday",weekend)
// }else{
//     console.log("Today is working day",weekend)
// }

// switch (weekend) {
//     case "sunday": console.log("Today is holiyday",weekend)
//         break;
//     case "saturday": console.log("Today is weekend",weekend)
//         break;
//     default:  console.log("Today is working day",weekend)
//         break;
// }

// let count=1;
// while(count<=10){
//     console.log(count)
//     count++
// }

// let coun=10;
// while(coun>0){
//     console.log(coun)
//     coun--
// }

// let s=1,sum=0;
// while (s<=10) {
//     sum=s+sum;
//     s++
// }
// console.log(sum);
// let m = prompt("Enter the number");
// let sum=1;
// for(i=1; i<=10;i++)
// {
// sum=m*i;
// console.log(i,"*",m,"=",sum);
// }

let humburger = document.getElementById('humburgerid');
let nav_center = document.getElementById('nav_centerid')

humburger.addEventListener('click', ()=>{
   
    
    humburger.classList.toggle('active')
    nav_center.classList.toggle('active')
})

const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click',() => {
        removeclass()

        panel.classList.add('enable')
    })
})

function removeclass(){
    panels.forEach(panel => {
        panel.classList.remove('enable')
    })
}