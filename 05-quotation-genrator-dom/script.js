const main = document.querySelector('main');
const quotes = [
    "Dreams don't work unless you do.",
    "Either you run the day, or the day runs you.",
    "Do what you can, with what you have, where you are.",
    "Believe you can and you're halfway there.",
    "Success is not in what you have, but who you are.",
    "It is never too late to be what you might have been.",
    "Dream bigger. Do bigger.",
    "Don't watch the clock; do what it does. Keep going.",
    "Great things never come from comfort zones.",
    "Push yourself, because no one else is going to do it for you."
];

main.addEventListener('click', () => {
    
    const para = document.createElement('p');
    const div = document.createElement('div');

    const i = quotes[Math.floor(Math.random() * quotes.length)];
    const c1 = Math.random() * 255;
    const c2 = Math.random() * 255;
    const c3 = Math.random() * 255;
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const s = Math.random() * 3;
    const r = Math.random() * 180;
    

    // console.log('clicked');
    // console.log(x);
    
    
    // Div Append
    main.appendChild(div);
    div.appendChild(para);

    div.style.position = 'absolute';
    div.style.left = `${x}%`;
    div.style.top = `${y}%`;
    div.style.rotate = `${r}deg`;
    div.style.scale = s;
    div.style.backgroundColor =  `rgba(${c1}, ${c2}, ${c3}, 0.85)`;
    div.style.width = '200px';
    div.style.height = '200px';
    div.style.overflow = 'hidden';
    div.style.padding = '1rem';
    div.style.display = 'flex';
    div.style.alignItems = 'center';
    div.style.justifyContent = 'center';
    div.style.boxShadow = '0 4px 8px rgba(96, 96, 96, 0.1)';
    div.style.color = 'white';
    div.innerText = i;
    div.style.borderRadius = '10px';
    

    // Para Append
    // main.appendChild(para);

    // para.style.position = 'absolute';
    // para.style.left = `${x}%`;
    // para.style.top = `${y}%`;
    // para.textContent = i;
    // para.style.scale = s;
    // para.style.rotate = `${r}deg`;
    // para.style.color =  `white`;
    // para.style.color =  `rgb(${c1}, ${c2}, ${c3})`;


});
