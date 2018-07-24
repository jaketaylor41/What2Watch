
$(document).ready(function(){
    init();

});

function init(){
    enabled();


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
                $(".nameDiv").append('<img src="http://image.tmdb.org/t/p/original' + response.results[i].profile_path + '"/>');
                $(".nameDiv").append('<span>' + response.results[i].name + '</span>');
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
            "url": "https://api.themoviedb.org/3/movie/" + randomId + "?api_key=b2b33767c6b429003530678acd077911&amp;language=en-US&amp;include_adult=false&amp;append_to_response=images&amp;include_image_language=en,null",
            "method": "GET",
            "cache": "false",
            "headers": {},
            "data": "{}",
            "error": function (jqXHR, textStatus){
                if (jqXHR.status === 404) {



                    var imgArray = new Array();
                    imgArray[0] = "images/batman.jpg";
                    imgArray[1] = "images/godfather.jpg";
                    imgArray[2] = "images/shawshank.jpg";
                    imgArray[3] = "images/avengers.jpg";
                    imgArray[4] = "images/pulp.jpg";
                    imgArray[5] = "images/goodfellas.jpg";
                    imgArray[6] = "images/inception.jpg";
                    imgArray[7] = "images/forrestgump.jpg";
                    imgArray[8] = "images/matrix.jpg";
                    imgArray[9] = "images/fightClub.jpg";
                    imgArray[10] = "images/theGood.jpg";
                    imgArray[12] = "images/city.jpg";
                    imgArray[13] = "images/departed.jpg";
                    imgArray[14] = "images/greenMile.jpg";
                    imgArray[15] = "images/psycho.jpg";
                    imgArray[16] = "images/spirited.jpg";
                    imgArray[17] = "images/twelveAngryMen.jpg";
                    imgArray[18] = "images/interstellar.jpg";
                    imgArray[19] = "images/schindler.jpg";
                    imgArray[20] = "images/back2Future.jpg";

                    var rnd = Math.floor(Math.random() * imgArray.length);
                    if (rnd == 0) {
                        rnd = 1;
                    }

                    $(".randomMovieContainer").append('<img id="movieImg" style="padding-top: 20px; height: 500px;" src="' + imgArray[rnd] + '"/>').hide().fadeIn(2000);
                    $(".randomMovieContainer").append('<a href="https://www.imdb.com" target="_blank"><span style="margin: 10px 0 10px 0; font-size: 25px; position: relative; z-index: 5000; display: inline-block;" class="glyphicon glyphicon-info-sign"></span></a>').hide().fadeIn(2000);

                    // $(".movieContainer").append('<h1 class="welcomeIntro" style="text-align: center; transform: translateY(200%); margin: 0; font-family: SF-Pro-Display-Medium;">Bad Deadpool... Good Deadpool!</h1>');
                    // $(".movieContainer").append('<img src="images/deadpool.jpg" style="width: 45%; position: absolute; margin-left: 20%; bottom: 0;">')
                }
                
            }
        };

        $.ajax(settings).done(function (response) {
            console.log(response);
                $(".randomMovieContainer").append('<img id="movieImg" onerror="imgError(this)" style="padding-top: 20px; height: 500px;" src="http://image.tmdb.org/t/p/original' + response.poster_path + '"/>').hide().fadeIn(2000);
                // $(".randomMovieContainer").append('<img id="backdrop" onerror="imgError(this)" style="position: absolute; margin: 0 auto; display: block; width: 100%; height: auto; z-index: -1000; top: 0; opacity: .6; border-radius: 0; animation: none;" src="http://image.tmdb.org/t/p/original' + response.backdrop_path + '"/>').hide().fadeIn(2000);
                $(".randomMovieContainer").append('<a href="https://www.imdb.com/title/' + response.imdb_id +'" target="_blank"><span style="margin: 10px 0 10px 0; font-size: 25px; position: relative; z-index: 5000; display: inline-block;" class="glyphicon glyphicon-info-sign"></span></a>').hide().fadeIn(2000);

        });
        $(".randomMovieContainer").empty();
        $(".welcomeIntro").empty();
        $(".welcomeImg").remove();
    });

}

function imgError(image) {
    image.onerror = "";
    image.src = "images/tommyBoy.jpg";
    return true;
}

$("#homeBtn").click(function(event) {
    event.preventDefault(event);
    $(document).animate({
        scrollTop: $(".contentOne").offset().top
    }, 5000);
});