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
const modalCont = document.getElementById('myModal');

const aboutCompany = document.querySelector('.about-company')
const aboutCompanyBtn1 = document.querySelector('.desk')
const aboutCompanyBtn2 = document.querySelector('.desk-2')
const userBtn1 = document.querySelector('.mob')
const userBtn2 = document.querySelector('.mob-2')
const userInfo = document.querySelector('.user-info')

const btns = document.querySelectorAll('.fa-eye')
const projects = document.querySelectorAll('.proj')

const close1 = document.querySelectorAll('.close')


aboutCompanyBtn1.addEventListener('click',()=> {
    aboutCompany.style.display = 'block'
    modalCont.style.display = 'block'
})
aboutCompanyBtn2.addEventListener('click',()=> {
    aboutCompany.style.display = 'block'
    modalCont.style.display = 'block'
})
userBtn1.addEventListener('click',()=> {
    userInfo.style.display = 'flex'
    modalCont.style.display = 'block'
})
userBtn2.addEventListener('click',()=> {
    userInfo.style.display = 'flex'
    modalCont.style.display = 'block'
})

close1.forEach(el => {
    el.addEventListener('click',()=> {
        projects.forEach(proj => {
            proj.style.display = 'none'
            modalCont.style.display = 'none'
            aboutCompany.style.display = 'none'
            userInfo.style.display = 'none'
            sucsessBox.style.display = 'none'
        })
    })
})


setTimeout(()=> {
    userInfo.style.display = 'flex'
    modalCont.style.display = 'block'
},3000)

for(let i = 0; i < projects.length; i++) {
    btns[i].addEventListener('click', ()=> {
        projects[i].style.display = 'flex'
        modalCont.style.display = 'block'
    })
}



const navbr = document.querySelector('.navbar-toggler1');

navbr.addEventListener('mouseover', ()=> {
    navbr.style.backgroundColor = 'rgba(10, 57, 35, 0.550)'
})
navbr.addEventListener('mouseleave', ()=> {
    navbr.style.backgroundColor = 'transparent'
})




// const infoIcon = document.querySelector('.info');
const popup1 = document.querySelector('.popup');
const close = document.querySelector('.close');
// console.log(infoIcon,44);


// infoIcon.addEventListener('click', ()=> {
//     popup1.style.display = 'block'
//     modalCont.style.display = 'block'
// })
close.addEventListener('click', ()=> {
    popup1.style.display = 'none'
    modalCont.style.display = 'none'
    
})


btns.forEach(el => {
  
})


// 

const sucsessBox = document.querySelector('.done');

const userName = document.getElementById('first-name');
const mobile = document.getElementById('mobile');
const email = document.getElementById('email');
const callBtn = document.getElementById('callBtn');
console.log(callBtn);
callBtn.addEventListener('click', ()=> {
    sendData(userName.value,mobile.value,email.value)
})

function sendData(name, mobile, email) {
    let data = { name, mobile, email };
    
    fetch('https://api.accordi.ge/api/send', {
        method: "POST", 
        mode: "cors", 
        cache: "no-cache", 
        credentials: "same-origin", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then(res => {
        if(res.ok) {
            setTimeout(()=> {
                modalCont.style.display = 'block'
                sucsessBox.style.display = 'block'
                userInfo.style.display = 'none'
            },1000)
               
        } 
        return res.json();
      }).catch(err => console.log(err))
}


