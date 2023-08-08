(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 1000
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: true,
        loop: true,
        nav : true,
        navText : [
            
        ]
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            }
        }
    });


    // Portfolio isotope and filter
    // var portfolioIsotope = $('.portfolio-container').isotope({
    //     itemSelector: '.portfolio-item',
    //     layoutMode: 'fitRows'
    // });
    // $('#portfolio-flters li').on('click', function () {
    //     $("#portfolio-flters li").removeClass('active');
    //     $(this).addClass('active');

    //     portfolioIsotope.isotope({filter: $(this).data('filter')});
    // });
    
})(jQuery);


const btns = document.querySelectorAll('.fa-eye')
const projects = document.querySelectorAll('.proj')

const close1 = document.querySelectorAll('.close')


close1.forEach(el => {
    el.addEventListener('click',()=> {
        projects.forEach(proj => {
            proj.style.display = 'none'
        })
    })
})

for(let i = 0; i <= projects.length; i++) {
    btns[i].addEventListener('click', ()=> {
        projects[i].style.display = 'flex'
    })
}




const navbr = document.querySelector('.navbar-toggler1');


navbr.addEventListener('mouseover', ()=> {
    navbr.style.backgroundColor = 'rgba(10, 57, 35, 0.550)'
})
navbr.addEventListener('mouseleave', ()=> {
    navbr.style.backgroundColor = 'transparent'
})