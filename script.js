// script.js
// ... (quotes and quote display logic remain the same)

// Falling Hearts
const fallingHeartsContainer = document.querySelector('.falling-hearts');

for (let i = 0; i < 50; i++) { // Create more hearts
    const heart = document.createElement('div');
    heart.classList.add('heart-icon');
    heart.style.setProperty('--x', `${Math.random() * 100}vw`); // Random horizontal position
    heart.style.animationDelay = `${Math.random() * 3}s`; // Random start delay
    fallingHeartsContainer.appendChild(heart);
}

// Heart interactivity (remains the same)
const heart = document.querySelector('.heart');

heart.addEventListener('mouseover', () => {
    heart.style.animationPlayState = 'paused'; // Pause on hover
});

heart.addEventListener('mouseout', () => {
    heart.style.animationPlayState = 'running'; // Resume on mouse out
});