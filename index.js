// Assuming there is an element with the ID 'send' in the HTML
const special = document.getElementById('special');
const aboutMe = document.getElementById('aboutMe');
const projects = document.getElementById('projects');

if (special) {
    special.addEventListener('click', () => {
        window.location.href = 'special/index.html';
    });
}

if(aboutMe) {
    aboutMe.addEventListener('click', () => {
        window.location.href = 'AboutMe/index.html';
    })
}

document.addEventListener("DOMContentLoaded", (event) => {
if(projects) {
    projects.addEventListener('click', () => {
        window.location.href = 'phasmo/index.html';
    })
}
});
function lol() {
    window.location.href = 'special/index.html';
}

function lol2() {
    window.location.href = 'AboutMe/index.html';

}

function lol3() {
    window.location.href = 'phasmo/index.html';
}

function yesIWill() {
        window.location.href = 'yesiwill.html';
}
