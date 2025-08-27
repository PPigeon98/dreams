function getRandomValue(min, max) {
  return Math.random() * (max - min) + min;
}

function createShooting() {
  const shooting = document.createElement('div');
  
  const right = getRandomValue(-30, 100);
  const size = getRandomValue(1, 10);
  const bright = getRandomValue(70, 100);
  const animationDelay = getRandomValue(0, 10);
  const animationDuration = getRandomValue(2, 8);
  
  shooting.style.position = 'absolute';
  shooting.style.opacity = '0';
  shooting.style.top = '-4%';
  shooting.style.right = `${right}%`;
  shooting.style.width = `${size}px`;
  shooting.style.height = `${size}px`;
  shooting.style.background = `hsl(0, 0%, ${bright}%)`;
  shooting.style.borderRadius = '50%';
  shooting.style.boxShadow = `0 0 0 ${size / 1.5}px rgba(255, 255, 255, 0.1), 0 0 0 ${size * 1.2}px rgba(255, 255, 255, 0.1), 0 0 ${size * 2.5}px rgba(255, 255, 255, 1)`;
  shooting.style.animation = `shooting ${animationDuration}s linear infinite`;
  shooting.style.animationDelay = `${animationDelay}s`;
  
  const before = document.createElement('div');

  const size2 = getRandomValue(250, 400);

  before.style.position = 'absolute';
  before.style.transform = 'translateY(-50%)';
  before.style.top = '50%';
  before.style.width = `${size2}px`;
  before.style.height = '1px';
  before.style.background = 'linear-gradient(90deg, #fff, transparent)';
  
  shooting.appendChild(before);
  
  return shooting;
}

function createStar() {
  const star = document.createElement('div');
  
  const top = getRandomValue(0, 100);
  const left = getRandomValue(0, 100);
  const size = getRandomValue(0.1, 3);
  const brightness = getRandomValue(60, 100);
  const animationSpeed = getRandomValue(2, 6);
  const animationDelay = getRandomValue(0, 3);
  
  star.style.position = 'absolute';
  star.style.opacity = '0.3';
  star.style.top = `${top}%`;
  star.style.left = `${left}%`;
  star.style.width = `${size}px`;
  star.style.height = `${size}px`;
  star.style.background = `hsl(0, 0%, ${brightness}%)`;
  star.style.borderRadius = '50%';
  star.style.boxShadow = `0 0 ${size * 2}px rgba(255, 255, 255, 0.8)`;
  star.style.animation = `twinkle ${animationSpeed}s ease-in-out infinite`;
  star.style.animationDelay = `${animationDelay}s`;
  
  return star;
}

function generateShootings() {
  const container = document.getElementById('shooting');
  
  for (let i = 0; i < 20; i++) {
    const shooting = createShooting();
    container.appendChild(shooting);
  }
}

function generateStars() {
  const container = document.getElementById('twinkling');
  
  for (let i = 0; i < 150; i++) {
    const star = createStar();
    container.appendChild(star);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  generateStars();
  generateShootings();
});