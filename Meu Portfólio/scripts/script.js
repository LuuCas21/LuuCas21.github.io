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

function anchor_1() {
    window.open('https://salaodobrooklyn.netlify.app');
}

function anchor_2() {
    window.open('https://github.com/LuuCas21/salaodobrooklyn');
}

function anchor_3() {
    window.open('https://fivesensesart.netlify.app/?');
}

function anchor_4() {
    window.open('https://github.com/LuuCas21/imageGallery');
}

function anchor_5() {
    window.open('https://www.linkedin.com/in/lucassouza200/');
}

function anchor_6() {
    window.open('https://github.com/LuuCas21');
}

function anchor_7() {
    window.open('https://orkut-br.netlify.app');
}

function anchor_8() {
    window.open('https://github.com/LuuCas21/OrkutLoginPage');
}

function anchor_10() {
    window.open('https://t.me/LuuCas200')
}

const pt_button = document.getElementById('pt');
const eng_button = document.getElementById('eng');
const ptg_text = document.querySelector('.ptg-13');
const eng_text = document.querySelector('.eng-13');
const ptg_text2 = document.querySelector('.ptg-14');
const eng_text2 = document.querySelector('.eng-14');
const ptg_text3 = document.querySelector('.ptg-15');
const eng_text3 = document.querySelector('.eng-15');
const ptg_text4 = document.querySelector('.ptg-16');
const eng_text4 = document.querySelector('.eng-16');
const ptg_text5 = document.querySelector('.ptg-17');
const eng_text5 = document.querySelector('.eng-17');
const ptg_text6 = document.querySelector('.ptg-18');
const eng_text6 = document.querySelector('.eng-18');
const ptg_text7 = document.querySelector('.ptg-19');
const eng_text7 = document.querySelector('.eng-19');

eng_button.addEventListener('click', function() {
    const eng_1 = document.querySelector('.eng-1');
    const eng_2 = document.querySelector('.eng-2');
    const eng_3 = document.querySelector('.eng-3');
    const eng_4 = document.querySelector('.eng-4');
    const eng_5 = document.querySelector('.eng-5');
    const eng_6 = document.querySelector('.eng-6');
    const eng_7 = document.querySelector('.eng-7');
    const eng_8 = document.querySelector('.eng-8');
    const eng_9 = document.querySelector('.eng-9');
    const eng_10 = document.querySelector('.eng-10');
    const eng_11 = document.querySelector('.eng-11');
    const eng_12 = document.querySelector('.eng-12');

    eng_1.innerHTML = 'Front-end Developer';
    eng_2.innerHTML = 'Projects';
    eng_3.innerHTML = 'Contacts';
    eng_4.innerHTML = 'About';

    //Projetos

    eng_5.innerHTML = 'Brooklyn Hair Salon';
    eng_6.innerHTML = 'Technologies used:';
    eng_7.innerHTML = 'Technologies used:';
    eng_8.innerHTML = 'Orkut Login Page';
    eng_9.innerHTML = 'Technologies used:';
    eng_10.innerHTML = 'Projects';
    eng_11.innerHTML = 'Contacts';
    eng_12.innerHTML = 'About';

    //Sobre

   

    if(pt_button.classList.contains('active') && eng_text && eng_text2 && eng_text3 && eng_text4 && eng_text5 && eng_text6 && eng_text7.classList.contains('disappear')) {
        pt_button.classList.add('inactive');
        eng_button.classList.remove('inactive')
        eng_button.classList.add('active')
        ptg_text.classList.add('disappear');
        eng_text.classList.remove('disappear');

        ptg_text2.classList.add('disappear');
        eng_text2.classList.remove('disappear');
        
        ptg_text3.classList.add('disappear');
        eng_text3.classList.remove('disappear');

        ptg_text4.classList.add('disappear');
        eng_text4.classList.remove('disappear');

        ptg_text5.classList.add('disappear');
        eng_text5.classList.remove('disappear');

        ptg_text6.classList.add('disappear');
        eng_text6.classList.remove('disappear');

        ptg_text7.classList.add('disappear');
        eng_text7.classList.remove('disappear');
    }

    
});

pt_button.addEventListener('click', function() {
    const ptg_1 = document.querySelector('.ptg-1');
    const ptg_2 = document.querySelector('.ptg-2');
    const ptg_3 = document.querySelector('.ptg-3');
    const ptg_4 = document.querySelector('.ptg-4');
    const ptg_5 = document.querySelector('.ptg-5');
    const ptg_6 = document.querySelector('.ptg-6');
    const ptg_7 = document.querySelector('.ptg-7');
    const ptg_8 = document.querySelector('.ptg-8');
    const ptg_9 = document.querySelector('.ptg-9');
    const ptg_10 = document.querySelector('.ptg-10');
    const ptg_11 = document.querySelector('.ptg-11');
    const ptg_12 = document.querySelector('.ptg-12');

    ptg_1.innerHTML = 'Desenvolvedor Front-end';
    ptg_2.innerHTML = 'Projetos';
    ptg_3.innerHTML = 'Contatos';
    ptg_4.innerHTML = 'Sobre';

    //Projetos

    ptg_5.innerHTML = 'Salão do Brooklyn';
    ptg_6.innerHTML = 'Tecnologias utilizadas:';
    ptg_7.innerHTML = 'Tecnologias utilizadas:';
    ptg_8.innerHTML = 'Página de Login Orkut';
    ptg_9.innerHTML = 'Tecnologias utilizadas:';
    ptg_10.innerHTML = 'Projetos';
    ptg_11.innerHTML = 'Contatos';
    ptg_12.innerHTML = 'Sobre';

    if(eng_button.classList.contains('active') && ptg_text && ptg_text2 && ptg_text3 && ptg_text4 && ptg_text5 && ptg_text6 && ptg_text7.classList.contains('disappear')) {
        eng_button.classList.remove('active');
        eng_button.classList.add('inactive');
        pt_button.classList.remove('inactive');
        pt_button.classList.add('active');

        ptg_text.classList.remove('disappear');
        eng_text.classList.add('disappear');

        ptg_text2.classList.remove('disappear');
        eng_text2.classList.add('disappear');

        ptg_text3.classList.remove('disappear');
        eng_text3.classList.add('disappear');

        ptg_text4.classList.remove('disappear');
        eng_text4.classList.add('disappear');

        ptg_text5.classList.remove('disappear');
        eng_text5.classList.add('disappear');

        ptg_text6.classList.remove('disappear');
        eng_text6.classList.add('disappear');

        ptg_text7.classList.remove('disappear');
        eng_text7.classList.add('disappear');

    }
});

/*const changeColor = function() {
    let engPressed = console.log('EnglishClicked');
    let ptgPressed = console.log('PortugueseClicked');
}*/

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