function toggleNav() {
    var navBar = document.querySelector('.nav-bar');
    navBar.classList.toggle('nav-open');
}

let currentIndex = 0;
function showCarouselItem(index) {
    const items = document.querySelectorAll('.carousel-item');
    if (index >= items.length) currentIndex = 0;
    if (index < 0) currentIndex = items.length - 1;
    for (let i = 0; i < items.length; i++) {
        items[i].style.display = 'none';
    }
    items[currentIndex].style.display = 'block';
}

function moveCarousel(step) {
    currentIndex += step;
    showCarouselItem(currentIndex);
}

showCarouselItem(currentIndex);

setInterval(() => {
    moveCarousel(1);
}, 5000);

function tam38() {
atualizarImagens(38);
}

function tam39() {
atualizarImagens(39);
}

function tam40() {
atualizarImagens(40);
}

function tam41() {
atualizarImagens(41);
}

function tam42() {
atualizarImagens(42);
}

function tam43() {
atualizarImagens(43);
}

function tam44() {
atualizarImagens(44);
}

function tam45() {
atualizarImagens(45);
}

function atualizarImagens(tamanho) {
var conjuntosDeImagens = {
38: [
    '/images/produtos/Tamanhos/38/air_force_nike_38.png',
    '/images/produtos/Tamanhos/38/dunk_low_nike_38.png',
    '/images/produtos/Tamanhos/38/forum_adidas_38.png',
    '/images/produtos/Tamanhos/38/new_balance_38.png'
],
39: [
    '/images/produtos/Tamanhos/39/229172-368-450.png',
    '/images/produtos/Tamanhos/39/443019-368-450.png',
    '/images/produtos/Tamanhos/39/512793-368-450.png',
    '/images/produtos/Tamanhos/39/514103-368-450.png'
],
40: [
    '/images/produtos/Tamanhos/40/394254-368-450.png',
    '/images/produtos/Tamanhos/40/443019-368-450 (1).png',
    '/images/produtos/Tamanhos/40/491449-368-450.png',
    '/images/produtos/Tamanhos/39/514103-368-450.png'
],
41: [
    '/images/produtos/Tamanhos/41/229172-368-450.png',
    '/images/produtos/Tamanhos/41/443019-368-450.png',
    '/images/produtos/Tamanhos/41/475977-368-450.png',
    '/images/produtos/Tamanhos/41/514103-368-450.png'
],
42: [
    '/images/produtos/Tamanhos/42/229172-368-450.png',
    '/images/produtos/Tamanhos/42/479002-368-450.png',
    '/images/produtos/Tamanhos/42/515031-368-450.png',
    '/images/produtos/Tamanhos/42/483979-368-450.png'
],
43: [
    '/images/produtos/Tamanhos/43/522013-368-450.png',
    '/images/produtos/Tamanhos/43/229172-368-450.png',
    '/images/produtos/Tamanhos/43/479033-368-450.png',
    '/images/produtos/Tamanhos/43/470998-368-450.png'
],
44: [
    '/images/produtos/Tamanhos/44/229172-368-450.png',
    '/images/produtos/Tamanhos/44/394254-368-450.png',
    '/images/produtos/Tamanhos/44/433279-368-450.png',
    '/images/produtos/Tamanhos/44/440632-368-450.png'
],
45: [
    '/images/produtos/Tamanhos/45/229172-368-450.png',
    '/images/produtos/Tamanhos/45/394254-368-450.png',
    '/images/produtos/Tamanhos/45/433279-368-450.png',
    '/images/produtos/Tamanhos/45/440632-368-450.png'
]
};

var imagens = conjuntosDeImagens[tamanho];

if (imagens) {
var conjuntoImagensDiv = document.getElementById('conjunto-imagens');
conjuntoImagensDiv.innerHTML = `
    <article class="articleBoot" id="box_boot1">
        <div class="divImgProduto">                        
            <img src="${imagens[0]}">
        </div>
    </article>
    <article class="articleBoot" id="box_boot1">
        <div class="divImgProduto">                        
            <img src="${imagens[1]}">
        </div>
    </article>
    <article class="articleBoot" id="box_boot1">
        <div class="divImgProduto">                        
            <img src="${imagens[2]}">
        </div>
    </article>
    <article class="articleBoot" id="box_boot1">
        <div class="divImgProduto">                        
            <img src="${imagens[3]}">
        </div>
    </article>
`;
}
}
document.addEventListener('DOMContentLoaded', function() {
const sizes = [38, 39, 40, 41, 42, 43, 44, 45];
let currentIndex = 2; // Índice inicial do tamanho 40

function updateSizeDisplay() {
const sizeItems = document.querySelectorAll('.box-tamanho-esquerdo li');
sizeItems.forEach(item => item.classList.remove('active'));
sizeItems[currentIndex].classList.add('active');
}

document.querySelector('.size-nav.up').addEventListener('click', function() {
if (currentIndex > 0) {
    currentIndex--;
    updateSizeDisplay();
}
});

document.querySelector('.size-nav.down').addEventListener('click', function() {
if (currentIndex < sizes.length - 1) {
    currentIndex++;
    updateSizeDisplay();
}
});

// Funções para os cliques diretos nos tamanhos
function tam38() { currentIndex = 0; updateSizeDisplay(); }
function tam39() { currentIndex = 1; updateSizeDisplay(); }
function tam40() { currentIndex = 2; updateSizeDisplay(); }
function tam41() { currentIndex = 3; updateSizeDisplay(); }
function tam42() { currentIndex = 4; updateSizeDisplay(); }
function tam43() { currentIndex = 5; updateSizeDisplay(); }
function tam44() { currentIndex = 6; updateSizeDisplay(); }
function tam45() { currentIndex = 7; updateSizeDisplay(); }

// Inicializar a exibição de tamanho
updateSizeDisplay();
});

