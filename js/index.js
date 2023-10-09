  $(document).ready(function () {
    $('.owl-carousel-1').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            900: {
                items: 3
            },
            1100: {
                items: 5
            }
        }
    })
});


