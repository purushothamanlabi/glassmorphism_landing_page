const typingSpan = document.getElementById('typing');
const textToType = "WELCOME";
const typingDelay = 150; // milliseconds between each character
const endDelay = 1000; // milliseconds delay after finishing typing
let charIndex = 0;
function type() {
    if (charIndex < textToType.length) {
        typingSpan.textContent += textToType[charIndex];
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        setTimeout(resetTyping, endDelay);
    }
}

function resetTyping() {
    typingSpan.textContent = '';
    charIndex = 0;
    type();
}
document.addEventListener("DOMContentLoaded", type);

