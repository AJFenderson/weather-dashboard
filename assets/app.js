// make my button work; nothing happens in js until my button is clicked//
$("#btn").on("click", function (e) {
    e.preventDefault();

    var todaysDate = $("#time").text(setTime);
    //grab a key from api weather
    var key = "71b2fba15d028a1cd9dcf3e77b5127d0";
    var userSearch = $("#userInput").val();
    console.log(userSearch);
    // var queryUrl= "https://api.openweathermap.org/data/2.5/forecast?q=Nashville&appid=" + key;
    // console.log(queryUrl);

    //create a function to run the time
    function setTime() {
        var time = moment().format('MMMM Do YYYY, h:mm:ss a');
        return time;

    }

    function weather() {
        var queryUrlWeather ="https://api.openweathermap.org/data/2.5/weather?q=" + userSearch + "&appid=" + key;
        
        $.ajax({
            url: queryUrlWeather,
            method: "GET"
        })

        .then(function (response) {
            console.log(response);

            $("#city").text(response.name);
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
for(var i=0; i < response.list.length; i++) {
    if(response.list[i].dt_txt.indexOf("00:00:00") !==1){
        var card= $("<div>")
        // card.setClass("card")
        var cardBody= $("<div>")
        // cardBody.setClass("card-body")
        // $("<p>" + response.list[i].main.temp + "</p>")
        // $(".wind").text("Wind Speed: " + response.wind.speed);
        $("<p>" + response.list[i]).appendTo(cardBody)

        card.append(cardBody);
        // $("#forecast").append(card);
    }
    
}
    $("#forecast").append(card);         

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