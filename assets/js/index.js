$(window).on("scroll", function () {
    let currentScroll = $(this).scrollTop();

    if (currentScroll > 0) {
        $(".header").addClass("on");
    } else if (currentScroll === 0) {
        $(".header").removeClass("on");
    }
});
