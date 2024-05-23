const mainDiv = document.getElementById('main')
const fetchData =()=>
{
    //promise chaining==> modern way called async await
    fetch("https://randomuser.me/api")
        // .then(function(res){return res.json()})
        .then((res) => res.json())
        .then((data) => displayData(data.results[0]))
    .catch((err)=>console.log(err))
}
// const fetchData2 = async () =>
// {
//     const res = await fetch("https://randomuser.me/api")
//     const data = await res.json()
//     displayData(data.results[0])
// }
document.getElementById("btn").addEventListener("click", fetchData)

const displayData=(data)=>
{
    mainDiv.textContent=""
    const image = document.createElement('img')
    image.src = data.picture.large
    image.alt = data.name.first
    const title = document.createElement('h2');
    title.textContent = data.name.title + " " + data.name.first + " " + data.name.last
    const age = document.createElement('p')
    age.textContent = data.dob.age;
    mainDiv.append(image,title,age)
}