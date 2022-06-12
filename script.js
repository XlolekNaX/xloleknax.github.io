var city = "Staszów";



function pobierzPogode() {

    $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=d2190656c906b7ce8636aec67c9275f4", function (data) {
        console.log(data);

        var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
        var temperatura = (Math.floor(data.main.temp)) - 273;
        var pogoda = data.weather[0].main;
        var wiatr = data.wind.speed;
        var wilgotnosc = data.main.humidity;
        var cisnienie = data.main.pressure;
        var minTemperatura = Math.floor(data.main.temp_min) - 273;
        var maxTemperatura = Math.floor(data.main.temp_max) - 273;


        if (pogoda == 'Clouds') {
            pogoda = "Zachmurzenie";
        }

        if (pogoda == 'Rain') {
            pogoda = "Deszcz";
        }

        if (pogoda == 'Clear') {
            pogoda = "Słonecznie, czyste niebo";
        }






        //*** Wyświetlanie

        document.querySelector('.lokalizacja').innerHTML += ("Lokalizacja: " + city + '<br>');
        document.querySelector('.lokalizacja').innerHTML += ("<input id=\"miasto\">");
        document.querySelector('.lokalizacja').innerHTML += ("<button id=\"zmien\" onclick='zmienLokalizacje()'>Zmień lokalizację</button>");



        $('.zdjecie').attr('src', icon);
        document.querySelector('.pogoda').innerHTML = (pogoda);

        document.querySelector('.temperatura').innerHTML = (temperatura + "&#x2103;");


        document.querySelector('.predkosc_wiatru').innerHTML = ("Prędkość wiatru: " + wiatr + "<sup>m</sup>/s");
        document.querySelector('.wilgotnosc').innerHTML = ("Wilgotność: " + wilgotnosc + " %");
        document.querySelector('.cisnienie').innerHTML = ("Ciśnienie: " + cisnienie + " hPa")


    });
}
pobierzPogode();





function zmienLokalizacje() {
    city = document.getElementById('miasto').value;
    document.querySelector('.lokalizacja').innerHTML = ("");
    pobierzPogode();
}