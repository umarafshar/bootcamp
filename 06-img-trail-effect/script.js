const images = [
  './Assets/img1.jpg',
  './Assets/img2.jpg',
  './Assets/img3.jpg',
  './Assets/img4.jpg',
  './Assets/img5.jpg',
  './Assets/img6.jpg',
  './Assets/img7.jpg',
  './Assets/img8.jpg',
  './Assets/img9.jpg',
]

const container = document.querySelector('.container');

// sec.addEventListener('click', () => {
// const img = document.createElement('img');
// const container = document.querySelector('.container');
// img.src = images[Math.floor(Math.random() * images.length)];
// container.appendChild(img);

// img.style.position = 'absolute';
// img.style.top = `${Math.random() * 100}%`;
// img.style.left = `${Math.random() * 100}%`;
// img.style.transform = 'translate(-50%, -50%)';
// img.style.rotate = `${Math.random() * 180}deg`;
// img.style.scale = `${Math.random() + 0.5}`;
// img.style.width = '350px';
// img.style.height = '250px';
// img.style.objectFit = 'cover';
// img.style.borderRadius = '15px';
// img.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';

// });

let currentImgIndex = 0;
let lastX = 0;
let lastY = 0;
let distance = window.innerWidth < 900 ? 100 : 180;

window.addEventListener('resize', () => {
    distance = window.innerWidth < 900 ? 100 : 180;
})

window.addEventListener('mousemove', (e) => {
    const dX = e.clientX - lastX;
    const dY = e.clientY - lastY;
    const dist = Math.sqrt(dX * dX + dY * dY);

    // console.log(`First Call: lastX: ${lastX}\nlastY: ${lastY}\ndist: ${dist}\ndistance: ${distance}`);

    if (dist > distance) {
        createTrail(e.clientX, e.clientY);
        lastX = e.clientX;
        lastY = e.clientY;
    }

    // console.log(`Second Call: lastX: ${lastX}\nlastY: ${lastY}\ndist: ${dist}\ndistance: ${distance}`);
});

function createTrail(x, y) {
    const img = document.createElement('img');
    img.classList.add('img-trail');
    img.src = images[currentImgIndex];
    container.appendChild(img);

currentImgIndex = (currentImgIndex + 1) % images.length;

gsap.set(img, {
    x: x,
    y: y,
    scale: 0,
    opacity: 0,
    rotation: gsap.utils.random(-20, 20),
    transformOrigin: '50% 50%',
});

gsap.to(img, {
    scale: gsap.utils.random(0.5, 1),
    opacity: 1,
    duration: 0.5,
    ease: 'power2.out',
});

gsap.to(img, {
    y: y - gsap.utils.random(50, 150),
    opacity: 0,
    duration: 1.5,
    ease: 'power2.in',
    delay: 0.5,
    onComplete: () => {
        img.remove();
    }
});
}