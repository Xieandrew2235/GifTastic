// An array of athletes, which will be used to generate buttons dynamically.

var peopleAthletic = ["lebron james", "ray lewis", "nolan arenado", "andrelton simmons", "kobe bryant", "buster posey"];
var queryURL = "https://api.giphy.com/v1/gifs/search?q=";
var apiKey = "44EuboGZ4VXC2srzqR4cEZnqI0FD61th";
var searchQty = 10;

// Function to create button elements and display them on the top of the page.
function buttonMaker() {
  $("#athletics-buttons").empty();
  for (i = 0; i < peopleAthletic.length; i++) {
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
    for (i = 1; i < searchQty; i++) {
      var newCard = $("<div class='card mt-4 mx-2 float-left'>")
      var newImage = $("<img class='card-img-top img-thumbnail'>");
      // Setting variables for the URLs for playing and paused GIFs
      var stillImage = response.data[i - 1].images.downsized_still.url;
      var motionImage = response.data[i - 1].images.downsized.url;

      // Setting "alt" to whatever is provided from GIPHY for the title
      $(newImage).attr("alt", response.data[i - 1].title);
      // Setting the default source for the paused image
      $(newImage).attr("src", stillImage);
      $(newImage.attr("img-still", stillImage));
      $(newImage.attr("img-motion", motionImage));
      $(newImage).attr("current-state", "img-still");

      var newCardBody = $("<div class='card-body'>");
      var newCardText = $("<p class='card-text'>");
      newCardText.html("Rating: " + response.data[i - 1].rating);

      newCardBody.append(newCardText);
      newCard.append(newImage).append(newCardBody);
      $("#athletes").append(newCard);
    }
  });
}

// Function to switch between pausing and playing a GIF. The reason I created a seperate function for this is because I felt that it would be less confusing with a specific function for pausing/playing the GIFs on the page
function pausePlay() {
  // If statement to play GIF
  if ($(this).attr("current-state") === "img-still") {
    $(this).attr("current-state", "img-motion");
    $(this).attr("src", $(this).attr("img-motion"));
    // Else statement to pause GIF
  } else {
    $(this).attr("current-state", "img-still");
    $(this).attr("src", $(this).attr("img-still"));
  }
};

// to-do list
// create function to generate cards when athlete from array is clicked and/or if user inputs new athlete. also add in AJAX calls with parameters listed above
// for loop + sources for still gifs and running gifs
// user-submitted names: create new variable
// GIFs kind of laggy... slow to pop up and dont run smoothly on click

// Event Listeners
$(document).on('click', '.legends-button', cardMaker); 
$(document).on('click', '.img-thumbnail', pausePlay);

pausePlay();
