// An array of athletes, which will be used to generate buttons dynamically.

var peopleAthletic = ["lebron james", "ray lewis", "nolan arenado", "andrelton simmons", "kobe bryant", "buster posey"];
var queryURL = "https://api.giphy.com/v1/gifs/search?q=";
var apiKey = "44EuboGZ4VXC2srzqR4cEZnqI0FD61th";
var searchQty = 10;

// Function to create button elements and display them on the top of the page.
function buttonMaker() {
  $("#athletics-buttons").empty();
  for (i = 0; i <  peopleAthletic.length; i++) {
    var emptyButton = $("<button>");
    $(emptyButton).addClass("btn btn-primary m-1 legends-button");
    $(emptyButton).attr("id", peopleAthletic[i]);
    $(emptyButton).html(peopleAthletic[i]);
    $("#athletics-buttons").append(emptyButton);
  }
};
buttonMaker();

function cardMaker() {
    // Clears out previously generated elements with an empty string, (something Jerome mentioned in class)?
    $("#athletes").empty();
      // AJAX call based on parameters set above
      $.ajax({
          url: queryURL + $(this).attr("id") + "&api_key=" + apiKey + "&limit=" + searchQty,
          method: "GET"
        }).then(function (response) {
          for (i= 1; i < searchQty; i++){ 

// to-do list
// create function to generate cards when athlete from array is clicked and/or if user inputs new athlete. also add in AJAX calls with parameters listed above
// for loop + sources for still gifs and running gifs
// user-submitted names: create new variable
// event listeners


