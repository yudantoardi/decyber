AOS.init();

$(document).ready(function(){
    var yourNavigation = $("header");
        stickyDiv = "scrolled";

    $(window).scroll(function() {
    if( $(this).scrollTop() > 0 ) {
        yourNavigation.addClass(stickyDiv);
    } else {
        yourNavigation.removeClass(stickyDiv);
    }
    });

    $(".mob-toggle-bt").click(function(){
        $(".dropdown").removeClass("show");
        $(this).next().addClass("show");
    });

    $(".burger").click(function(){
        $($(this).children("i")).toggleClass("fa-times fa-bars")
        $(".menu").toggleClass("show");
    });
});