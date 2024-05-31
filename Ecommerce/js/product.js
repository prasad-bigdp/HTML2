const params = new URLSearchParams(window.location.search)
const product = params.get('product')
const productDetails = JSON.parse(decodeURIComponent(product))
console.log(productDetails)
const proImage=document.getElementById('img')
const proImages = document.getElementById('imgs')
const proInfo = document.getElementById("prod-info")
const title = document.createElement('h2');
title.textContent = productDetails.title;
const desc = document.createElement('p')
desc.textContent = productDetails.description;
const price = document.createElement('p')
price.textContent = "$" + productDetails.price
const button = document.createElement('button')
button.textContent = "Add to cart"
const image = document.createElement('img')
image.src = productDetails.thumbnail;
proImage.appendChild(image)
proInfo.append(title, desc, price, button)
productDetails.images.forEach((i,index) =>
{
    const small_image = document.createElement('img')
    small_image.src=i
    const btn = document.createElement('button')
    btn.classList.add('prod-small-image')
    btn.addEventListener('click', function ()
    {
       image.src= productDetails.images[index]
    })
    btn.appendChild(small_image)
    proImages.appendChild(btn)
})