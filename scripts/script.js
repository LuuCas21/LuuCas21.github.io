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
const logo_img = document.querySelector('#logo_image');
const button_top = document.querySelector('.fa-arrow-up');

// Tradução
const languageBtn = document.querySelector('.fa-globe');
const subTitle = document.querySelector('#subTitle');
const portfolio_technology = document.querySelectorAll('.gallery_portfolio_technology');

top_button.forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();

        container_1.scrollIntoView({behavior: 'smooth'});
    })
});

const takeMeTop = function(e) {
    //e.preventDefault();

    container_1.scrollIntoView( {behavior: 'smooth'} );
}

// Smooth Scroll

menuNav.addEventListener('click', function(e) {
    e.preventDefault();

    if (e.target.classList.contains('anchor_link')) {
    const div = e.target.getAttribute('href');
    document.querySelector(div).scrollIntoView({ behavior: 'smooth' });
    }
});

logo_img.style.cursor = 'pointer';

logo_img.addEventListener('click', function() {
    container_1.scrollIntoView({behavior: 'smooth'});
});

// Social Media Links
const social_media_anchor = function(link) {
    window.open(link);
}

// Portfolio Links

const live_btn = document.querySelectorAll('.live_button');
const repo_btn = document.querySelectorAll('.repo_button');

const eyeBtn = document.querySelectorAll('.fa-eye');

eyeBtn.forEach(ey => {
    ey.addEventListener('click', (e) => {
        const parentEl = e.target.parentNode;
        const getAttrAnchor = parentEl.getAttribute('data-anchor');
        window.open(getAttrAnchor);
    })
})

live_btn.forEach(liveBtn => {
    liveBtn.addEventListener('click', function(e) {
        e.preventDefault();
        const getAttr = e.target.dataset.anchor;

        if (e.target.classList.contains('live_button')) {
            window.open(getAttr);
        }
    })
})

repo_btn.forEach(repoBtn=> {
    repoBtn.addEventListener('click', function(e) {
        e.preventDefault();
        const getAttr = e.target.dataset.anchor;

        if (repoBtn.classList.contains('repo_button')) {
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

    if (window.pageYOffset >= coords.y) {
        button_top.style.display = 'block';
    } else {
        button_top.style.display = 'none';
    }
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

const imageGallery = document.querySelectorAll('.image');

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.25,
};

const callback = function(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting && entry.target.className === 'image') {
            const getUrl = entry.target.getAttribute('data-image');
            if(getUrl) {
                entry.target.src = getUrl;
                observer.unobserve(entry.target);
            }
        }
    })
};

const observer = new IntersectionObserver(callback, options);

imageGallery.forEach(imgs => {
    observer.observe(imgs);
});

const selector = document.querySelector('#selector');
const translate = document.querySelectorAll('.translate');
const subject_input = document.querySelector('#subject');
const name_input = document.querySelector('#name');
const message_input = document.querySelector('#message');
const menu_list = document.getElementsByTagName('a');

const translator = function() {
    const selector_input = selector.value;

    switch (selector_input) {
        case 'Português' :
            translate.forEach(menuPT => {
                const ptAttr = menuPT.getAttribute('data-portuguese');
                menuPT.innerHTML = ptAttr;
            });

            for (let i = 0; i < menu_list.length; i++) {
                const ptAttr = menu_list[i].getAttribute('data-portuguese');
                menu_list[i].textContent = ptAttr;
            }

            subject_input.setAttribute('placeholder', 'Assunto');
            name_input.setAttribute('placeholder', 'Nome');
            message_input.setAttribute('placeholder', 'Mensagem . . .');

        break;

        case 'Inglês' :
            translate.forEach(menuEN => {
                const engAttr = menuEN.getAttribute('data-english');
                menuEN.innerHTML = engAttr;
            });

            for (let i = 0; i < menu_list.length; i++) {
                const engAttr = menu_list[i].getAttribute('data-english');
                menu_list[i].textContent = engAttr;
            }

            subject_input.setAttribute('placeholder', 'Subject');
            name_input.setAttribute('placeholder', 'Full Name');
            message_input.setAttribute('placeholder', 'Message . . .');

        break;
    }
};

// No mobile o IntersectionObserver não irá funcionar, somente em desktop

function disableObserver(y) {
    if (y.matches) {
        imageGallery.forEach(imgs => {
            observer.unobserve(imgs);

            const getSrc = imgs.getAttribute('data-image');
            imgs.src = getSrc;
        });

    } else {
        imageGallery.forEach(imgs => {
            observer.observe(imgs);

            imgs.src = '#';
        });
    }
}

const y = window.matchMedia('(max-width: 1000px)');
disableObserver(y);
y.addListener(disableObserver);

const coords = container_2.getBoundingClientRect();

/*window.onscroll = function() {
    if (window.pageYOffset >= coords.y) {
        button_top.style.display = 'block';
    } else {
        button_top.style.display = 'none';
    }
}*/

/*const textEl = document.querySelector('.text');
const text = 'Desenvolvedor Front - end';
let idx = 1;
let speed = 100;

writeText();

function writeText() {
    textEl.innerText = text.slice(0, idx);

    idx++;

    if (idx > text.length) {
        idx = text.length;
    }

    setTimeout(writeText, speed);
}*/
