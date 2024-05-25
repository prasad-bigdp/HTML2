class Teacher {
	name
	age
	salary
	subject
	constructor(a, b, c, d) {
		this.name = a
		this.age = b
		this.salary = c
		this.subject = d
	}
	display() {
		console.log(
			`${this.age}` +
				" " +
				`${this.name}` +
				" " +
				`${this.salary}` +
				" " +
				`${this.subject}`,
		)
	}
}

function incr (x)
{
    return ++x;
}
function fun (a)
{
    return a+" is fun"
}
export { incr, Teacher }
export default fun
