// Assuming there is an element with the ID 'send' in the HTML
const special = document.getElementById('special');
const aboutMe = document.getElementById('aboutMe');

if (special) {
    special.addEventListener('click', () => {
        window.location.href = 'special/index.html';
    });
}

if(aboutMe) {
    aboutMe.addEventListener('click', () => {
        window.location.href = 'AboutMe/index.html'
    })
}

function lol() {
    window.location.href = 'special/index.html';
}

function lol2() {
    window.location.href = 'AboutMe/index.html'

}