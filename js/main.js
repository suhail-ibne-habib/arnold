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


document.addEventListener("DOMContentLoaded", function () {
    const bars = document.querySelector(".bars");
    if( bars ){
        const mobNav = document.querySelector(".mob-nav");
    
        bars.addEventListener("click", function () {
            mobNav.classList.toggle("active");
        });
    }
});

const hasSubMenus = document.querySelectorAll('.has-sub-menu')

if( hasSubMenus ){
    hasSubMenus.forEach( (item) => {
        const subMenu = item.querySelector('.sub-menu')

        item.addEventListener('click', ()=>{
            subMenu.classList.toggle('active')
        })
    })
}


