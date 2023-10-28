const doc = document;
const slideList = doc.querySelectorAll('.slide');
const navList = doc.querySelectorAll('.nav__button');
const prev = doc.querySelector('.slider-btn_prev');
const next = doc.querySelector('.slider-btn_next');

const array = [
    {
        img: 'img/steampunk1.jpg',
        title: 'Стимпанк',
        text: 'Стимпа́нк (Стімпанк) або паропа́нк (англ. steam + punk, «пара» + «протест, конфлікт») — підвид фантастики, дія якого відбувається у світі, де широко використовуються технології парових машин, що замінюють електроніку.'
    },

    {
        img: 'img/steampunk2.jpg',
        title: 'Історія',
        text: 'Термін «стимпанк» вперше використали два письменники, Джеймс Блейлок і Кевін Джетер, під час дискусії на сторінках журналу «Locus» в 1987 році. Термін виник як пародійне протиставлення кіберпанку, тому ранній стимпанк створювався за традиційними сценаріями свого «старшого брата» з механічним перенесенням дії в реальність, де панують парові технології.'
    },

    {
        img: 'img/steampunk3.jpg',
        title: 'Стиль',
        text: 'Загальний стиль стимпанку виглядає цинічним (грубо-відвертим) і песимістичним (антиутопічним). Антиутопія прикрашається стилістикою нуару, до неї додаються виразні і загальнозрозумілі мотиви бульварної фантастики (детективи, геніальні вчені, Дикий Захід, таємничі стародавні раси). Пізніше в стимпанк влилися позитивніші елементи — романтична чарівність науки, утопізм, естетика «старої доброї Англії».'
    },

    {
        img: 'img/steampunk4.jpg',
        title: 'Популярність',
        text: 'Стимпанк виник як літературний жанр, але популярності набув багато в чому завдяки коміксам, рольовим іграм, телесеріалам та аніме.'
    },

    {
        img: 'img/steampunk5.jpg',
        title: 'Елементи жанру',
        text: 'Типові елементи жанру: технології парових машин, зброя часів промислової революції, інформаційні технології вікторіанської епохи, одяг і аксесуари вікторіанської Англії , урбаністичний антураж.'
    }
];

let i = 0;

navList.forEach(function(navNum){
    navNum.onclick = function(){
        slideList[i].classList.remove('slide_active');
        navList[i].classList.remove('nav__activ');

        i = this.dataset.number - 1;

        slideList[i].classList.add('slide_active');
        navList[i].classList.add('nav__activ');
    };
});

prev.onclick = function(){
    prevClick(slideList, navList);
};

function prevClick(list, nav){
    list[i].classList.remove('slide_active');
    nav[i].classList.remove('nav__activ');    
    i--;

    if(i < 0){
        i = list.length - 1;
    };

    list[i].classList.add('slide_active');
    nav[i].classList.add('nav__activ');
};

next.onclick = function(){
    nextClick(slideList, navList);
};

function nextClick(list, nav){
    list[i].classList.remove('slide_active');
    nav[i].classList.remove('nav__activ');
    i++;

    if(i >= list.length){
        i = 0;
    };

    list[i].classList.add('slide_active');
    nav[i].classList.add('nav__activ');
};

const navSite = array.map(function(item){
    return `
        <div class="steampunk">
            <img src="${item.img}" alt="" class="steampunk__photo">
        </div>

        <div class="steampunk">
            <h2>
                ${item.title}
            </h2>

            <p class="steampunk__text">
                ${item.text}
            </p>
        </div>
    `
});

slideList.forEach(function(slide, index){
    slide.innerHTML = navSite[index];
});











