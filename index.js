// Assuming there is an element with the ID 'send' in the HTML
const send = document.getElementById('send');

if (send) {
    send.addEventListener('click', () => {
        window.location.href = 'special/index.html';
    });
}

function lol(){
    window.location.href = 'special/index.html';
}
