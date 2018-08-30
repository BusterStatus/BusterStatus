const apiKey = '5d576382955ff5829fc3844390db4427';
const baseAPIUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc`;
const baseTVUrl = `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&sort_by=popularity.desc`;
const posterBaseUrl = "https://image.tmdb.org/t/p/w500"

$(function () {
  // After the DOM has loaded, call afterGoClicked after any time the button is clicked
  $("#button").click(afterGoClicked);
  $("#media").change(afterGoClicked);
  $("#genre").change(afterGoClicked);
  $("#year").change(afterGoClicked);
  $("img").click(function () {
    $("#wrapper").show();
    $("#outer").show();
    $("#outer2").show();
  })
  $("#wrapper").click(function(){
    $("#outer").hide();
    $("#outer2").hide();
  })
})

function afterGoClicked() {
  // Read the selected genre id from the select boxes and save it to a variable
  // Hint: use the JQuery .val() function on the element
  // Documentation: http://api.jquery.com/val/
  var mediaType = $("select#media").val();

  var selectedGenreID = $( "select#genre" ).val();
  // Read the entered year from the text box and save it to a variable
  var enteredYear = $("input#year").val();
  // Call buildQueryString to handle building a completeUrl
  var completeUrl = buildQueryString(mediaType, selectedGenreID, enteredYear);
  // Load the JSON from the API with completeUrl, and then call the afterDataLoaded function
  $.getJSON(completeUrl, afterDataLoaded);
}



/* Combine the baseUrl, genre, and year together to create a complete url with the
  right query parameters. Then return the url.

  Check out examples query params at https://www.themoviedb.org/documentation/api/discover
*/
function buildQueryString(media, genre, year){
  if (media === "Movie") {
  return baseAPIUrl + "&with_genres=" + genre + "&primary_release_year=" + year
  }
  else {
  return baseTVUrl + "&with_genres=" + genre + "&first_air_date_year=" + year
  }
}

// Call this function with the data object that comes back from getJSON

var results;

function afterDataLoaded(dataObject){
  // All images have this base URL

  /* Loop over the results in the dataObject. 
    HINT: use your debugger to find the name
    of the property that includes the array of results. 
  */
  results = dataObject["results"];
  console.log(results);
  for (i = 0; i < 9; i++) {  
    $("img").eq([i]).attr("src", posterBaseUrl + results[i]["poster_path"]);
  }
  /* For each result:
    - Look up a corresponding img element (in order)
    - Set the img element's src tag to posterBaseUrl + the poster_path from the result movie
   */
}
// function afterPosterClicked0(event.target) {
//   target is attribute of html element
//   $("#outer").text("");
//   $("#outer2").text("");
//   var movieImg = $("img").id
//   for (i = 0; i < 9; i++) {
//     if (movieImg.charAt (8) === i) {
//     $("#outer").append("<h1>" + results[i]["title"] + "<br>" + "Released on " + "<br>" + results[i]["release_date"] + "</h1>");
//   $("#outer2").append(results[i]["overview"]);
//     }
//   }
// }


function afterPosterClicked0() {
  $("#outer").text("");
  $("#outer2").text("");
  if ($("select#media").val() === "Movie"){
  $("#outer").append("<h1>" + results[0]["title"] + "<br>" + "Released on " + "<br>" +  results[0]["release_date"] + "</h1>");
  $("#outer2").append(results[0]["overview"]);
  }
  else {$("#outer").append("<h1>" + results[0]["name"] + "<br>" + "First aired on " + "<br>" +  results[0]["first_air_date"] + "</h1>");
  $("#outer2").append(results[0]["overview"]);
}
}

  function afterPosterClicked1() {
    $("#outer").text("");
    $("#outer2").text("");
    if ($("select#media").val() === "Movie"){
    $("#outer").append("<h1>" + results[1]["title"] + "<br>" + "Released on " + "<br>" +  results[1]["release_date"] + "</h1>");
    $("#outer2").append(results[1]["overview"]);
    }
    else {$("#outer").append("<h1>" + results[1]["name"] + "<br>" + "First aired on " + "<br>" +  results[1]["first_air_date"] + "</h1>");
    $("#outer2").append(results[1]["overview"]);
  }
  }

  function afterPosterClicked2() {
    $("#outer").text("");
    $("#outer2").text("");
    if ($("select#media").val() === "Movie"){
    $("#outer").append("<h1>" + results[2]["title"] + "<br>" + "Released on " + "<br>" +  results[2]["release_date"] + "</h1>");
    $("#outer2").append(results[2]["overview"]);
    }
    else {$("#outer").append("<h1>" + results[2]["name"] + "<br>" + "First aired on " + "<br>" +  results[2]["first_air_date"] + "</h1>");
    $("#outer2").append(results[2]["overview"]);
  }
  }

  function afterPosterClicked3() {
    $("#outer").text("");
    $("#outer2").text("");
    if ($("select#media").val() === "Movie"){
    $("#outer").append("<h1>" + results[3]["title"] + "<br>" + "Released on " + "<br>" +  results[3]["release_date"] + "</h1>");
    $("#outer2").append(results[3]["overview"]);
    }
    else {$("#outer").append("<h1>" + results[3]["name"] + "<br>" + "First aired on " + "<br>" +  results[3]["first_air_date"] + "</h1>");
    $("#outer2").append(results[3]["overview"]);
  }
  }

  function afterPosterClicked4() {
    $("#outer").text("");
    $("#outer2").text("");
    if ($("select#media").val() === "Movie"){
    $("#outer").append("<h1>" + results[4]["title"] + "<br>" + "Released on " + "<br>" +  results[4]["release_date"] + "</h1>");
    $("#outer2").append(results[4]["overview"]);
    }
    else {$("#outer").append("<h1>" + results[4]["name"] + "<br>" + "First aired on " + "<br>" +  results[4]["first_air_date"] + "</h1>");
    $("#outer2").append(results[4]["overview"]);
  }
  }

  function afterPosterClicked5() {
    $("#outer").text("");
    $("#outer2").text("");
    if ($("select#media").val() === "Movie"){
    $("#outer").append("<h1>" + results[5]["title"] + "<br>" + "Released on " + "<br>" +  results[5]["release_date"] + "</h1>");
    $("#outer2").append(results[5]["overview"]);
    }
    else {$("#outer").append("<h1>" + results[5]["name"] + "<br>" + "First aired on " + "<br>" +  results[0]["first_air_date"] + "</h1>");
    $("#outer2").append(results[5]["overview"]);
  }
  }

  function afterPosterClicked6() {
    $("#outer").text("");
    $("#outer2").text("");
    if ($("select#media").val() === "Movie"){
    $("#outer").append("<h1>" + results[6]["title"] + "<br>" + "Released on " + "<br>" +  results[6]["release_date"] + "</h1>");
    $("#outer2").append(results[6]["overview"]);
    }
    else {$("#outer").append("<h1>" + results[6]["name"] + "<br>" + "First aired on " + "<br>" +  results[6]["first_air_date"] + "</h1>");
    $("#outer2").append(results[6]["overview"]);
  }
  }

  function afterPosterClicked7() {
    $("#outer").text("");
    $("#outer2").text("");
    if ($("select#media").val() === "Movie"){
    $("#outer").append("<h1>" + results[7]["title"] + "<br>" + "Released on " + "<br>" +  results[7]["release_date"] + "</h1>");
    $("#outer2").append(results[7]["overview"]);
    }
    else {$("#outer").append("<h1>" + results[7]["name"] + "<br>" + "First aired on " + "<br>" +  results[7]["first_air_date"] + "</h1>");
    $("#outer2").append(results[7]["overview"]);
  }
  }

  function afterPosterClicked8() {
    $("#outer").text("");
    $("#outer2").text("");
    if ($("select#media").val() === "Movie"){
    $("#outer").append("<h1>" + results[8]["title"] + "<br>" + "Released on " + "<br>" +  results[8]["release_date"] + "</h1>");
    $("#outer2").append(results[8]["overview"]);
    }
    else {$("#outer").append("<h1>" + results[8]["name"] + "<br>" + "First aired on " + "<br>" +  results[8]["first_air_date"] + "</h1>");
    $("#outer2").append(results[8]["overview"]);
  }
  }