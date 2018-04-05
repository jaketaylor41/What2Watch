

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


        var randomId = Math.floor(Math.random() * 3500) + 1;
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
                $(".movieContainer").append('<img id="movieImg" src="http://image.tmdb.org/t/p/original' + response.poster_path + '"/>');
                $(".movieContainer").append('<img id="backdrop" style="position: absolute; margin: 0 auto; display: block; width: 100%; height: auto; z-index: -1000; top: 0; opacity: .6; border-radius: 0; animation: none; margin-top: 20px;" src="http://image.tmdb.org/t/p/original' + response.backdrop_path + '"/>');


                /// / $(".movieContainer").append('<span>' + response.original_title + '</span>');
                // $(".movieContainer").append('<p>' + "Release Date: " + response.release_date + '</p>');
                // $(".movieContainer").append('<p>' + response.overview + '</p>');
                // $(".movieContainer").append('<p>' + "Vote Average: " + response.vote_average + '</p>');
                // $(".movieContainer").append('<p>' + "Vote Count: " + response.vote_count + '</p>');


        });
        $(".movieContainer").empty();
        $(".backDrop").empty();
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

    // jQuery(window).scroll(function () {
    //     if (jQuery(this).scrollTop() > 100) {
    //         if (jQuery('.cardOne').hasClass('visible') == false) {
    //             jQuery('.cardOne').stop().animate({
    //                 right: '0px'
    //             }, function () {
    //                 jQuery('.cardOne').addClass('visible')
    //             });
    //         }
    //     } else {
    //         if (jQuery('.cardOne').hasClass('visible') == true) {
    //             jQuery('.cardOne').stop().animate({
    //                 right: '-2000px'
    //             }, function () {
    //                 jQuery('.cardOne').removeClass('visible')
    //             });
    //         }
    //     }
    // });

$("#homeBtn").click(function(event) {
    event.preventDefault(event);
    $(document).animate({
        scrollTop: $(".contentOne").offset().top
    }, 5000);
});


window.requestAnimFrame = (function () {
    return  window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 1000 / 60);
        };
})();

Math.randMinMax = function(min, max, round) {
    var val = min + (Math.random() * (max - min));

    if( round ) val = Math.round( val );

    return val;
};
Math.TO_RAD = Math.PI/180;
Math.getAngle = function( x1, y1, x2, y2 ) {

    var dx = x1 - x2,
        dy = y1 - y2;

    return Math.atan2(dy,dx);
};
Math.getDistance = function( x1, y1, x2, y2 ) {

    var     xs = x2 - x1,
        ys = y2 - y1;

    xs *= xs;
    ys *= ys;

    return Math.sqrt( xs + ys );
};

var     FX = {};

(function() {

    var canvas = document.getElementById('myCanvas'),
        ctx = canvas.getContext('2d'),
        lastUpdate = new Date(),
        mouseUpdate = new Date(),
        lastMouse = [],
        width, height;

    FX.particles = [];

    setFullscreen();
    document.getElementById('randomMovieBtn').addEventListener('mousedown', buttonEffect);

    function buttonEffect() {

        var button = document.getElementById('randomMovieBtn'),
            height = button.offsetHeight,
            left = button.offsetLeft,
            top = button.offsetTop,
            width = button.offsetWidth,
            x, y, degree;

        for(var i=0;i<40;i=i+1) {

            if( Math.random() < 0.5 ) {

                y = Math.randMinMax(top, top+height);

                if( Math.random() < 0.5 ) {
                    x = left;
                    degree = Math.randMinMax(-45,45);
                } else {
                    x = left + width;
                    degree = Math.randMinMax(135,225);
                }

            } else {

                x = Math.randMinMax(left, left+width);

                if( Math.random() < 0.5 ) {
                    y = top;
                    degree = Math.randMinMax(45,135);
                } else {
                    y = top + height;
                    degree = Math.randMinMax(-135, -45);
                }

            }
            createParticle({
                x: x,
                y: y,
                degree: degree,
                speed: Math.randMinMax(100, 150),
                vs: Math.randMinMax(-4,-1)
            });
        }
    }
    window.setTimeout(buttonEffect, 100);

    loop();

    window.addEventListener('resize', setFullscreen );

    function createParticle( args ) {

        var options = {
            x: width/2,
            y: height/2,
            color: 'hsla('+ Math.randMinMax(160, 290) +', 100%, 50%, '+(Math.random().toFixed(2))+')',
            degree: Math.randMinMax(0, 360),
            speed: Math.randMinMax(300, 350),
            vd: Math.randMinMax(-90,90),
            vs: Math.randMinMax(-8,-5)
        };

        for (key in args) {
            options[key] = args[key];
        }

        FX.particles.push( options );
    }

    function loop() {

        var     thisUpdate = new Date(),
            delta = (lastUpdate - thisUpdate) / 1000,
            amount = FX.particles.length,
            size = 2,
            i = 0,
            p;

        ctx.fillStyle = 'rgba(15,15,15,0.25)';
        ctx.fillRect(0,0,width,height);

        ctx.globalCompositeStyle = 'lighter';

        for(;i<amount;i=i+1) {

            p = FX.particles[ i ];

            p.degree += (p.vd * delta);
            p.speed += (p.vs);// * delta);
            if( p.speed < 0 ) continue;

            p.x += Math.cos(p.degree * Math.TO_RAD) * (p.speed * delta);
            p.y += Math.sin(p.degree * Math.TO_RAD) * (p.speed * delta);

            ctx.save();

            ctx.translate( p.x, p.y );
            ctx.rotate( p.degree * Math.TO_RAD );

            ctx.fillStyle = p.color;
            ctx.fillRect( -size, -size, size*2, size*2 );

            ctx.restore();
        }

        lastUpdate = thisUpdate;

        requestAnimFrame( loop );
    }

    function setFullscreen() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }
})();


