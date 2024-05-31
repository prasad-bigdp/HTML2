const mainDiv = document.getElementById('product-details')
const myparams = new URLSearchParams(window.location.search)
const id = myparams.get('pid')
console.log(id)
const fetchData = (id) =>
{
    fetch(`https://fakestoreapi.com/products/${id}`) 
        .then((res) => res.json())
        .then((data) => displayData(data))
        .catch((err) => console.log(err))    
}
fetchData(id)
const displayData = (data) =>
{
    const mydiv = document.createElement('div')
    mydiv.classList.add('product-detail')
    const imgdiv = document.createElement("div")
    const image = document.createElement('img')
    image.src = data.image
    image.alt = data.title
    imgdiv.appendChild(image)
    const detaildiv = document.createElement("div")
    const title = document.createElement('h3')
    title.textContent= data.title
    const price = document.createElement('p')
    price.textContent="$"+data.price
    const desc = document.createElement('p')
    desc.textContent=data.description
    const button = document.createElement('button')
    button.textContent = "add to cart"
    button.addEventListener('click', () =>
    {
        let x = localStorage.getItem('cart')
        x++;
        localStorage.setItem('cart', x)
        document.getElementById('count').textContent = x;
    })
    detaildiv.append(title, price, desc, button)
    mainDiv.append(imgdiv,detaildiv)
    
}
