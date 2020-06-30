$(document).ready(function () {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 3000,
        dots: true,
        autoplayHoverPause: false
    });

    /*stiky navbar*/

    $(".js-stiky").waypoint(function (direction) {

        if (direction == "down") {
            $(".navbar-section").addClass("stiky");
        } else {
            $(".navbar-section").removeClass("stiky");
        }

    });


});

function clicToPlay() {
    var myAudio = document.getElementById("myaudio");
    $(myAudio)[0].play();
    $("#playbutton").hide();
    $(".pause-icon").fadeIn();
}

function clicToPause() {
    var myAudio = document.getElementById("myaudio");
    $(myAudio)[0].pause();
    $("#playbutton").fadeIn();
    $(".pause-icon").hide();
}