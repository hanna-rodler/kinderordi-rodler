$(function () {
    let btnTop = document.querySelector(".to-top");
    btnTop.addEventListener("click", scrollToTop);

    stickFooterToBttom();

    $(window).on('resize', function () {
        stickFooterToBttom();
    });
});

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function stickFooterToBttom() {
    let footer = $("footer");
    let windowHeight = $(window).height();
    let contHeight = $("main").height() + $("header").height();
    let footerHeight = footer.height();
    let testHeight = windowHeight - footerHeight;

    if (contHeight < testHeight) {
        footer.addClass("fixed-bottom");
    }
    if (contHeight > testHeight) {
        footer.removeClass("fixed-bottom");
    }
}
