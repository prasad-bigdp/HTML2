window.addEventListener('DOMContentLoaded', fetchData)
const productsDiv = document.getElementById('products')
const cartBtn = document.getElementById('cartButton')
cartBtn.addEventListener('click',checkout)
async function fetchData ()
{
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    console.log(data);
    displayData(data.products)
}
let cart = []
let count = 0;
function displayData (data)
{
    data.forEach((pro, index) =>
    {
        const prod = document.createElement('div');
        const productLink= document.createElement('a')
        productLink.href= `product.html?product=${encodeURIComponent(JSON.stringify(pro))}`
        prod.classList.add('product')
        const image = document.createElement('img');
        image.src=pro.thumbnail
        const title = document.createElement('h2')
        title.textContent = pro.title;
        const price = document.createElement('p');
        price.textContent="$"+pro.price
        const addButton = document.createElement('button')
        addButton.textContent = "Add to Cart";
        addButton.setAttribute('data-cart', JSON.stringify(pro))
        addButton.addEventListener('click', addCart)
        productLink.appendChild(title)
        prod.append(image,productLink,price,addButton)
        productsDiv.appendChild(prod)
    })
}
const countSpan=document.getElementById('count')
function addCart (e)
{
    const btn = e.target
    const data = JSON.parse(btn.getAttribute('data-cart'))
    cart.push(data)
    count++;
    countSpan.textContent = count
    console.log(cart)
}
function checkout ()
{
    localStorage.setItem('cart', JSON.stringify(cart));
    window.location.href="./checkout.html"
}
