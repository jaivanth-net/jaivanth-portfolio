const texts = [
    "CSE Student | Aspiring Cloud Engineer",
    "Student @ Jerusalem College of Engineering"
];

let currentIndex = 0;

const scrollText = document.getElementById("scroll-text");

setInterval(() => {

    currentIndex++;

    if (currentIndex >= texts.length) {
        currentIndex = 0;
    }

    scrollText.style.animation = "none";

    void scrollText.offsetWidth;

    scrollText.textContent = texts[currentIndex];

    scrollText.style.animation = "textScroll 0.8s ease-in-out";

}, 3000);