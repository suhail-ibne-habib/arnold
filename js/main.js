const testimonials = document.querySelector('.testimonials')

if (testimonials) {
    $('.testimonials').slick({
        centerMode: true, // Centers the active slide
        centerPadding: '15%', // Adjusts the visibility of side slides
        slidesToShow: 1, // Shows 1 slide at a time by default
        slidesToScroll: 1,
        focusOnSelect: true,
        prevArrow: $('.arrow-left'),
        nextArrow: $('.arrow-right'),
        responsive: [
            {
                breakpoint: 1024, // Tablet screens
                settings: {
                    slidesToShow: 1, // Show 2 slides at a time
                    centerMode: false,
                }
            },
            {
                breakpoint: 768, // Mobile screens
                settings: {
                    slidesToShow: 1,
                    centerMode: false
                }
            }
        ]
    });
}
