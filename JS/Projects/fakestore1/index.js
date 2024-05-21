const mainDiv = document.getElementById('products')

function fetchData ()
{
    //every asynchronous fn returns promise. promise is an object which explain eventual completion of asynchronous operation
    fetch("https://api.sampleapis.com/movies/animation")
			.then(function (res) {
				console.log(res)
				return res.json()
			})
			.then(function (data) {
				console.log(data)
				displayData(data)
			})
			.catch(function (err) {
				console.log("my error is" + err)
			})
    // fetch returns a promise
    

}
fetchData();
function displayData (data)
{
    data.forEach(function (p)
    {
        const product = document.createElement('div')
        product.classList.add('product')
        const title = document.createElement('h2')
        title.textContent = p.title;
        const image = document.createElement('img');
        image.src = p.posterURL
        image.alt = p.title;
        product.append(image,title)
        mainDiv.appendChild(product)
})
}