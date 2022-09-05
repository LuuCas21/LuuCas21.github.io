'use script';

const top_button = document.querySelectorAll('.scroll_top');
const menu_anchors = document.querySelectorAll('.anchor_link');
const menuNav = document.querySelector('#menu');
const container_1 = document.querySelector('#container');
const container_2 = document.querySelector('#container-2');
const slideS = document.querySelectorAll('.slides');
const next_btn = document.querySelector('.fa-long-arrow-right');
const prev_btn = document.querySelector('.fa-long-arrow-left');
const dropdownBtn = document.querySelector('#dropdown_button');
const open_gallery_arrow = document.querySelector('.fa-chevron-down');
const close_gallery_arrow = document.querySelector('.fa-chevron-up');

// Tradução
const languageBtn = document.querySelector('.fa-globe');
const subTitle = document.querySelector('#subTitle');
const portfolio_technology = document.querySelectorAll('.gallery_portfolio_technology');

top_button.forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();

        container_1.scrollIntoView({behavior: 'smooth'});
    })
})

// Smooth Scroll

menuNav.addEventListener('click', function(e) {
    e.preventDefault();

    if (e.target.classList.contains('anchor_link')) {
    const div = e.target.getAttribute('href');
    document.querySelector(div).scrollIntoView({ behavior: 'smooth' });
    }
})

// Social Media Links
const social_media_anchor = function(link) {
    window.open(link);
}

// Portfolio Links

const live_btn = document.querySelectorAll('.live_button');

live_btn.forEach(liveBtn => {
    liveBtn.addEventListener('click', function(e) {
        const getAttr = e.target.dataset.anchor;

        if (e.target.classList.contains('live_button')) {
            window.open(getAttr);
        }
    })
})

// Slides

/*let curSlide = 0;
const maxSlide = slideS.length;

const goToSlide = function(slide) {
slideS.forEach((s, i) => {
    s.style.transform = `translateY(${100 * (i - slide)}%)`;
})
}

goToSlide(0);

const nextSlide = function() {
    if (curSlide === maxSlide - 1) {
        curSlide = 0;
    } else {
        curSlide++;
    }

    goToSlide(curSlide);
}

const prevSlide = function() {
    if (curSlide === 0) {
        curSlide = maxSlide - 1;
    } else {
        curSlide--;
    }

    goToSlide(curSlide);
}

next_btn.addEventListener('click', nextSlide);
prev_btn.addEventListener('click', prevSlide);
*/
const dropdownContent = document.querySelector('.dropdown_content');

const dropdown_content = function() {
    if (!dropdownContent.classList.contains('display')) {
    document.querySelector('.dropdown_content').classList.add('display');
    } else {
        dropdownContent.classList.remove('display');
    }
}

dropdownContent.addEventListener('click', function(e) {
    e.preventDefault();
    if (e.target.classList.contains('anchor_link-2')) {
        const div = e.target.getAttribute('href');
        document.querySelector(div).scrollIntoView({ behavior: 'smooth' });
        dropdownContent.classList.remove('display');
    }
})

/*dropdownBtn.addEventListener('click', function(e) {
    e.preventDefault()
    console.log('clicked')
    //dropdownContent.classList.add('display');
    dropdownContent.style.height = '400px';
})*/

let prevScroll = window.pageYOffset;

window.onscroll = function() {
    const posScroll = window.pageYOffset;
    if (prevScroll > posScroll) {
        document.querySelector('#header').style.height = '80px';
        document.querySelector('#header').style.overflow = '';
    } else {
        document.querySelector('#header').style.height = '0';
        document.querySelector('#header').style.overflow = 'hidden';
    }

    prevScroll = posScroll;
}

const slider_2 = document.querySelector('.gallery_slider--2');

open_gallery_arrow.addEventListener('click', function(e) {
    e.preventDefault();

    if (slider_2.classList.contains('display_slider--2')) {
        slider_2.classList.remove('display_slider--2');
        open_gallery_arrow.classList.add('display_button_slider');
        close_gallery_arrow.classList.remove('display_button_slider');
    } else {
        open_gallery_arrow.classList.remove('display_button_slider');
        close_gallery_arrow.classList.add('display_button_slider');
        slider_2.classList.add('display_slider--2');
    }
});

close_gallery_arrow.addEventListener('click', function(e) {
    e.preventDefault();

    if (!slider_2.classList.contains('display_slider--2')) {
        slider_2.classList.add('display_slider--2');
        close_gallery_arrow.classList.add('display_button_slider');
        open_gallery_arrow.classList.remove('display_button_slider');
    } else {
        open_gallery_arrow.classList.remove('display_button_slider');
        close_gallery_arrow.classList.add('display_button_slider');
        slider_2.classList.remove('display_slider--2');
    }
})