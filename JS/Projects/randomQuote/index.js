const mainDiv = document.getElementById('random')
const btn= document.getElementById('btn')
const fetchData = async () =>
{
    const res = await fetch("https://api.quotable.io/random");
    const data = await res.json();
    displayData(data)
}
window.addEventListener('DOMContentLoaded', () =>
{
    setInterval(fetchData, 5000);
     
})
const displayData = (data) =>
{
    mainDiv.textContent = "";
    document.body.style.backgroundImage = "none";
   const randomColor = Math.round(Math.random() * 10000000).toString(16)

    const para = document.createElement('p');
    para.textContent = data.content;
    const author = document.createElement('h3');
    author.textContent = data.author;
    const href =
			"url('https://random-image-pepebigotes.vercel.app/api/random-image')"
		document.body.style.backgroundImage = href

    mainDiv.append(para, author)

}