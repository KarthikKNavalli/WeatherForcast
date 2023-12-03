
let name=document.querySelector(".name");
let temperature=document.querySelector(".temperature");
let desc=document.querySelector(".desc");
// let subTemp=document.querySelector(".subTemperature");
let minTemp=document.querySelector(".min-temp");
let maxTemp=document.querySelector(".max-temp");
let windSpeed=document.querySelector(".windSpeed");









async function getWeatherData(city) {
    let api=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=198d590291075e1831de4227afc49e2e`

    let response =await fetch(api);

    let data =await response.json();

    weatherHandler(data) // dynamic pupose

    console.log(data); // static pupose we use 


}

getWeatherData("bijapur");

function searchQuery() {
    let cityName=document.getElementById("place").value;

    getWeatherData(cityName);
}


function weatherHandler(data) {
   //  const { name }= data; -- we will get directly so commented
    const { temp }=data.main;
    const { description }=data.weather[0];
    const { temp_min }=data.main;
    const { temp_max }=data.main; //  const { temp_min,temp_max  }=data.main;
    const { speed }=data.wind;

    name.innerHTML=data.name;
    temperature.innerHTML =temp + "&deg;C";
    desc.innerHTML=description;
    minTemp.innerHTML ="Min-Temp: "+temp_min+ "&deg;C";
    maxTemp.innerHTML="Max-Temp: "+temp_max+ "&deg;C";
    windSpeed.innerHTML="Windspeed: "+ speed;


}