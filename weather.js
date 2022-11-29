function search(){

    cord=cordinates.value

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cord}&appid=5b4bee0ba241d092159faf007e166080`).then(d => d.json()).then(res => displayData(res))

}



function displayData(weatherDetails){

    city_name=weatherDetails.name
    temp=weatherDetails.main.temp
    weather_type=weatherDetails.weather[0].description
    main=weatherDetails.weather[0].main
    humidity=weatherDetails.main.humidity
    wind_speed=weatherDetails.wind.speed
    sun_rise=weatherDetails.sys.sunrise
    sun_set=weatherDetails.sys.sunset
   
   
    htmlData=` 
    city name : ${city_name} <br>
    temperature : ${temp} <br>
    weather type : ${weather_type} <br>
    main : ${main} <br>
    humidity : ${humidity} <br>
    wind speed : ${wind_speed} <br>
    sun rise : ${sun_rise} <br>
    sun set : ${sun_set} <br>
    `



    result.innerHTML += htmlData
}