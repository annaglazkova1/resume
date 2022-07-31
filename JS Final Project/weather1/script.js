const api = {
    endpoint: "https://api.openweathermap.org/data/2.5/",
    key: "dfbef6abfa15d4e40a35ab5ec6c1b553"
}

const input = document.querySelector('.input');

input.addEventListener('keydown', enter);

function enter(e) {
    if (e.keyCode === 13) {
        getInfo(input.value);
    }
}

async function getInfo (data) {
    const res = await fetch(`${api.endpoint}weather?q=${data}&units=metric&appID=${api.key}`)
    const result = await res.json();
    console.log(result);

    displayResult(result);

}

function displayResult(result) {
    let city = document.querySelector('.city');
    city.textContent = `${result.name}, ${result.sys.country}`


    getOurDate();

    let temperature = document.querySelector('.temperature');
    temperature.innerHTML = `${Math.round(result.main.temp)}<span>°</span>`

    let feelsLike = document.querySelector('.feelsLike');
    feelsLike.innerHTML = "Feels like: " + `${Math.round(result.main.feels_like)}<span>°</span>`

    let conditions = document.querySelector('.conditions');
    conditions.textContent = `${result.weather[0].main}`;

    let variation = document.querySelector('.variation');
    variation.innerHTML = "Min: " + `${Math.round(result.main.temp_min)}<span>°</span>` + " " + "Max: " + `${Math.round(result.main.temp_max)}<span>°</span>`

}

function getOurDate() {
    //today's date

    const myDate = new Date()
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    
    //day
    let day = days[myDate.getDay()];

    console.log(day)

    // date
    
    let todayDate = myDate.getDate()
    console.log(todayDate)

    //month
    let month = months[myDate.getMonth()]
    console.log(month)
    //year

    let year = myDate.getFullYear();
    console.log(year)

    const date = document.querySelector('.date')
    // date.textContent = day + " " + todayDate + " " + month + " " + year;

    date.textContent = `${day}` + " " + `${todayDate}` + " " + `${month}` + " " + `${year}`
} 

