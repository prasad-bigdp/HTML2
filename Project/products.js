const mainDiv = document.getElementById("products")
let pros = []
const fetchData = async () => {
	const res = await fetch("https://fakestoreapi.com/products")
	const data = await res.json()
	pros = data
	displayData(data)
}
fetchData()
let count2 = 0
function displayData(data) {
	mainDiv.textContent = ""
	data.forEach((val) => {
		const myDiv = document.createElement("div")
		myDiv.classList.add("item")
		const img = document.createElement("img")
		img.src = val.image
		img.alt = val.title
		const h3 = document.createElement("h3")
		h3.textContent = val.title
		const link = document.createElement("a")
		link.href = `./Product.html?pid=${val.id}`
		link.target = "_blank"
		link.style.color = "black"
		link.appendChild(h3)
		const p = document.createElement("p")
		p.textContent = "Price: $" + val.price
		const btn = document.createElement("button")
		btn.textContent = "Add to cart"
		btn.classList.add("addtocart")
		btn.addEventListener("click", () => {
			let x = localStorage.getItem("cart")??0
			x++
			localStorage.setItem("cart", x)
			document.getElementById("count").textContent = x
		})

		myDiv.append(img, link, p, btn)
		mainDiv.appendChild(myDiv)
	})
}
document.getElementById("filter").addEventListener("change", function (e) {
	const newArr = pros.filter((i) => i.category == e.target.value)
	displayData(newArr)
})
