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

let $ = document;
let more = $.querySelector("#m-more");
let moreBtn = $.querySelector(".m-more-btn");
moreBtn.addEventListener("click", function (event) {
  event.preventDefault();
  if (more.style.display == "inline") {
    more.style.display = "none";
    moreBtn.innerHTML =
      'مشاهده بیشتر  <i class="fa fa-angle-left" aria-hidden="true"></i> ';
  } else {
    more.style.display = "inline";
    moreBtn.innerHTML =
      '  بستن   <i class="fa fa-angle-left" aria-hidden="true"></i> ';
  }
});
let mbackToTop=document.getElementById("m-backToTop");
mbackToTop.addEventListener("click", function (){
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
});

const myswiper = new Swiper('.mySwiper', {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  // autoplay: {
  //   delay: 5000,    
  //   disableOnInteraction: false,  
  // },
  navigation: {
    nextEl: '.swiper-button-next',  
    prevEl: '.swiper-button-prev',  
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});


const thirdswiper = new Swiper('.swiper-container', {
  slidesPerView: 4,  // تعداد اسلایدهای نمایش داده شده در هر صفحه
  spaceBetween: 10,  // فاصله بین اسلایدها
  loop: true,        // فعال کردن حلقه اسلایدها
  navigation: {
    nextEl: '#sr',   // دکمه بعدی
    prevEl: '#sl',   // دکمه قبلی
  },
  breakpoints: {
    320: {
      slidesPerView: 1,  // برای صفحه‌های کوچک (مانند موبایل)، یک اسلاید نمایش داده می‌شود
    },
    768: {
      slidesPerView: 2,  // برای صفحه‌های بزرگ‌تر، دو اسلاید نمایش داده می‌شود
    },
    1024: {
      slidesPerView: 4,  // برای صفحه‌های بزرگ‌تر، چهار اسلاید نمایش داده می‌شود
    },
  },
});
  // تابع برای شروع تایمر
        function startTimer(duration, display1, display2) {
            let timer = duration, minutes, seconds;
            setInterval(function () {
                minutes = parseInt(timer / 60, 10);
                seconds = parseInt(timer % 60, 10);

                // افزودن صفر به عددهای کمتر از 10
                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;

                display1.textContent = minutes + ":" + seconds;
                display2.textContent = minutes + ":" + seconds;

                if (--timer < 0) {
                    timer = duration;
                }
            }, 1000);
        }

        window.onload = function () {
            // مدت زمان تایمر به ثانیه
            let duration = 60 * 5; // 5 دقیقه
            let display1 = document.querySelector('#timer1');
            let display2 = document.querySelector('#timer2');
            startTimer(duration, display1, display2);
        };
// toggle btn
const toggleButton = document.getElementById('menu-toggle');
const menu = document.getElementById('navbarNav');

toggleButton.addEventListener('click', () => {
    menu.classList.toggle('show');
});