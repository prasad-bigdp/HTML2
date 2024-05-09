function displayFun ()
{
 console.log("helllo world")   
}
var displayFun2 = function ()
{
    console.log("helllo world")
}
// function expression -- function declaring/assigning as a variable
// a function without a name is anonymous function
    
displayFun()
console.log(displayFun, displayFun2)

    // (function ()
    // {
    //     let a = 25;
    // })(); // IIFE- Immediate Invoke Function Expression -- security

// functions also contains parameters
function sum (a, b)
{
    console.log(a+b)
}
sum("raj", "shekhar");

// write a function which takes a string and returns no.of words in it
//Eg: Js is Very Easy --input
//output--4
function noOfWords (str)
{
    console.log(str.split(" ").length)
}
noOfWords("JS Is Very Easy")

// write a function which returns next values evry time we call it
function nextValue (num)
{
    return ++num;
}
var x = nextValue(5);
console.log(x)

// you can keep one function inside another function
// nested functions
function x2 ()
{
    var a = 20;
    function y ()
    {
        a++;
        console.log(a)
    }
    return y;
}
var result = x2();
console.log(result)// y whole function
result()
result()
result()
//closures -- inner functions can remember outer functions values
//memorization

//callback functions

function mad ()
{
    console.log("i'm mad")
}
function bad ()
{
    console.log("i'm bad")
    
}
function xyz (a,b)
{
    a()
    b()
}
xyz(mad, bad)
// callback hell or pyramid of doom
// call back function is a function within parameter of another function
// functions always contain local scope

// operators
//arithematic -- +,-,*,/,%,**
//logical  && , ||,!
//2==="2"
//relational >,<,>=,<=,==,===,!=,!==
//incr,decr ++(pre,post), --
//assignment += -= *= /= %=, =
//a+=2===> a=a+2
//ternary operator==> condition ? st1 : st2 ; -- conditional operator
//+
var x=35
var res = (x > 20) ? 25 : 20;
console.log(res)











































