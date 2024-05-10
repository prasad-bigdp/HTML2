// if, switch
//while,dowhile-- initi,condition,updat
console.log("for loop")
/* print 1 to 10 in console using for */
/* three variable declaration */
/* var,let,const */
console.log(a)
// console.log(b,c)/* let,const cannot get accessed before initialization*/
var a = 10;
let b = 20;
var a = 30; // using var you can redeclare variable
let b1 = 30; // let and const cannot redeclare
const c = 10;
a = 50; // var can reassign also
b = 50; // let can reassign
// c = 20;
// const reassign is not possible
/* let,const are block scoped varible,var is function scoped variable */

function x ()
{
    var a = 20;
    if (true)
    {
        let b = 30;
    }
    console.log(b)
}

x()


// for loop
for (let i = 0; i <= 20; i++)
{
    console.log(i)
}
    //print numbers from 5 table in reverse from 100 to 1
//100 95 90 85 80 
for (let i = 100; i >= 0; i-=5)
{

    console.log(i)
}
// take an array
//[2,5,7,8,9], print all elements of array using for loop
    const arr=[2,5,7,8,9]
for (let i = 0; i < arr.length; i++)
{
    console.log(arr[i])
}
    
for (let i of arr) // for..of widely used for arrays
{
    console.log(i)
}

for (let i in arr) // for .. in widely used for objects
{
    console.log(i)
}
/* waf which takes input as a string returns no,of vowels and consonents and words,spaces as a array/object */
function countString (str)
{
    let nv = 0, nc = 0, w = 0, s = 0;
    let len = str.length;
    w = str.split(" ").length;
    
    for (let i in str)
    {
        if ((str[i].toLowerCase() == "a") || (str[i].toLowerCase() == "e") || (str[i].toLowerCase() == "i") || (str[i].toLowerCase() == "o") || (str[i].toLowerCase() == "u"))
        {
            nv++;
        }
       else if (str[i] == "")
        {
            s++;
        }
    }
     nc = len - (nv + s);
    return {
        vowels: nv,
        consonants: nc,
        word: w,
        spaces:s
    }
}
let result = countString("This is my string")
console.log(result.vowels)



// [2,3,5,4,8,8,5,3] -- unique vales -not repeated vales return as array
const arr2 = [2, 3, 5, 4, 8, 8, 5, 3];
console.log(arr2.sort())
let arr3=[]
for (let i = 0; i < arr2.length; i++)
{
    let c = 0;
    for (let j = 0; j < arr2.length; j++)
    {
        if (arr2[i] == arr2[j])
        {
            c++;
            }
    }
    if (c == 1)
    {
        arr3.push(arr2[i])
        }
}
    console.log(arr3)

// WAF that takes an array of integers and an integer(n) as input and return short path , longest path of n number of digits in array

// eg: [1,2,3,4,2,5,6,8]  and 3
// no need for fulll code implement logic/algorithm











































































