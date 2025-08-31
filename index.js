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
  shooting.style.top = '-8%';
  shooting.style.right = `${right}%`;
  shooting.style.width = `${size}px`;
  shooting.style.height = `${size}px`;
  shooting.style.background = `hsl(0, 0%, ${bright}%)`;
  shooting.style.borderRadius = '50%';
  shooting.style.boxShadow = `0 0 0 ${size / 1.5}px rgba(255, 255, 255, 0.1), 0 0 0 ${size * 1.2}px rgba(255, 255, 255, 0.1), 0 0 ${size * 2.5}px rgba(255, 255, 255, 1)`;
  shooting.style.animation = `shooting ${animationDuration}s linear infinite`;
  shooting.style.animationDelay = `${animationDelay}s`;
  
  const tail = document.createElement('div');

  const size2 = getRandomValue(250, 400);

  tail.style.position = 'absolute';
  tail.style.transformOrigin = 'left center';
  tail.style.transform = 'translateY(-50%) translateX(' + (size / 2) + 'px) rotate(-45deg)';
  tail.style.top = '50%';
  tail.style.width = `${size2}px`;
  tail.style.height = '1px';
  tail.style.background = 'linear-gradient(90deg, #fff, transparent)';
  
  shooting.appendChild(tail);
  
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

function gachaa() {
  const luck = Math.random();
  if (luck > 0.25) return;

  const container = document.getElementById('shooting');
  const shooting = document.createElement('div');
  shooting.classList.add('gachaStar');

  const right = getRandomValue(0, 60);
  const size = getRandomValue(22, 33);
  const animationDelay = getRandomValue(10,42);
  const animationDuration = getRandomValue(4, 8);
  console.log("ggs " + animationDelay);

  shooting.style.position = 'absolute';
  shooting.style.top = '-10%';
  shooting.style.right = `${right}%`;
  shooting.style.width = `${size}px`;
  shooting.style.height = `${size}px`;
  shooting.style.background = 'transparent';
  shooting.style.borderRadius = '50%';
  shooting.style.animation = `shooting ${animationDuration}s linear 1 forwards`;
  shooting.style.animationDelay = `${animationDelay}s`;

  const tail = document.createElement('div');
  const size2 = getRandomValue(260, 420);
  tail.style.position = 'absolute';
  tail.style.transformOrigin = 'left center';
  tail.style.transform = 'translateY(50%) translateX(' + (size / 2) + 'px) rotate(-45deg)';
  tail.style.top = '50%';
  tail.style.width = `${size2}px`;
  tail.style.height = '5px';
  tail.style.background = 'linear-gradient(90deg, rgba(255, 215, 0, 0.95), transparent)';

  shooting.appendChild(tail);

  const starImg = document.createElement('img');
  starImg.src = 'images/star.png';
  starImg.style.position = 'absolute';
  starImg.style.top = '50%';
  starImg.style.left = '50%';
  starImg.style.transform = 'translateY(-50%) translateX(-50%)';
  starImg.style.width = `1000%`;
  starImg.style.height = `1000%`;
  starImg.style.objectFit = 'contain';
  starImg.draggable = false;

  shooting.appendChild(starImg);

  const hitbox = document.createElement('div');
  hitbox.style.position = 'absolute';
  hitbox.style.left = '50%';
  hitbox.style.top = '50%';
  hitbox.style.transform = 'translate(-50%, -50%)';
  hitbox.style.width = `${size * 4}px`;
  hitbox.style.height = `${size * 2.2}px`;
  hitbox.style.borderRadius = '50%';
  hitbox.style.background = 'rgba(0, 0, 0, 0)';
  shooting.appendChild(hitbox);

  hitbox.addEventListener('click', (event) => {
    shooting.remove();

    const gachaContainer = document.getElementById('gachaContainer');

    const fallen = document.createElement('img');
    fallen.src = 'images/fallen.png';
    fallen.classList.add('qiqi');
    fallen.style.position = 'absolute';
    fallen.style.left = `${event.clientX}px`;
    fallen.style.top = `${event.clientY}px`;
    fallen.style.transform = 'translate(-50%, -50%)';
    fallen.style.width = `${size * 2.2}px`;
    fallen.style.height = 'auto';
    fallen.style.zIndex = '1200';
    fallen.draggable = false;

    gachaContainer.appendChild(fallen);

    setTimeout(() => {
      fallen.style.transition = 'opacity 727ms ease';
      fallen.style.opacity = '0';
      setTimeout(() => fallen.remove(), 727);
    }, 727);
  });

  shooting.addEventListener('animationend', () => {
    shooting.remove();
  });

  container.appendChild(shooting);
}

