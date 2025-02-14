function revealMessage() {
    document.querySelector('.heart-container').style.display = 'none';
    let messageBox = document.getElementById('messageBox');
    messageBox.style.display = 'block';
    typewriterEffect("messageText", "You are my heart and soul!"); // Replace with your message
    startFallingHearts();
}

function typewriterEffect(elementId, text) {
    let i = 0;
    let element = document.getElementById(elementId);
    element.innerHTML = "";
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, 80);
        }
    }
    type();
}

function startFallingHearts() {
    for (let i = 0; i < 15; i++) {
        let heart = document.createElement("img");
        heart.src = "heartSmall.png"; // Replace with your heart image path
        heart.classList.add("falling-hearts");
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.animationDuration = `${2 + Math.random() * 3}s`;
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 5000);
    }
}

function calculateLove() {
    let name1 = document.getElementById("name1").value;
    let name2 = document.getElementById("name2").value;
    let compatibility = (name1.length + name2.length) % 101; // Deterministic calculation

    document.getElementById("loveResult").innerText = `Love Compatibility: ${compatibility}% ❤️`;
}

function displayLoveNote() {
    let note = document.getElementById("loveNote").value;
    document.getElementById("displayNote").innerText = `Your Love Note: ${note}`;
}

function showImage(imageSrc) {
    // Implement image display logic here (e.g., open in a lightbox)
    alert("Clicked on: " + imageSrc); // Placeholder
}

function changeBackgroundColor() {
    const colors = ["#ff758c", "#ff7eb3", "#f06292", "#ba68c8", "#9fa8da"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.background = `linear-gradient(135deg, ${randomColor}, ${lightenColor(randomColor, 40)})`;

    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.backgroundColor = getRandomColor();
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 3000);
    }
}

function lightenColor(hex, percent) {
    let r = parseInt(hex.slice(1, 3), 16),
        g = parseInt(hex.slice(3, 5), 16),
        b = parseInt(hex.slice(5, 7), 16);

    r = parseInt((1 + percent / 100) * r);
    g = parseInt((1 + percent / 100) * g);
    b = parseInt((1 + percent / 100) * b);

    r = r < 255 ? r : 255;
    g = g < 255 ? g : 255;
    b = b < 255 ? b : 255;

    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function showSurprise() {
    document.getElementById("surpriseMessage").style.display = "block";
    document.getElementById("surpriseMessage").textContent = "Happy Valentine's Day! You're awesome!"; // Your surprise message
}

function toggleHeartColor() {
    const heart = document.getElementById("interactiveHeart");
    if (heart.style.backgroundImage.includes("heart.png")) {
        heart.style.backgroundImage = "url('heart.png')"; // Path to the second heart image
    } else {
        heart.style.backgroundImage = "url('heart.png')"; // Back to the first heart image
    }
}