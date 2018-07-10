
$(document).ready(function(){
    init();

});

function init(){
    enabled();
    actorCarousel();
    randomMovie();


}

function enabled() {

    $("#searchBtn").on("click", function (event) {
        event.preventDefault();

        var searchText = $("#searchByName").val();

        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://api.themoviedb.org/3/search/person?include_adult=false&page=1&query=" + searchText + "&language=en-US&api_key=b2b33767c6b429003530678acd077911",
            "method": "GET",
            "dataType": "json",
            "headers": {},
            "data": "{}"
        };

        $.ajax(settings).done(function (response) {
            console.log(response);
            var results = response.results;
            for (var i = 0; i < results.length; i++) {
                $(".nameDiv").append('<span>' + response.results[i].name + '</span>');
                $(".nameDiv").append('<img src="http://image.tmdb.org/t/p/original' + response.results[i].profile_path + '"/>');
                $(".nameDiv").append('<hr class="my-4" id="firstLine">');
                $(".nameDiv").append('<span>' + "Known For:" + '</span>');
                $(".nameDiv").append('<img class="name" src="http://image.tmdb.org/t/p/original' + response.results[i].known_for[0].poster_path + '"/>');
                $(".nameDiv").append('<span>' + response.results[i].known_for[0].original_title + '</span>');
                $(".nameDiv").append('<ul><p>' + response.results[i].known_for[0].overview + '</ul></p>');
                $(".nameDiv").append('<ul>' + "Popularity: " + response.results[i].known_for[0].popularity + '</ul>');
                $(".nameDiv").append('<ul>' + "Release Date: " + response.results[i].known_for[0].release_date + '</ul>');
                $(".nameDiv").append('<ul>' + "Vote Average: " + response.results[i].known_for[0].vote_average + '</ul>');
                $(".nameDiv").append('<ul>' + "Number of Voters: " + response.results[i].known_for[0].vote_count + '</ul>');
                $(".nameDiv").append('<hr class="my-4">');
                $(".nameDiv").append('<img src="http://image.tmdb.org/t/p/original' + response.results[i].known_for[1].poster_path + '"/>');
                $(".nameDiv").append('<span>' + response.results[i].known_for[1].original_title + '</span>');
                $(".nameDiv").append('<ul><p>' + response.results[i].known_for[1].overview + '</ul></p>');
                $(".nameDiv").append('<ul>' + "Popularity: " + response.results[i].known_for[1].popularity + '</ul>');
                $(".nameDiv").append('<ul>' + "Release Date: " + response.results[i].known_for[1].release_date + '</ul>');
                $(".nameDiv").append('<ul>' + "Vote Average: " + response.results[i].known_for[1].vote_average + '</ul>');
                $(".nameDiv").append('<ul>' + "Number of Voters: " + response.results[i].known_for[1].vote_count + '</ul>');
                $(".nameDiv").append('<hr class="my-4">');
                $(".nameDiv").append('<img src="http://image.tmdb.org/t/p/original' + response.results[i].known_for[2].poster_path + '"/>');
                $(".nameDiv").append('<span>' + response.results[i].known_for[2].original_title + '</span>');
                $(".nameDiv").append('<ul><p>' + response.results[i].known_for[2].overview + '</ul></p>');
                $(".nameDiv").append('<ul>' + "Popularity: " + response.results[i].known_for[2].popularity + '</ul>');
                $(".nameDiv").append('<ul>' + "Release Date: " + response.results[i].known_for[2].release_date + '</ul>');
                $(".nameDiv").append('<ul>' + "Vote Average: " + response.results[i].known_for[2].vote_average + '</ul>');
                $(".nameDiv").append('<ul>' + "Number of Voters: " + response.results[i].known_for[2].vote_count + '</ul>');
                $(".nameDiv").append('<hr class="my-4" id="firstLine">');
            }

        });
        $("#searchByName").val("");
        $(".nameDiv").empty();
    });

    $("#randomMovieBtn").on("click", function (event) {
        event.preventDefault();


        var randomId = Math.floor(Math.random() * 99999) + 1;
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://api.themoviedb.org/3/movie/" + randomId + "?api_key=b2b33767c6b429003530678acd077911&amp;language=en-US",
            "method": "GET",
            "cache": "false",
            "headers": {},
            "data": "{}"

        };

        $.ajax(settings).done(function (response) {
            console.log(response);
                $(".movieContainer").append('<img id="movieImg" style="padding-top: 20px;" src="http://image.tmdb.org/t/p/original' + response.poster_path + '"/>').hide().fadeIn(2000);
                $(".movieContainer").append('<img id="backdrop" style="position: absolute; margin: 0 auto; display: block; width: 100%; height: auto; z-index: -1000; top: 0; opacity: .6; border-radius: 0; animation: none;" src="http://image.tmdb.org/t/p/original' + response.backdrop_path + '"/>');
                $(".movieContainer").append('<a href="https://www.imdb.com/title/' + response.imdb_id +'" target="_blank"><span style="margin: 10px 0 10px 0; font-size: 25px; position: relative; z-index: 5000; display: inline-block;" class="glyphicon glyphicon-info-sign"></span></a>');

        });
        $(".movieContainer").empty();
        $(".movieContainer").empty();
        $(".welcomeIntro").empty();
        $(".welcomeImg").remove();

    });
}


    function actorCarousel() {

        $('#recipeCarousel').carousel({
            interval: 1000,
        });

        $('.carousel .carousel-item').each(function () {
            var next = $(this).next();
            if (!next.length) {
                next = $(this).siblings(':first');
            }
            next.children(':first-child').clone().appendTo($(this));
            for (var i = 0; i < 2; i++) {
                next = next.next();
                if (!next.length) {
                    next = $(this).siblings(':first');
                }

                next.children(':first-child').clone().appendTo($(this));
            }
        });

    }

$("#homeBtn").click(function(event) {
    event.preventDefault(event);
    $(document).animate({
        scrollTop: $(".contentOne").offset().top
    }, 5000);
});