let counter = 1;
let click = true;

function count() {
  if (!click) return;
  
  const sheep = document.getElementById('sheepHitbox');

  sheep.textContent = `${counter}`;
  counter++;
  click = false;
}

document.addEventListener('DOMContentLoaded', () => {
  generateStars();
  generateShootings();

  const home = document.getElementById('startContainer');
  const about = document.getElementById('aboutContainer');
  const interest = document.getElementById('interestContainer');
  const link = document.getElementById('linkContainer');
  const gacha = document.getElementById('gachaContainer');
  const b0 = document.getElementById('b0');
  const b1 = document.getElementById('b1');
  const b2 = document.getElementById('b2');
  const b3 = document.getElementById('b3');
  const b4 = document.getElementById('b4');
  const b5 = document.getElementById('b5');
  const b6 = document.getElementById('b6');
  const b7 = document.getElementById('b7');
  const sheep = document.getElementById('sheepHitbox');
  const sheepContainer = document.getElementById('sheepContainer');

  sheep.addEventListener('click', () => {
    count();
  });
  sheepContainer.addEventListener('animationiteration', () => {
    sheep.textContent = '';
    click = true;
  });
  b0.addEventListener('click', () => {
    home.classList.add('fade');
    setTimeout(() => {
      home.style.display = 'none';
      gacha.style.display = 'block';
      void gacha.offsetWidth;
      gacha.classList.remove('fade');
      gachaa();
    }, 500);
  });
  b1.addEventListener('click', () => {
    home.classList.add('fade');
    setTimeout(() => {
      home.style.display = 'none';
      about.style.display = 'block';
      void gacha.offsetWidth;
      about.classList.remove('fade');
    }, 500);
  });
  b2.addEventListener('click', () => {
    home.classList.add('fade');
    setTimeout(() => {
      home.style.display = 'none';
      interest.style.display = 'block';
      void gacha.offsetWidth;
      interest.classList.remove('fade');
    }, 500);
  });
  b3.addEventListener('click', () => {
    home.classList.add('fade');
    setTimeout(() => {
      home.style.display = 'none';
      link.style.display = 'block';
      void gacha.offsetWidth;
      link.classList.remove('fade');
    }, 500);
  });
  b4.addEventListener('click', () => {
    about.classList.add('fade');
    setTimeout(() => {
      home.style.display = 'block';
      about.style.display = 'none';
      void home.offsetWidth;
      home.classList.remove('fade');
    }, 500);
  });
  b5.addEventListener('click', () => {
    interest.classList.add('fade');
    setTimeout(() => {
      home.style.display = 'block';
      interest.style.display = 'none';
      void home.offsetWidth;
      home.classList.remove('fade');
    }, 500);
  });
  b6.addEventListener('click', () => {
    link.classList.add('fade');
    setTimeout(() => {
      home.style.display = 'block';
      link.style.display = 'none';
      void home.offsetWidth;
      home.classList.remove('fade');
    }, 500);
  });
  b7.addEventListener('click', () => {
    document.querySelectorAll('.gachaStar').forEach((a) => a.remove());
    document.querySelectorAll('.qiqi').forEach((a) => a.remove());
    gacha.classList.add('fade');
    setTimeout(() => {
      home.style.display = 'block';
      gacha.style.display = 'none';
      void home.offsetWidth;
      home.classList.remove('fade');
    }, 500);
  });
});