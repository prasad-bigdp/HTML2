const api_key = "9e51ce689208b36d90f8e425de2e268f"
const city = document.getElementById('inp');
const mainDiv= document.getElementById('main')
document.getElementById('btn').addEventListener('click', fetchData)
function fetchData ()
{
    console.log(city.value)
    fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${city.value},IN&APPID=9e51ce689208b36d90f8e425de2e268f`,
		)
			.then(function (res) {
				return res.json()
            })
        .then(function (data)
        {
            console.log(data);
            displayData(data)
        })
			.catch(function (err) {
				console.log(err)
			})
}
function displayData (data)
{
    mainDiv.textContent=""
    const temp = document.createElement('p');
    temp.textContent = "Temparature " + data.main.temp;
    const humidity = document.createElement('p');
    humidity.textContent = "Humidity: " + data.main.humidity;
    mainDiv.append(temp,humidity)
}