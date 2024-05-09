//control statements or decision making statements are used to make control flow goes based on a condition
// if statment
function eleigibilty (age)
{
    if (age>=18)
    {
       return true
    }
    else
    {
        return false
    }
}
console.log(eleigibilty(18))
// waf which accepts age as parameter return true if he is eligible to vote else false.
function PositiveNegitive (num)
{
    if (num > 0)
        return "Positive"
    else if (num < 0)
        return "negitive"
    else
    return 0;
} // if else if 
console.log("The given number is " + PositiveNegitive(0))

//nested if
// if (a > b)
// {
//     if (b > c)
//     {
//         //nested if
//         }
//     }

largeSmall(5, 8, 6)
function largeSmall (a, b, c)
{
    var x = (a > b) ? a : b;
    console.log("largest value is " +( (a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c)))
    console.log(
			"smallest value is " + (a < b ? (a < c ? a : c) : b < c ? b : c),
		)
}
/* waf which takes an option for a question and checks whether it is valid answer or not
imagine 4 options are there

if(option=="A"){ }
else if(option=="B"){}
else if(option=="c"){}
else {} */

/* switch - case */
switch ("A")
{
    case "A"://logic
        break;
    case "B"://logic
        break;
    case "c"://logic
        break;
    case "D"://logic
        break;
    default://logic
}

function welcome (userType)
{
    
}
/* waf which welcomes users based on their thype -- user- teachers,students,staff,admin


welcome("teacher") -- Hello teacher*/
function welcome(userType) {
	switch (userType) {
		case "Teacher":
			console.log("Hello " + userType)
			break
		case "Student":
			console.log("Hello " + userType)
			break
		case "Staff":
			console.log("Hello " + userType)
			break
		case "Admin":
			console.log("Hello " + userType)
			break
		default:
			console.log("Hello Stranger")
	}
}
welcome("Teacher")
welcome("Admin")
welcome("Staff")
welcome("Student")

/* iteration statements or loops */
/* 2 types-- entry loops - while,for and exit loops - doWhile */


/* any loop contains 3 things initialization, condition,updation*/

var k = 35; // initialization
while (k <= 30) // condition
{
    console.log(k)
    k++;
}

var p = 35;
do
{
    console.log(p)
    p++;
} while (p <= 30);


// using while loop  print even number below 25 till 0 in reverse order
var k = 25 // initialization
while (k >= 0) {
	// condition
    if (k % 2 == 0)
        console.log(k)
    k--;
}  

//This is js demo xyz---> TIJDX

function shortCode (str)
{
    var arr = str.split(" ")
		var str2 = ""
		for (var i = 0; i < arr.length; i++) {
            str2 = str2 + arr[i].charAt(0).toUpperCase()
            
    }
    console.log(str2)
    return str2;
}
// pallindrome is a number or a word which lloks same when reversed eg:121,MADAM
shortCode("This is js demo xyz")

//pallindrome to check string or number





















