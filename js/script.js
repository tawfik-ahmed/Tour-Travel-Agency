let navbar = document.querySelector('.header .navbar');

document.getElementById('menu-btn').addEventListener('click', _ => navbar.classList.toggle('active'));

document.querySelector('.about .controls').addEventListener('click', (e) => {

    const src = e.target.dataset.src;
    if (src) document.querySelector('.about .video').src = src;
})