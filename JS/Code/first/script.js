// // console.log("hello");
// // var a = 20;
// // a = a + 6;
// // console.log(a)
// // // alert("raj");
// // var b = confirm("Are you sure?");
// // console.log(b)
// // var val1 = prompt("enter the value")
// // var val2 = prompt("enter the value")
// // console.log(val1 + val2);



// //Dynamic data typing
// var a = 25.3256;
// // var b = new Number(25);

// console.log(a+1, typeof (a))
// // console.log(b+1, typeof b)

// console.log(a.toFixed(3))
// console.log(a.toPrecision(4))
// console.log(a.toString(16))
// console.log(a.valueOf())
// //Math Methodconsole.log()s
// console.log(Math.abs(-10))
// console.log(Math.pow(2,3))
// console.log(Math.sqrt(16))
// console.log(Math.cbrt(27))
// console.log(Math.ceil(3.3))
// console.log(Math.floor(3.8))
// console.log(Math.round(3.5))
// console.log(Math.max(2,3))
// console.log(Math.min(3,2))
// console.log(Math.ceil(Math.random() * 10000))
// /*0.0-1.0*/
// var str = "the kalam said \"dream big\""
// console.log(str, typeof (str))
// /* template literal */
// var cost = 200,quantity=5;
// console.log(` the total cost of items are ${cost * quantity}`)
// var str="Js is very easye"
// //String built in Methods
// console.log(str.length);
// console.log(str.indexOf('e'))-- first occurence
// console.log(str.lastIndexOf('e')) -- last occurence
// console.log(str.charAt(3))
// console.log(str.toUpperCase())
// console.log(str.toLowerCase())
// console.log(str.concat(" true"))
// console.log(str.startsWith("Ja"))-- true/false
// console.log(str.endsWith("bhatt"))
// console.log("  x y z  ".trim())
// console.log("  x y z ".trimStart())
// console.log(str.split(""))
// console.log(["js", "is", "good"].join(' '));
// // prasad ==> dasarp
// console.log("prasad".split('').reverse().join(''))
// console.log(str.replaceAll('e', 'a'))
// console.log(str.match('[A-Z]'))
// console.log(str.slice(1, 5))
// /* boolean */
// var x = new Boolean(true)
// console.log(x.valueOf(), 5 + +'4')

// var y = null;
// var z = undefined;
// console.log(y, z, typeof(y),typeof(z))
// // null and undefined defines absence of data but undefined also expects future occupation of data
// console.log( null == undefined)
















// /*DATA TYPES*/
// Hoisting --> declaration/usage preceeds over initialization 
debugger;
console.log(x) //undefined
 console.log(y) //error not defined
var x = 20;
console.log(x);
var y = 50;
function display ()
{
    var a = 25;
    console.log(a)
}
display()









