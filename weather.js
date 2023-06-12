let cityData=[{name:"",lat:"",lon:""},
    {name:"基隆市", lat:25.12825, lon:121.7419},
    {name:"台北市", lat:25.04776, lon:121.53185},
    {name:"新北市", lat:25.01357, lon:121.67396},
    {name:"桃園市", lat:24.99368, lon:121.29696},
    {name:"新竹市", lat:24.80395, lon:120.96468},
    {name:"新竹縣", lat:24.839233, lon:121.002012},
    {name:"苗栗縣", lat:24.560159, lon:120.814817},
    {name:"台中市", lat:24.1469, lon:120.6839},
    {name:"彰化縣", lat:24.068619, lon:120.541519},
    {name:"南投縣", lat:23.960998, lon:120.971863},
    {name:"雲林縣", lat:23.699980, lon:120.449111},
    {name:"嘉義市", lat:23.480075, lon:120.449111},
    {name:"嘉義縣", lat:23.451842, lon:120.255461},
    {name:"台南市", lat:22.990819, lon:120.204108},
    {name:"高雄市", lat:22.627278, lon:120.301435},
    {name:"屏東縣", lat:22.551976, lon:120.548759},
    {name:"台東縣", lat:22.754731, lon:121.113598},
    {name:"花蓮縣", lat:23.995058, lon:121.633015},
    {name:"宜蘭縣", lat:24.702107, lon:121.737751},
    {name:"澎湖縣", lat:23.569733, lon:119.566158},
    {name:"金門縣", lat:24.432133, lon:118.317084},
    {name:"連江縣", lat:26.160481, lon:119.949875}];

$(function(){
    for(let x=0;x<cityData.length;x++)
    {
        $("#citySelect").append(`<option value='${x}'>${cityData[x].name}</option>`);
    }
    $("#citySelect").on("change",loadServerData);
});

function loadServerData(){
    $("#result").empty();
    if(this.value==0) return;
    let weatherAPI_URL="https://api.openweathermap.org/data/2.5/weather?";
    let weatherMapAPIKey="0521d6cdb42e4cab0f833037fec4ed25";
    $.getJSON(weatherAPI_URL,{
        lat:cityData[this.value].lat,
        lon:cityData[this.value].lon,
        appid:weatherMapAPIKey,
        units:'metric',
        lang:'zh_tw'
    })
    .done(function(data) {
        $("#result").append(`<p>氣溫: ${data.main.temp_min}~ ${data.main.temp_max}</p>`);
        $("#result").append(`<p><img src='https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png'>${data.weather[0].description}</p>`);
        })
        .fail(function(){ console.log("Error");})
        .always(function(){ console.log("Always");
        });
    }
