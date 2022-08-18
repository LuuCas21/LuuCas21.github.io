'use script'

function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function openNav_2() {
    document.getElementById('sobre_div').style.width = '100%';
}

function closeNav_2() {
    document.getElementById('sobre_div').style.width = '0';
}

function openNav_3() {
    document.getElementById('contact_div').style.width = '100%';
}

function closeNav_3() {
    document.getElementById('contact_div').style.width = '0';
}

// Links dos Repositórios

const button_1 = document.getElementById('button--3');
const button_2 = document.getElementById('button--4');
const button_3 = document.getElementById('button--5');


function anchor_5() {
    window.open('https://www.linkedin.com/in/lucassouza200/');
}

function anchor_6() {
    window.open('https://github.com/LuuCas21');
}

function anchor_10() {
    window.open('https://t.me/LuuCas200')
}

function anchor_13() {
    window.open('./img/MeuCurrículo.pdf')
}

function anchor_live(anchor) {
    window.open(anchor);
}

function anchor_repository(anchor) {
    window.open(anchor);
}

const pt_button = document.getElementById('pt');
const eng_button = document.getElementById('eng');

// Tecnologies Used - Translation
const eng_2 = document.querySelectorAll('.eng--2');
// Tecnologias Utilizadas - Tradução
const pt_2 = document.querySelectorAll('.pt--2');

// Brooklyn Hair Saloon - Translation
const eng_1 = document.querySelectorAll('.eng--1');
// Salão do Brooklyn - Tradução
const pt_1 = document.querySelectorAll('.pt--1');
// Input English
const eng_input = document.querySelectorAll('.engInput--1');
// input Portuguese
const pt_input = document.querySelectorAll('.ptInput--1');

// Programming Languages Description - Translation
const eng_3 = document.querySelectorAll('.eng--3');
const pt_3 = document.querySelectorAll('.pt--3');

// Eng Button (Class);
let eng_btn = document.querySelector('.eng');
// Pt Button (Class);
let pt_btn = document.querySelector('.pt');

function ptTranslation() {

    pt_2.forEach(pt => {
        
        pt.innerHTML = 'Tecnologias utilizadas:';
    })

    if(eng_btn.classList.contains('active')) {
        eng_btn.classList.remove('active');
        pt_btn.classList.add('active');
    }

    pt_1.forEach(p => {
        const dataTranslation = p.dataset.portuguese;
        p.innerHTML = dataTranslation;
    })

    pt_input.forEach(pt => {
        const dataTranslation = pt.dataset.portuguese;
        pt.setAttribute('placeholder', dataTranslation);
    })

    pt_3.forEach(pt => {
        if(pt.classList.contains('disappear')) {
            pt.classList.remove('disappear');
            eng_3.forEach(en => {
                en.classList.add('disappear')
            })
        }
    })
    
}

function engTranslation() {

    eng_2.forEach(en => {
        en.innerHTML = 'Technologies used:';
    });

    eng_1.innerHTML = 'Brooklyn Hair Saloon';

    if(pt_btn.classList.contains('active')) {
        eng_btn.classList.add('active');
        pt_btn.classList.remove('active');
    }

    eng_1.forEach(e => {
        const dataTranslation = e.dataset.english;
        e.innerHTML = dataTranslation;
    })

    eng_input.forEach(en => {
        const dataTranslation = en.dataset.english;
        en.setAttribute('placeholder', dataTranslation);
    })

    eng_3.forEach(e => {
        if(e.classList.contains('disappear')) {
            e.classList.remove('disappear')
            pt_3.forEach(pt => {
                pt.classList.add('disappear')
            })
        }
    })
    
}

eng_button.addEventListener('click', engTranslation);
pt_button.addEventListener('click', ptTranslation);

const accordion_div = document.querySelectorAll('.accord--');

const x = window.matchMedia('(max-width: 900px)');

function myFunction(x) {
    for(let i = 0; i < accordion_div.length; i++) {
        if(x.matches) {
            accordion_div[i].style.display = 'block';
        }
    };
};

//myFunction(x);
x.addListener(myFunction);

myFunction(x);

// Mostrar Projetos

const portfolioDiv2 = document.querySelectorAll('.portfolioDiv--2');
const arrowDown_1 = document.querySelector('.arrow_down--1');
const arrowUp_2 = document.querySelector('.arrow_up--2');

arrowDown_1.addEventListener('click', arrowUpDown);
arrowUp_2.addEventListener('click', arrowUpDown_2);

function arrowUpDown() {

    portfolioDiv2.forEach(ports => {
        if(ports.classList.contains('disappear')) {
            ports.classList.remove('disappear');
        }
    })

    arrowUp_2.classList.remove('disappear');
    arrowDown_1.classList.add('disappear');
}

function arrowUpDown_2() {
    portfolioDiv2.forEach(ports => {
        if(!ports.classList.contains('disappear')) {
            ports.classList.add('disappear');
        }

        arrowUp_2.classList.add('disappear');
        arrowDown_1.classList.remove('disappear');
    })
}

const title_ = document.querySelectorAll('.title');

title_.forEach(function(title) {
    title.style.userSelect = 'none';
});


// Reveal Elements

const contact_div = document.querySelector('#contact_div');
const sections = document.querySelector('.section');

const revealSection = function(entries, observer) {
    entries.forEach(entry => {
        console.log(entry);

        if (entry.isIntersecting) {
            entry.target.classList.remove('section--hidden');
            observer.unobserve(entry.target);
        }
    })
};

const sectionObserver = new IntersectionObserver(revealSection, {
    roo: null,
    threshold: 0
});

sectionObserver.observe(sections);


  const images = document.querySelectorAll('.image--');

  const lazyImageObserver = function(entries, observer) {
    entries.forEach(entry => {
        console.log(entry);
        if(!entry.isIntersecting) return;

        console.log(entry);
        const getSRC = entry.target.dataset.src;
        entry.target.src = getSRC;

        entry.target.addEventListener('load', function() {
        entry.target.classList.remove('lazy-img');
        })

        observer.unobserve(entry.target);
    })
  }

  const imageObserver = new IntersectionObserver(lazyImageObserver, {
    root: null,
    threshold: 0,
  });

  images.forEach(imgs => {
    imageObserver.observe(imgs);
  })


  function myFunction_10(y) {
    if (y.matches) { // If media query matches
      sectionObserver.unobserve(sections);
      sections.classList.remove('section--hidden');

      images.forEach(imgs => {
      imageObserver.unobserve(imgs);
      imgs.classList.remove('lazy-img');
      imgs.src = imgs.getAttribute('data-src');
      })


    } else {
      sectionObserver.observe(sections);

      images.forEach(imgs => {
      imageObserver.observe(imgs);
      })
    }
  }
  
  var y = window.matchMedia("(max-width: 1000px)")
  myFunction_10(y) // Call listener function at run time
  y.addListener(myFunction_10)