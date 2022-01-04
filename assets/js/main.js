$(function () {
    let btnTop = document.querySelector(".to-top");
    btnTop.addEventListener("click", scrollToTop);

    $(function() {
        var windowHeight = $(window).height();
        var contHeight = $("main").height() + $("header").height();
        var footerHeight = $("footer").height();
        var testHeight = windowHeight - footerHeight;

        if (contHeight < testHeight) {
            $("footer").addClass("fixed-bottom");
         /*   $("footer").css("bottom", "0");
            $("footer").css("left", "0");*/
            console.log("hi");
        }
        console.log("hi");
    });
});

function scrollToTop(){
    document.body.scrollTop =0;
    document.documentElement.scrollTop=0;
}
