const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
         300: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
         400: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
         500: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
         640: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        640: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            spaceBetween:20,
        },
        900:{
            slidesPerView: 5,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 7,
            spaceBetween:20,
        },
    },
});



const targetTime = new Date().getTime() + 12 * 60 * 60 * 1000 + 27 * 60 * 1000 + 33 * 1000;


const hourElement = document.querySelector('.h-product__banner-time-digital__hour');
const minuteElement = document.querySelector('.h-product__banner-time-digital__minute');
const secondElement = document.querySelector('.h-product__banner-time-digital__second');
const infoElement = document.querySelector('.h-product__banner-time-digital__info');


function updateTimer() {
    const now = new Date().getTime();
    const distance = targetTime - now;


    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);


    hourElement.innerHTML = `<span class="fw-bold fs-4">${hours}</span><span>ساعت</span>`;
    minuteElement.innerHTML = `<span class="fw-bold fs-4">${minutes}</span><span>دقیقه</span>`;
    secondElement.innerHTML = `<span class="fw-bold fs-4">${seconds}</span><span>ثانیه</span>`;

  
    if (distance < 0) {
        clearInterval(timerInterval); 
        infoElement.innerHTML = 'زمان تمام شد';
    }
}

const timerInterval = setInterval(updateTimer, 1000);


updateTimer();


document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.querySelector(".h-filter-sidebar");
    const openBtn = document.querySelector(".open-sidebar-btn");

    openBtn.addEventListener("click", function () {
        sidebar.classList.toggle("active"); 
    });
});

var myswiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });