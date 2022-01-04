window.onload = function () {
    let btnTop = document.querySelector(".to-top");
    btnTop.addEventListener("click", scrollToTop);
}

function scrollToTop(){
    console.log(" top top");
    document.body.scrollTop =0;
    document.documentElement.scrollTop=0;
}
