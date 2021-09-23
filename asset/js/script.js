const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", function() {
    nav.classList.toggle("slide");
});

$(document).scroll(function() {
    var y = $(window).scrollTop();
    if (y > 0) {
        $("nav.menu").addClass("shActive");
    } else {
        $("nav.menu").removeClass("shActive");
    }
});

$(document).ready(function() {
    $(".list").click(function() {
        let value = $(this).attr("data-filter");
        if (value == "all") {
            $(".itembox").show(1000);
            $(".more-product").show();
        } else {
            $(".itembox")
                .not("." + value)
                .hide();
            $(".more-product")
                .not("." + value)
                .hide();
            $(".itembox")
                .filter("." + value)
                .show(1000);
        }
    });
});

$(document).ready(function() {
    $(".list").click(function() {
        $(this).addClass("active").siblings().removeClass("active");
    });
});