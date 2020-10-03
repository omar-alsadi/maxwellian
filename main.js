
function scrollerInit() {
    $('#skrollr-body').ready(function () {
        skrollr.init({
            smoothScrolling: true,
            //mobileDeceleration: 0.004
        });
    });
}

$(document).on("scroll", onScroll);

//smoothscroll
$('a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    $(document).off("scroll");

    $('a').each(function () {
        $(this).removeClass('active');
    })
    $(this).addClass('active');

    var target = this.hash,
        menu = target;
    $target = $(target);
    $('html, body').stop().animate({
        'scrollTop': $target.offset().top + 2
    }, 500, 'swing', function () {
        window.location.hash = target;
        $(document).on("scroll", onScroll);
    });
});

function onScroll(event) {
    var scrollPos = $(document).scrollTop();
    $('#menu-center a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#menu-center ul li a').removeClass("active");
            currLink.addClass("active");
        } else {
            currLink.removeClass("active");
        }
    });
}

$(function () {
    scrollerInit();
});


//Make sure the user has scrolled at least double the height of the browser
var toggleHeight = $(window).outerHeight() * 6;

$(window).scroll(function () {
    if ($(window).scrollTop() > toggleHeight) {
        //Adds active class to make button visible
        $(".m-backtotop").addClass("active");

    } else {
        //Removes active class to make button visible
        $(".m-backtotop").removeClass("active");
    }
});


//Scrolls the user to the top of the page again
$(".m-backtotop").click(function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
});