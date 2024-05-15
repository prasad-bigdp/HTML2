/* there are two types of data types
primitive and non-primitve*/

/*1. primitive data types stores/compares values whears non primitve compares address */
let str = "raj"
let str1 = "raj";
console.log(str == str1);
let arr = [2, 3, 5];
let x = arr;
let arr1 = [2, 3, 5];
console.log(arr == x)
arr.push(6)
console.log(arr)
/*2. primitve data types are immuatble - non changable */
let str2 = "shekhar"
str2.toUpperCase()
console.log(str2)

/* arrays - array is collection of elements*/
let a = ["raj", 0, true]
console.log(a.length)
console.log(a.push(5), a)
console.log(a.pop(), a)
console.log(a.unshift(25), a)
console.log(a.shift(), a)
console.log(a.push(5, 6, 7, 8, 9),a)
console.log(a.splice(4, 0, 14, 15), a)
console.log(a.reverse())
console.log(a.indexOf("raj"))
console.log(a.sort())
console.log(["xyz", "abc"].join("    "));
console.log(arr)
let res1=arr.forEach(function (v)
{
   console.log(v) 
})
console.log(res1);
let arrDemo=[5, 8, 7, 6, 3]
/* write for,for--of,for..in to print array elements*/
for (let x = 0; x < arrDemo.length; x++)
{
    console.log(arrDemo[x])
}
for (let x of arrDemo)
{
    console.log(x)
}

arrDemo.forEach(function (v)
{
    console.log(v)
})
/* using for each design a function which takes array of integers as input and return its squares array 
[3,4]===>[9,16]*/

let newArray=arrDemo.forEach(function (v)
{
    console.log(v * v)
    return v * v;
})
/* forEach cannot return */
console.log(newArray)
let newArray2 = arrDemo.map(function (v) {
	console.log(v * v)
	return v % 2==0
})
console.log(newArray2);

let newArray3 = arrDemo.filter(function (v) {
	console.log(v * v)
	return v % 2==0
})
console.log(newArray3)
console.log(arrDemo)
let newArray4 = arrDemo.reduce(function (c, p)
{
    return c+p
}, 0)
console.log(newArray4)
/* take an array ,print the elemtns, sqaure and sort them, filter numbers greatern 20 and find their sum*/
let arr5 = [2, 5, 8, 9, 12, 5, 6];
arr5.forEach(function (x){ console.log(x) })
let newArr = arr5.map(function (v) { return v * v })
newArr.sort()
const newarr = newArr.filter(function (v) { return v > 20 })
console.log(
	[25, 26, 27, 28].reduce(function (c, p) {
		return c + p
	}, 10),
)
console.log([25,26,27,28].some(function (v)
{
    return v>27 
}))
console.log([25, 26, 27, 28].find(function (v) { return v > 25 }))

/* objects */
let obj = {
    name: "raj",
    age: 55,
    print: function ()
    {
        console.log(name,age)
        }
} 
console.log(obj["name"])

/* print list of students whose name starts with "r"*/

/* waf which takes an array as inp and return another arrays which contains ocuucrances of each element in given array with respectives indexex*/
/*[5, 6, 5, 3, 2, 1] -> remove duplicates,sort
[2, 1, 2, 1, 1, 1]*/



























