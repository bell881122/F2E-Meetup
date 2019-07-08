$(document).ready(function () {

    $('.carousel').carousel({
        interval: 4000
    })

    $(".light-box").click(function (e) {
        e.preventDefault();
        var link = $(this).find("a").attr("href");
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
        $(this).parent().parent().find(".clickdown-menu").slideToggle();

        // $(this).find(".hover-show").addClass("fadeIn");
        // $(".hover-show-text").attr("style", "transform: translateY(0)");
    });

    $('#webdesign, #uxui, #react').click(function (e) {
        e.preventDefault();
        var tab = this.id;
        var tabClass = '.' + tab + '';
        $("#tab-pane").children().hide();
        $("#tab-pane").find(tabClass).fadeIn("slow");
    });
    $('#all').click(function (e) {
        e.preventDefault();
        var tab = this.id;
        var tabClass = '.' + tab + '';
        $("#tab-pane").children().hide();
        $("#tab-pane").children().fadeIn("slow");
    });
        // alert(tabClass);
        // 


        // console.log();



});

