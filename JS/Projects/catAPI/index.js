const mainDiv = document.getElementById('image')
function fetchData ()
{
    fetch("https://api.thecatapi.com/v1/images/search")
        .then(function (res)
        {
            console.log(res)
        return res.json()
        })
        .then(function (data)
        {
            console.log(data)
        displayData(data[0])
        })
        .catch(function (err)
        {
        console.log("errpr"+ err)
    })
}
function displayData (data)
{
    mainDiv.textContent=""
    const img = document.createElement('img');
    img.src = data.url;
    img.alt = "Cat-image"
    img.style.height = "300px";
    img.style.width = "300px";
    mainDiv.appendChild(img)
}
document.getElementById('btn').addEventListener('click',fetchData)