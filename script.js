const inputBox = document.querySelector('input');
const searchButton = document.getElementById('search');
const cloudImage = document.querySelector('.cloudimg');
const temperature= document.querySelector('.temp');
const description=document.querySelector('.description');
const humidity=document.querySelector('.humidity');
const windspeed= document.querySelector('.windspeed');
const notfound=document.querySelector('.notfound')
const weatherbody=document.querySelector('.weatherbody')
async function checkWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0cf4bd496ffcaefc6d9d848a20d44ce8`;
    const weather_data = await fetch(url).then(response => response.json());
    if(weather_data.cod===`404`){
        notfound.style.display="flex";
        weatherbody.style.display="none";
        console.log('error');
        return;
    }
    notfound.style.display="none";
    weatherbody.style.display="inline-block"
    temperature.innerHTML=`${Math.round(weather_data.main.temp-273.15)}°c`
    description.innerHTML=`${weather_data.weather[0].description}`
    windspeed.innerHTML=`${weather_data.wind.speed}km/h`
    humidity.innerHTML=`${weather_data.main.humidity}%`

}

searchButton.addEventListener('click', (e) => {
    e.preventDefault();
    checkWeather(inputBox.value);
   
});
