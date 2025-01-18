document.addEventListener('DOMContentLoaded', () => {
    let sendButton = document.getElementById("send");
    let input = document.getElementById("inputID");

    sendButton.addEventListener('click', () => {
        let name = input.value; // Moved inside the event listener
        if (name.trim() === "") {
            console.log("Input cannot be empty.");
            return; // Exit if input is empty
        }
        if (name.toLowerCase() === "tereza" || name.toLowerCase() === "terka") {
            console.log("lol");
            window.location.href = 'terka/index.html';
        }
    });


let back = document.getElementById("back");
back.addEventListener('click', () => {
    window.location.href = '../index.html'
})

});