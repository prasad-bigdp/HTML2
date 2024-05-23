const name="shekar"
function fun (a,b)
{
    console.log(this); console.log(this.name,a+b)
}
const obj = {
    name: "Prasad",  age: 558,
    fun2: function ()
    {
        console.log(this)//obj
        console.log("hello world")
    }
} // call, apply,bind
fun.call(obj, 2, 3)//fun()
fun.apply(obj, [2, 3])
const myFun = fun.bind(obj)
console.log(myFun)














myFun(5,6)













myFun(2,3)
// call and apply both will make the function scope belong to some specific object. The scope of this keyword is called lexical scoping, the difference in both is call will pass parameters directly whereas apply will pass parameters as a array