import { incr, Teacher } from './index2.js';
import run from './index2.js'
//named imports should not be changed
// var nam = "shekhar"
// function x ()
// {
//     console.log("hii",this.nam)
// }
// const obj = {
//     nam: "raj",
//     y: ()=>
//     {
//         console.log("hi",this.nam)
//     }
// }
// obj.y()
// x()
// x.call(obj)
// x.apply(obj)
// let z = x.bind(obj)
// z()
// z()
//ES6 - Ecmascript defines the version and features updates for any scripting language.. Es6 released in 2015 */


//1. let,const
//2. Template literal like `${x}`
//3. arrow functions
//4. scoping
//5. classes
//6. objects
//7. modules
//8. rest,spread parameters
//9. destructuring
//10. sets,maps,date,symbols
//11.prototype inheritance
//12. strict mode
//13.BOM
//14. Libraries


//classes
class Employee
{
  //  teacher class with data and methods, create object nd call it
    empno;
    empname;
    salary;
    constructor()
    {
        this.empno = 12,
            this.empname = "raj",
            this.salary=55854
    }
   print(){console.log(`${this.empno}`+" with wmployee name"+`${this.empname}`+"earning"+`${this.salary}`)}
}
let em = new Employee();
em.print()
console.log(typeof Employee)
let obj2 = new Teacher("pooja", 45, 60000, "maths")
obj2.display()
console.log(incr(5))
console.log(run("JS"))
//Module system are used to transfer data,functions,classes from one file to another file
//we have requireJs,commonJs and other module systems like UTS and all