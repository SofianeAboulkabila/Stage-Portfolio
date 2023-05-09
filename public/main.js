// BURGER MENU + ANIMATION SLIDE-IN / SLIDE-OUT
const toggle = document.querySelector(".toggle");
const items = document.querySelectorAll(".nav-item");

function toggleNavMenu() {
    items.forEach(navItem => {
        if (navItem.classList.contains("active")) {
            navItem.classList.remove("active", "slide-in");
            navItem.classList.add("slide-out");
        } else {
            navItem.classList.add("active", "slide-in");
            navItem.classList.remove("slide-out");
        }
    });
}

toggle.addEventListener("click", toggleNavMenu);


// FERMER LE MENU EN CAS DE CLIQUE SUR NAV-LINK 'data-auto-toggle'

function closeNavMenu() {
    items.forEach(navItem => {
        navItem.classList.remove("active", "slide-in");
        navItem.classList.add("slide-out");
    });
}

const autoToggleElements = document.querySelectorAll('[data-auto-toggle]');
autoToggleElements.forEach(element => {
    element.addEventListener('click', () => {
        closeNavMenu();
    });
});

// CARDS ANIMATION

const card = document.querySelectorAll(".projets-card");

card.forEach(el => {
    el.addEventListener("mousemove", e => { 
        

        let elReact = el.getBoundingClientRect();

        let x = e.clientX - elReact.x;
        let y = e.clientY - elReact.y;

        let midCardWidth = elReact.width / 2;
        let midCardHeight = elReact.height / 2;

        let angleY = -(x - midCardWidth) / 8;
        let angleX = (y - midCardHeight) / 8;

        let glowX = x / elReact.width * 100;
        let glowY = y / elReact.height * 100;

        el.children[0].style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.1)`;
        el.children[1].style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.1)`;
        el.children[1].style.background = `radial-gradient(circle at ${glowX}% ${glowY}% , rgb(209, 205, 205), transparent)`;
    });

    el.addEventListener("mouseleave", () => {
        el.children[0].style.transform = "rotateX(0) rotateY(0deg)";
        el.children[1].style.transform = "rotateX(0) rotateY(0deg)";
    });
});


// PROJETS BUTTON +1 / +1 

const projetsContainer = document.querySelector('.projets-container');
const projetsContainerSecondary = document.querySelector('.projets-container-secondary');
const projetsCards = document.querySelectorAll('.projets-card');
const plusOneButton = document.querySelector('#plus-one');
const minusOneButton = document.querySelector('#minus-one');

let cardCount;

// Fonction pour déterminer le nombre de cartes à afficher en fonction de la largeur de l'écran
function setCardCount() {
    if (window.innerWidth <= 768) {
        cardCount = 2;
        minusOneButton.style.display = 'none';
    } else {
        cardCount = projetsCards.length;
        if (cardCount > 2) {
            minusOneButton.style.display = '';
        } else {
            minusOneButton.style.display = 'none';
        }
    }
}

// Fonction pour afficher le nombre de cartes défini par cardCount
function displayCards() {
    for (let i = 0; i < projetsCards.length; i++) {
        if (i < cardCount) {
            projetsCards[i].style.display = '';
        } else {
            projetsCards[i].style.display = 'none';
        }
    }
}


setCardCount();
displayCards();


window.addEventListener('resize', () => {
    setCardCount();
    displayCards();
});

plusOneButton.addEventListener('click', () => {
    cardCount++;
    if (cardCount >= projetsCards.length) {
        plusOneButton.style.display = 'none';
    }
    if (cardCount > 2) {
        minusOneButton.style.display = '';
    }
    displayCards();
});

minusOneButton.addEventListener('click', () => {
    cardCount--;
    if (cardCount <= 2) {
        minusOneButton.style.display = 'none';
    }
    if (cardCount < projetsCards.length) {
        plusOneButton.style.display = '';
    }
    displayCards();
});

