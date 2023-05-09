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


//  DISPLAY NONE/BLOCK CONTACT FORM

const contactLink = document.getElementById("contact-link");
const formPlacement = document.getElementById("form-placement");

contactLink.addEventListener("click", function () {
    switch (formPlacement.style.display) {
        case "block":
            formPlacement.style.display = "none";
            break;
        default:
            formPlacement.style.display = "block";
    }
});

function closeForm() {
    formPlacement.style.display = "none";
}
document.querySelector('.close-icon').addEventListener('click', closeForm);



// function CARDS ANIMATION

const card = document.querySelectorAll(".projets-card");

function animateCard(el) {
    el.addEventListener("mousemove", (e) => {
        let elReact = el.getBoundingClientRect();

        let x = e.clientX - elReact.x;
        let y = e.clientY - elReact.y;

        let midCardWidth = elReact.width / 2;
        let midCardHeight = elReact.height / 2;

        let angleY = -(x - midCardWidth) / 8;
        let angleX = (y - midCardHeight) / 8;

        let glowX = (x / elReact.width) * 100;
        let glowY = (y / elReact.height) * 100;

        el.children[0].style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.1)`;
        el.children[1].style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.1)`;
        el.children[1].style.background = `radial-gradient(circle at ${glowX}% ${glowY}%, rgb(209, 205, 205), transparent)`;
    });

    el.addEventListener("mouseleave", () => {
        el.children[0].style.transform = "rotateX(0) rotateY(0deg)";
        el.children[1].style.transform = "rotateX(0) rotateY(0deg)";
    });
}

//  gestion des projets

const CardsData = [
    {
        name: 'Calculatrice',
        link: 'https://github.com/SofianeAboulkabila/calculatrice',
        img: '/assets/img/calculatrice.png',
        skills: ['HTML', 'CSS', 'JavaScript', 'Bootstrap']
    },
    {
        name: 'Vente Vinyle',
        link: 'https://github.com/SofianeAboulkabila/ECF',
        img: '/assets/img/vinyle.png',
        skills: ['HTML', 'CSS', 'JavaScript', 'Bootstrap']
    },
    {
        name: 'Marvel API',
        link: 'https://github.com/SofianeAboulkabila/API-Marvel',
        img: '/assets/img/marvel.png',
        skills: ['HTML', 'CSS', 'JavaScript(API)']
    },
    {
        name: 'Pokemon API',
        link: 'https://github.com/SofianeAboulkabila/Pokemon-API-finale',
        img: '/assets/img/pokemon.png',
        skills: ['HTML', 'CSS', 'JavaScript(API)']
    },
    {
        name: 'Quizz JS',
        link: 'https://github.com/SofianeAboulkabila/javascript-quizz',
        img: '/assets/img/quizz.png',
        skills: ['HTML', 'CSS', 'JavaScript']
    },
];

// Objet création contenu carte HTML

class ProjetsContainer {
    constructor() {
        this.container = document.querySelector('.projets-container-secondary');
    }

    addCard(card) {
        const div = document.createElement('div');
        div.className = 'projets-card';

        animateCard(div);

        const content = document.createElement('div');
        content.className = 'projets-content-card';

        const img = document.createElement('img');
        img.src = card.img;
        img.alt = card.name;
        content.appendChild(img);

        const title = document.createElement('h3');
        title.className = 'projets-title';
        title.textContent = card.name;
        content.appendChild(title);

        const subtitle = document.createElement('div');
        subtitle.className = 'projets-sub-title';
        card.skills.forEach(skill => {
            const h4 = document.createElement('h4');
            h4.textContent = skill;
            subtitle.appendChild(h4);
        });
        content.appendChild(subtitle);

        const glow = document.createElement('div');
        glow.className = 'glow';

        div.appendChild(content);
        div.appendChild(glow);

        this.container.appendChild(div);
    }
}

const projetsContainer = new ProjetsContainer();

for (let i = 0; i < CardsData.length; i++) {
    projetsContainer.addCard(CardsData[i]);
}


//  Permet d'attribuer à chaque carte un lien vers le github du projet
const cards = document.querySelectorAll('.projets-card');
cards.forEach((card, index) => {
    const link = CardsData[index].link;

    const linkButton = document.createElement('a');
    linkButton.classList.add('projets-github-link');
    linkButton.setAttribute('href', link);
    linkButton.setAttribute('target', '_blank');
    card.parentNode.insertBefore(linkButton, card);
    linkButton.appendChild(card);

    const linkButtonAfter = document.createElement('div');
    linkButtonAfter.classList.add('projets-card-link-after');
    linkButtonAfter.innerHTML = '';
    linkButton.appendChild(linkButtonAfter);
});

// PROJETS BUTTON +1 / +1 

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

// STMP.JS API MAIL

const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const submit = document.getElementById('form-placement');

submit.addEventListener('submit', (e) => {
    e.preventDefault();


    let tbody = `
         <b>Name:</b>${fname.value}&nbsp;${lname.value}<br>
         <br>
         <b>Email:</b>${email.value}<br>
         `

    Email.send({
        SecureToken: "617c5ce0-5a93-4813-82ee-bd9b8e8ea032",
        To: 'sofiane.aboulkabila@gmail.com',
        From: "sofiane.aboulkabila@gmail.com",
        Subject: "Test email",
        Body: "test test test"
    }).then(
        message => alert(message)
    );
});