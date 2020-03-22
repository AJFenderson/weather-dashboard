// make my button work; nothing happens in js until my button is clicked//
$("#btn").on("click", function (e) {
    e.preventDefault();

    var todaysDate = $("#time").text(setTime);
    //grab a key from api weather
    var key = "71b2fba15d028a1cd9dcf3e77b5127d0";
    var userSearch = $("#userInput").val();


    //create a function to run the time
    function setTime() {
        var time = moment().format('MMMM Do YYYY, h:mm:ss a');
        return time;

    }

    function weather() {
        var queryUrlWeather = "https://api.openweathermap.org/data/2.5/weather?q=" + userSearch + "&appid=" + key;



        $.ajax({
            url: queryUrlWeather,
            method: "GET"
        })

            .then(function (response) {
                console.log(response);
                var TempF = Math.floor((response.main.temp - 273.15) * 1.8 + 32)
                var obj = new Date(response.dt * 1000)
                var utcString = obj.toUTCString()
                var time = utcString.slice(0, 3)
                var lat = response.coord.lat
                var lon = response.coord.lon




                $("#city").text("City: " + response.name);
                $("#date").text("Date: " + moment().format('dddd'));
                $("#temp").text("Temp: " + TempF);
                $("#humidity").text("Humidity: " + response.main.humidity);
                $("#wind").text("Wind: " + response.wind.speed);
                $("#uv").text()

                var queryUrlUv = "http://api.openweathermap.org/data/2.5/uvi?appid=" + key + "&lat=" + lat + "&lon=" + lon



                $.ajax({
                    url: queryUrlUv,
                    method: "GET"
                })

                    .then(function (response) {
                        console.log(response);

                        $("#uv").text(response.value)

                    })




            })
    }
    weather();
    //create a function that will run the 5 day forecast
    function forecast() {
        var queryUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + userSearch + "&appid=" + key;
        // console.log(queryUrl);

        $.ajax({
            url: queryUrl,
            method: "GET"
        })

            .then(function (response) {
                console.log(response);
                for (var i = 0; i < response.list.length; i++) {
                    if (response.list[i].dt_txt.indexOf("00:00:00") !== -1) {
                        var card = $("<div>")
                        card.addClass("card")
                        var cardBody = $("<div>")
                        cardBody.addClass("card-body")
                        $("<p>").text(response.list[i].main.temp).appendTo(cardBody)
                        // $(".wind").text("Wind Speed: " + response.wind.speed);
                        

                        card.append(cardBody);
                        $("#forecast").append(card);
                    }

                }
                // $("#forecast").append(card);

            });

    }
    forecast()
    // create the local storage
    // create a function to keep the records of the city
    //create a function that will run the colors of the uv
    // create a function that will run the weather
    //create a function that will run the 5 day forecast
    // need 3 ajax calls
    // 1. 5 days of weather 2.for the uv 3. current date




































});