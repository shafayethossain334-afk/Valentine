// Function to create floating hearts
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.innerHTML = '❤️';

  // Random position and timing
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = Math.random() * 2 + 3 + 's';
  heart.style.fontSize = Math.random() * 20 + 10 + 'px';

  document.body.appendChild(heart);

  // Remove heart after it falls to keep the site fast
  setTimeout(() => {
    heart.remove();
  }, 5000);
}

// Generate a heart every 300ms
setInterval(createHeart, 300);

// The Prank Trigger
function revealPrank() {
  const prank = document.getElementById('prank-section');
  prank.style.display = 'flex';
}