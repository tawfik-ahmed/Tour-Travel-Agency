
const toggleBtn = document.getElementById('menu-btn');
const navbar = document.querySelector('.navbar');

toggleBtn.addEventListener('click', _ => navbar.classList.toggle('active'));

document.addEventListener('click', e => {
    if (e.target !== toggleBtn && e.target !== navbar) navbar.classList.remove('active');
});

document.querySelector('.about .controls').addEventListener('click', (e) => {
    const src = e.target.dataset.src;
    if (src) document.querySelector('.about .video').src = src;
});
