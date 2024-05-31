const eleMain = document.getElementById("ele-ele")
const jewMain = document.getElementById("ele-jewellery")
const menMain = document.getElementById("ele-men")
const womenMain = document.getElementById("ele-women")

const fetchData = (mainDiv, category) => {
	mainDiv.textContent = ""
	fetch(`https://fakestoreapi.com/products/category/${category}`)
		.then((res) => res.json())
		.then((data) => {
			console.log(data)
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
					let x = localStorage.getItem("cart") ?? 0
					x++
					localStorage.setItem("cart", x)
					document.getElementById("count").textContent = x
				})
				myDiv.append(img, link, p, btn)
				mainDiv.appendChild(myDiv)
			})
		})
		.catch((err) => console.log(err))
}
fetchData(eleMain, "electronics")
fetchData(jewMain, "jewelery")
fetchData(menMain, "men's clothing")
fetchData(womenMain, "women's clothing")
