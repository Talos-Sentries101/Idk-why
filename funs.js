// Navigation Menu
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});

// Hero Section Animation
const heroSection = document.querySelector('.hero');
const heroText = document.querySelector('.hero h1');
const heroImage = document.querySelector('.hero img');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  heroText.style.opacity = 1 - (scrollPosition / 500);
  heroImage.style.opacity = 1 - (scrollPosition / 500);
});

// Gameplay Section Modal
const gameplayImage = document.querySelector('#gameplay img');
const modal = document.createElement('div');
modal.classList.add('modal');

gameplayImage.addEventListener('click', () => {
  modal.innerHTML = `
    <img src="${gameplayImage.src}" alt="Sekiro Gameplay">
    <span class="close">&times;</span>
  `;
  document.body.appendChild(modal);
  modal.style.display = 'flex';

  const closeButton = modal.querySelector('.close');
  closeButton.addEventListener('click', () => {
    modal.remove();
  });
});

// Media Section Video
const videoFrame = document.querySelector('#media iframe');
const videoButton = document.createElement('button');
videoButton.textContent = 'Play Video';
videoButton.classList.add('play-button');

videoFrame.parentNode.insertBefore(videoButton, videoFrame);
videoButton.addEventListener('click', () => {
  videoFrame.src = videoFrame.dataset.src;
  videoButton.style.display = 'none';
});

// Footer Scroll-to-Top Button
const scrollToTopButton = document.createElement('button');
scrollToTopButton.textContent = 'Back to Top';
scrollToTopButton.classList.add('scroll-to-top');

document.footer.appendChild(scrollToTopButton);
scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Dark Mode Toggle
const darkModeToggle = document.createElement('button');
darkModeToggle.textContent = 'Dark Mode';
darkModeToggle.classList.add('dark-mode-toggle');

document.header.appendChild(darkModeToggle);
darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

