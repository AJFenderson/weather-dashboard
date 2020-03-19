// make my button work
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
        var queryUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + userSearch + "&appid=" + key;
        console.log(queryUrl);

        $.ajax({
            url: queryUrl,
            method: "GET"
        })

            .then(function (response) {

            });
    }
    weather()
    // create the local storage
    // create a function to keep the records of the city
    //create a function that will run the colors of the uv
    // create a function that will run the weather
    //create a function that will run the 5 day forecast
    // need 3 ajax calls
    // 1. 5 days of weather 2.for the uv 3. current date




































});