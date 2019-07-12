$(document).ready(function () {

    $('.carousel').carousel({
        interval: 4000
    })

    $(".light-box").click(function (e) {
        e.preventDefault();
        var link = $(this).attr("href");
        $(".embed-responsive-item").attr("src", link);
    });

    $(".hover-animated").mouseover(function () {
        // $(".hover-show").toggleClass("hover-show");

        $(this).find(".hover-show").addClass("fadeIn");
        $(".hover-show-text").attr("style", "transform: translateY(0)");
    });
    $(".hover-animated").mouseout(function () {
        // $(".hover-show").toggleClass("hover-show");
        $(".hover-show-text").attr("style", "transform: translateY(10px)");
        $(".hover-show").removeClass("fadeIn");
        // e.stopPropagation();
    });


    $(".clickdown").click(function () {
        // e.preventDefault();
        $(this).parent().parent().find(".clickdown-menu").slideToggle();
        // $(this).find(".hover-show").addClass("fadeIn");
        // $(".hover-show-text").attr("style", "transform: translateY(0)");
    });

    $('#frontEnd, #uxui, #webDesign, #react, #apollo').click(function (e) {
        e.preventDefault();
        var tab = this.id;
        var tabClass = '.' + tab;
        // alert(tabClass);
        $("#event-content").children().hide();
        $("#event-content").find(tabClass).fadeIn("slow");
    });
    $('#all').click(function (e) {
        e.preventDefault();
        var tab = this.id;
        var tabClass = '.' + tab + '';
        $("#event-content").children().hide();
        $("#event-content").children().fadeIn("slow");
    });

    //menu click scroll
    $('.scrollTop').click(function (e) {
        e.preventDefault();
        var target = $(this).attr('href');
        var targetPos = $(target).offset().top;
        $('html, body').animate({ scrollTop: targetPos-135 }, 800);
    });

    $(window).scroll(function () {
        var scrollPos = $(window).scrollTop();
        var windowHeight = $(window).height();
        console.log(scrollPos, windowHeight);

        $('.scrollTop').each(function () {
            var target = $(this).attr('href');
            var targetPos = $(target).offset().top;
            var targetHeight = $(target).outerHeight();
            if (targetPos - 1 <= scrollPos && (targetPos + targetHeight) > scrollPos) {
                $('.scrollTop').removeClass('active')
                $(this).addClass('active');
            } else {
                $(this).removeClass('active')
            }
        });


    });

});