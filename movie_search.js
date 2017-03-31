function findAMovie() {

    var baseUrl = "http://www.omdbapi.com/?s=";
    var searchQuery = $("#movieToSearchFor").val();

    // send off the query.
    $.ajax({
        url: baseUrl + encodeURI(searchQuery),
        dataType: "jsonp",
        success: successfulCallback,
    });

    // callback for when we get back the results
    function successfulCallback(data) {

        // convert the returned data into readable string form
        console.log(JSON.stringify(data));

        if (data.Response != "False") {

            $("#searchResults").append('<br><br></h1>Here are your search results:<br><br>');

            var movies = data.Search;

            $.each(movies, function(index, movie) {
                $("#searchResults").append('<h3>' + movie.Title + ' ' + ' (released in ' + movie.Year + ')</h3><br>');

            });

            // If there aren't any results
        } else {

            $("#searchResults").append('<br><br>Sorry, no results were found.');
        }

    }

}
