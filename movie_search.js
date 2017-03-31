// code adapted from Zoe Fraade-Blanar's "Let's wrap it up:
// Html, Css, javascript, Jquery, and API's" http://www.binaryspark.com/classes/APIs_rock/jquery-api-class.html

function findAMovie() {

    var apiUrl = "http://www.omdbapi.com/?s=";
    var searchTitle = $("#movieToSearchFor").val();

    // encodeURI function changes characters/spaces in a title so that they can be read in a URL.
    $.ajax({
        url: apiUrl + encodeURI(searchTitle),
        dataType: "jsonp",
        success: successfulCallback,
    });

    function successfulCallback(data) {

        // convert the response data into readable string form
        console.log(JSON.stringify(data));

        if (data.Response != "False") {

            $("#searchResults").append('<br><br></h1>Here are your search results:<br><br>');

            var movies = data.Search;

            $.each(movies, function(index, movie) {

                $("#searchResults").append('<h3>' + movie.Title + ' ' + ' (released in ' + movie.Year + ')</h3><br>');

            });

        } else {

            $("#searchResults").append('<br><br>Sorry, no results were found.');
        }

    }

}
