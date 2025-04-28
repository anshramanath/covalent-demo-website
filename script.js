// Neon Orange Cursor Dot with Smooth Lag
const cursor = document.querySelector('.cursor-dot');

let mouseX = 0;
let mouseY = 0;
let currentX = 0;
let currentY = 0;
const speed = 0.5; // Fast but smooth

window.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateCursor() {
  currentX += (mouseX - currentX) * speed;
  currentY += (mouseY - currentY) * speed;

  cursor.style.top = `${currentY}px`;
  cursor.style.left = `${currentX}px`;

  requestAnimationFrame(animateCursor);
}

animateCursor();

// FAQ Expand/Collapse Smoothly
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
  question.addEventListener('click', () => {
    const faqItem = question.parentElement;
    const isActive = faqItem.classList.contains('active');

    // Close all
    faqQuestions.forEach(q => q.parentElement.classList.remove('active'));

    // Toggle current
    if (!isActive) {
      faqItem.classList.add('active');
    }
  });
});