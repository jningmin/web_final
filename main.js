var cities = ["台北市", "桃園市", "台中市", "台南市", "宜蘭縣"];

var areaData = {
    "台北市": [
        {name: "爛醉咖啡DRUNK CAFE", image: "taipei_1.jpg", description: "地址：台北市大安區光復南路116巷9號"},
        {name: "野人花園 SAVAGE GARDEN", image: "taipei_2.jpg", description: "地址：台北市士林區菁山路131巷13-1號"},
        {name: "Les Africot", image: "taipei_3.jpg", description: "地址：台北市大安區永康街61巷15號。"}
    ],
    "桃園市": [
        {name: "Overthere", image: "ty1.jpg", description: "地址：桃園市桃園區水岸7街。"},
        {name: "ICE HONEY", image: "ty2.jpg", description: "地址：桃園市桃園區慈祥街5號"},
        {name: "古山星辰景觀咖啡廳", image: "ty3.jpg", description: "地址：桃園市蘆竹區小古山路15號"}
    ],
    "台中市": [
        {name: "THAI.J泰式料理", image: "tc1.jpg", description: "地址：台中市南屯區大墩路533號"},
        {name: "I'M TALATO我是塔拉朵", image: "tc2.jpg", description: "地址：台中市西區英才路451號"},
        {name: "札卡燒肉", image: "tc3.jpg", description: "地址：台中市北區漢口路四段387號。"}
    ],
    "台南市": [
        {name: "花樓FOLLOW COFFEE", image: "tn1.jpg", description: "地址：臺南市中西區民權路二段118號。"},
        {name: "尋路。甜", image: "tn2.png", description: "地址：台南市北區東豐路89號。"},
        {name: "StableNice BLDG.", image: "tn3.png", description: "地址：台南市中西區南寧街83巷9號"}
    ],
    "宜蘭縣": [
        {name: "宜蘭光宅", image: "yl1.jpg", description: "地址：宜蘭縣員山鄉溪洲路140巷32號。"},
        {name: "黑RURU CAFE", image: "yl2.jpg", description: "地址：宜蘭縣五結鄉大眾六路365號。"}
    ]
    
};

document.getElementById('randomize').addEventListener('click', function() {
    var cities = Object.keys(areaData);
    var randomCity = cities[Math.floor(Math.random() * cities.length)];
    document.getElementById('city').innerText = randomCity;
    document.getElementById('randomizeArea').style.display = "block";
    document.getElementById('areaImage').style.display = "none";
    document.getElementById('areaDescription').innerText = "";
});

document.getElementById('randomizeArea').addEventListener('click', function() {
    var selectedCity = document.getElementById('city').innerText;
    var areas = areaData[selectedCity];
    var randomArea = areas[Math.floor(Math.random() * areas.length)];
    document.getElementById('area').innerText = randomArea.name;
    document.getElementById('areaImage').src = randomArea.image;
    document.getElementById('areaImage').style.display = "block";
    document.getElementById('areaDescription').innerText = randomArea.description;
});
