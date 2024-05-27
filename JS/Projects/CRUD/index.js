const inputName = document.getElementById("name")
const inputPassword = document.getElementById("password")
const inputEmail = document.getElementById("email")
const passwordToggleButton = document.getElementById("pwdtogggle")
const submitBtn = document.getElementById("submitBtn")
const form = document.getElementById("form")
const mainDiv = document.getElementById("data")
const users = []
let isUpdate = false
let isApi = false;
let Updateobj={}
let fakeData = []
const fetchData = () =>
{
    axios.get('https://dummyjson.com/products')
        .then((data) =>
        {
            fakeData = data.data.products;
            isApi = true;
            displayData(fakeData)
    })
}
    fetchData()
const addData = (e) =>
{
    e.preventDefault()
    if (isUpdate)
    {
        let newObj = {
					id: Updateobj.id,
					name: inputName.value,
					email: inputEmail.value,
					password: inputPassword.value,
        }
        const uin = users.findIndex((o) => o.id == Updateobj.id)
        users.splice(uin, 1,newObj)
    }
    else
    {
     const newUser = {
				id: Math.round(Math.random() * 1000000),
				name: inputName.value,
				email: inputEmail.value,
				password: inputPassword.value,
			}
			users.push(newUser)   
    }
    inputName.value = ""; inputEmail.value = "";inputPassword.value=""
    displayData(users)
 }
form.addEventListener('submit',addData)
const deleteData = (id) =>
{
    if (isApi)
    {
        console.log(id)
        
				axios.delete(`https://dummyjson.com/products/${id}`)
                .then((res)=>alert("successfully deleted"))
    }
    else
    {
         console.log(id)
					const din = users.findIndex((obj) => obj.id == id)
					users.splice(din, 1)
					displayData(users)
    }
   
}
const updateData = (id) =>
{
    console.log(id);
    Updateobj = users.find((obj) => obj.id == id)
    inputName.value = Updateobj.name;
    inputEmail.value = Updateobj.email;
    inputPassword.value = Updateobj.password;
    isUpdate = true;
}
const displayData = (data) =>
{
            mainDiv.textContent = ""
    data.forEach((val) =>
    {
		const div = document.createElement("div")
		div.classList.add("item")
		const name = document.createElement("p")
		name.textContent = val.name ?? val.title
		const email = document.createElement("p")
		email.textContent = val.email ?? val.brand
		const password = document.createElement("p")
		password.textContent = val.password ?? val.category
		const updateButton = document.createElement("button")
		updateButton.textContent = "✏️"
		updateButton.addEventListener("click", () => updateData(val.id))
		const deleteButton = document.createElement("button")
		deleteButton.textContent = "🗑️"
		deleteButton.addEventListener("click", () => deleteData(val.id))
		const divButtons = document.createElement("div")
		divButtons.append(updateButton, deleteButton)

		div.append(name, email, password, divButtons)
		mainDiv.appendChild(div) 
	})
}
