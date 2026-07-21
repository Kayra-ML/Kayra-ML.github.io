import './style.css';

// Simple Typing Effect
const texts = ["intelligent systems.", "beautiful interfaces.", "things that scale.", "data pipelines."];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';
let isDeleting = false;

function type() {
  if (count === texts.length) {
    count = 0; // Loop back to the first text
  }
  
  currentText = texts[count];

  if (isDeleting) {
    letter = currentText.slice(0, --index);
  } else {
    letter = currentText.slice(0, ++index);
  }

  document.getElementById('typed-text').textContent = letter;

  let typeSpeed = isDeleting ? 50 : 100;

  if (!isDeleting && letter.length === currentText.length) {
    typeSpeed = 2000; // Pause at the end of the word
    isDeleting = true;
  } else if (isDeleting && letter.length === 0) {
    isDeleting = false;
    count++;
    typeSpeed = 500; // Pause before starting the next word
  }

  setTimeout(type, typeSpeed);
}

// Start typing effect on load
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(type, 1000);
});
