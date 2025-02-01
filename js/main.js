const testimonials = document.querySelector('.testimonials')

if( testimonials ){
    $('.testimonials').slick({
        centerMode: true, // Centers the active slide
        centerPadding: '20%', // Adjusts the visibility of side slides
        slidesToShow: 1, // Shows 3 slides at a time
        slidesToScroll: 1,
        centerMode: true,
        focusOnSelect: true,
        prevArrow: $('.arrow-left'),
        nextArrow: $('.arrow-right'),
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1, // Adjust for mobile screens
                    centerMode: false
                }
            }
        ]
    });
}