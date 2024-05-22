const inputText = document.getElementById('inp');
const searchBtn = document.getElementById('search');
const mainDiv = document.getElementById('output')
// searchBtn.addEventListener('click', fetchData);
inputText.addEventListener('input',fetchData)
function fetchData ()
{
    const name = inputText.value
    fetch(`https://www.omdbapi.com/?s=${name}&apikey=2d119131`)
        .then(function (res) { console.log(res); return res.json() })
        .then(function (data) { console.log(data); displayData(data.Search) })
        .catch(function (err) { console.log(err) });
    
    
}
function displayData (data)
{
    mainDiv.textContent = "";
    data.forEach(function (m)
    {
        const moviediv = document.createElement('div');
        moviediv.classList.add('movie')
        const link = document.createElement('a');
        link.href = `https://www.imdb.com/title/${m.imdbID}`
        link.target="_blank"
        const image = document.createElement('img');
        image.src = m.Poster;
        image.alt=m.Title
        const title = document.createElement('h3')
        title.textContent = m.Title;
        link.append(image, title)
        moviediv.appendChild(link)
        mainDiv.appendChild(moviediv)
    })
}