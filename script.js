// api.openweathermap.org/data/2.5/forecast?q=kolkata&units=metric&appid=31750d1f7142a5d228ae765103bad436

const url = "https://api.openweathermap.org/data/2.5/forecast?units=metric&q=";
const appid = "31750d1f7142a5d228ae765103bad436"

// Date to day converter
function day(date) {
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var d = new Date(date);
    var dayName = days[d.getDay()];

    return dayName;
}



async function checkWeather(city) {
    const apiUrl = url + city + `&appid=${appid}`;
    const response = await fetch(apiUrl);
    let data = await response.json();

    console.log(data);
    // Weather current data
    let current = data.list[0];

    let weather = current.weather[0].main;
    let description = current.weather[0].description;
    let temp = Math.round(current.main.temp);
    let pressure = current.main.pressure;
    let humidity = current.main.humidity;
    let name = data.city.name;

    document.getElementById("wrapper-description").innerHTML = description;
    document.getElementById("wrapper-name").innerHTML = name;
    document.getElementById("wrapper-temp").innerHTML = temp + "℃";
    document.getElementById("wrapper-pressure").innerHTML = pressure;
    document.getElementById("wrapper-humidity").innerHTML = humidity;


    // Weather hourly data
    let hourNow = temp;
    let hour1 = Math.round(data.list[1].main.temp);
    let hour2 = Math.round(data.list[2].main.temp);
    let hour3 = Math.round(data.list[3].main.temp);
    let hour4 = Math.round(data.list[4].main.temp);
    let hour5 = Math.round(data.list[5].main.temp);

    let time1 = data.list[1].dt_txt.substr(11, 2);
    let time2 = data.list[2].dt_txt.substr(11, 2);
    let time3 = data.list[3].dt_txt.substr(11, 2);
    let time4 = data.list[4].dt_txt.substr(11, 2);
    let time5 = data.list[5].dt_txt.substr(11, 2);


   
    document.getElementById("wrapper-time1").innerHTML = time1;
    document.getElementById("wrapper-time2").innerHTML = time2;  
    document.getElementById("wrapper-time3").innerHTML = time3;
    document.getElementById("wrapper-time4").innerHTML = time4;
    document.getElementById("wrapper-time5").innerHTML = time5;

    document.getElementById("wrapper-hour-now").innerHTML = hourNow + "℃";
    document.getElementById("wrapper-hour1").innerHTML = hour1 + "℃";
    document.getElementById("wrapper-hour2").innerHTML = hour2 + "℃";
    document.getElementById("wrapper-hour3").innerHTML = hour3 + "℃";
    document.getElementById("wrapper-hour4").innerHTML = hour4 + "℃";
    document.getElementById("wrapper-hour5").innerHTML = hour5 + "℃";

        
    
    // weather daily data
    let tomorrowTemp = Math.round(data.list[8].main.temp);
    let tomorrowWeather = data.list[8].weather[0].main;
    let tomorrowDay = day(data.list[8].dt_txt)


    let dATTemp = Math.round(data.list[16].main.temp);
    let dATWeather = data.list[16].weather[0].main;
    let dATDay = day(data.list[16].dt_txt)

    document.getElementById("wrapper-forcast-temp-today").innerHTML = temp + "℃";
    document.getElementById("wrapper-forcast-temp-tomorrow").innerHTML = tomorrowTemp + "℃";
    document.getElementById("wrapper-forcast-temp-dAT").innerHTML = dATTemp + "℃";

    document.getElementById("wrapper-tomorrow-name").innerHTML = tomorrowDay;
    document.getElementById("wrapper-dAT-name").innerHTML = dATDay;


    // Icons
    let iconsBaseUrl = "http://openweathermap.org/img/wn/";
    let iconFormat = ".png";

    
    // Today
    let iconCodeToday = data.list[0].weather[0].icon;
    let iconFullyUrlToday = iconsBaseUrl + iconCodeToday + iconFormat;
    document.getElementById("wrapper-icon-today").src = iconFullyUrlToday;

    // Tomorrow
    let iconCodeTomorrow = data.list[8].weather[0].icon;
    let iconFullyUrlTomorrow = iconsBaseUrl + iconCodeTomorrow + iconFormat;
    document.getElementById("wrapper-icon-tomorrow").src = iconFullyUrlTomorrow;

    // Day after tomorrow
    let iconCodeDAT = data.list[16].weather[0].icon;
    let iconFullyUrlDAT = iconsBaseUrl + iconCodeDAT + iconFormat;
    document.getElementById("wrapper-icon-dAT").src = iconFullyUrlDAT;


    // Hourly
    let iconCodeNow = data.list[0].weather[0].icon;
    let iconFullyUrlNow = iconsBaseUrl + iconCodeNow + iconFormat;
    document.getElementById("wrapper-icon-hour-now").src = iconFullyUrlNow;

    let iconCode1 = data.list[1].weather[0].icon;
    let iconFullyUrl1 = iconsBaseUrl + iconCode1 + iconFormat;
    document.getElementById("wrapper-icon-hour1").src = iconFullyUrl1;

    let iconCode2 = data.list[2].weather[0].icon;
    let iconFullyUrl2 = iconsBaseUrl + iconCode2 + iconFormat;
    document.getElementById("wrapper-icon-hour2").src = iconFullyUrl2;

    let iconCode3 = data.list[3].weather[0].icon;
    let iconFullyUrl3 = iconsBaseUrl + iconCode3 + iconFormat;
    document.getElementById("wrapper-icon-hour3").src = iconFullyUrl3;
    
    let iconCode4 = data.list[4].weather[0].icon;
    let iconFullyUrl4 = iconsBaseUrl + iconCode4 + iconFormat;
    document.getElementById("wrapper-icon-hour4").src = iconFullyUrl4;

    let iconCode5 = data.list[5].weather[0].icon;
    let iconFullyUrl5 = iconsBaseUrl + iconCode5 + iconFormat;
    document.getElementById("wrapper-icon-hour5").src = iconFullyUrl5;

    
    
    // backgrounds
    switch(weather.toLowerCase()){
        case "snow":
            document.getElementById("wrapper-bg").style.backgroundImage = "url('https://mdbgo.io/ascensus/mdb-advanced/img/snow.gif')";
            break;
        case "clouds":
            document.getElementById("wrapper-bg").style.backgroundImage = "url('https://mdbgo.io/ascensus/mdb-advanced/img/clouds.gif')";
            break;
        case "fog":
            document.getElementById("wrapper-bg").style.backgroundImage = "url('https://mdbgo.io/ascensus/mdb-advanced/img/fog.gif')";
            break;
        case "rain":
            document.getElementById("wrapper-bg").style.backgroundImage = "url('https://mdbgo.io/ascensus/mdb-advanced/img/rain.gif')";
            break;
        case "thunderstorm":
            document.getElementById("wrapper-bg").style.backgroundImage = "url('https://mdbgo.io/ascensus/mdb-advanced/img/thunderstorm.gif')";
            break;
        default:
            document.getElementById("wrapper-bg").style.backgroundImage = "url('https://mdbgo.io/ascensus/mdb-advanced/img/clear.gif')";
            break;  
    }

    
}




// Search city
const searchbox = document.getElementById("search-box");
const searchBtn = document.getElementById("submit");

// Default call
checkWeather("Kolkata");

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchbox.value);
})





  