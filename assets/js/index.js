$(window).on("scroll", function () {
    let currentScroll = $(this).scrollTop();

    if (currentScroll > 0) {
        $(".header").addClass("on");
    } else if (currentScroll === 0) {
        $(".header").removeClass("on");
    }
});

$(".more-project").click(function () {
    $(".sub-list").slideToggle();
});

gsap.from(".introduction-sc .animation-wrapper span", {
    scrollTrigger: {
        trigger: ".introduction-sc",
        start: "0% 80%",
        end: "100% 0%",
        toggleActions: "play none none reverse",
        // markers: true,
    },
    yPercent: 120,
    ease: "power2.inOut",
});

const overviewAnimation = gsap.timeline({
    scrollTrigger: {
        trigger: ".overview-sc",
        start: "0% 80%",
        end: "100% 100%",
        toggleActions: "play none none reverse",
        // markers: true,
    },
});
overviewAnimation
    .from($(".overview-sc .animation-wrapper img"), { yPercent: 120, ease: "power2.inOut" })
    .from($(".overview-sc .animation-wrapper span"), { yPercent: 120, ease: "power2.inOut" });

gsap.utils.toArray(".project-sc").forEach((section) => {
    const imgWrapper = section.querySelector(".img-wrapper");
    const animationWrapper = section.querySelectorAll(".animation-wrapper span");

    const projectAnimation = gsap.timeline({
        scrollTrigger: {
            trigger: section,
            start: "0% 100%",
            end: "100% 0%",
            toggleActions: "play none none reverse",
            // markers: true,
            onEnter: () => {
                projectAnimation.timeScale(1).play();
            },
            onLeaveBack: () => {
                projectAnimation.timeScale(2).reverse();
            },
        },
    });
    projectAnimation
        .from(imgWrapper, { xPercent: -100, x: 0, duration: 0.8, ease: "power2.out" })
        .from(animationWrapper, { yPercent: 120, stagger: 0.2, ease: "power2.out" }, "-=0.3");
});

gsap.from(".plans-sc .animation-wrapper span", {
    scrollTrigger: {
        trigger: ".plans-sc",
        start: "0% 80%",
        end: "100% 0%",
        toggleActions: "play none none reverse",
        // markers: true,
    },
    yPercent: 120,
    ease: "power2.inOut",
});