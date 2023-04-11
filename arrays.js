// JS-Assessment
// 1. Write a function that takes in a string and returns it when reversed
// let food = “eating”
let food=`eat`
function reverse(tring){
   revStr
}

    return (String)


    

    







// 2. Write a function that takes in the following array and consoles the target if it is found else
// null
// let num = [2,8,0,23,5,45,76]
// Target = 23
function binary(num,target){
    let left=0;
    let right=num.length-1
    while(left<=target){
        let middle=Math.floor((left+right)/2)
        if(target===num[middle]){
            return middle;
        }
        else if(target<num[middle]){
            right=middle-1
        }
        else{
            left=middle+1
        } 
}
return null
}
let num = [2,8,0,23,5,45,76]
Target = 23
console.log(binary(num,target))


// 3. Given years between 2000 and 2023, console all the leap years in the following
// sentence, i.e “2020 is a leap year” if not console log i.e “2001 is not a leap year”
// let leap=[2000 && 2023]
// function give(leapyears){
//     if(year===leap){
//         return year;
//     }
//     else(year!==leap){
//         return;
//     }
// }



// 4. Given a range of numbers from 0 to 100, console”Fizz” if the numbers are divisible by 3,
// “Buzz” if the numbers are divisible by 5, and “FizzBuzz” if divisible by both 3 and 5.
// let numbers=[1<100]
// function x(numbers){

// }




// 5. Write a function that takes in an array of numbers and returns an array that has all
// elements multiplied by 4.
// let numArray = [12,87,45,75,23,64,73]
let numArray = [12,87,45,75,23,64,73]
let i=0
let multiply=1;
while(i<=numArray){
  console.log(multiply=num[i]*2)
    
}
console,log(num[i]);
console.log(multiply);







// 6. Write a function that takes in an array of strings and returns an array with every element
// turned into a number
// let nums = [“10”,”24”,”45”,”56”,”67”]
// let b= [“10”,”24”,”45”,”56”,”67”]
// function all(numbers){
// for(i in numbers){
   
// }
//  console.log({"String":numbers{b}})


