const moon = document.getElementById('moon');
const stars = document.getElementById('stars');
const btn = document.getElementById('btn');
const text = document.getElementById('text');
const mountains_front = document.getElementById('mountains_front');
const mountains_behind = document.getElementById('mountains_behind');
const header = document.querySelector('header');


window.addEventListener('scroll', function(){
    const value = window.scrollY;
    stars.style.left = value * 0.25 + 'px'; 
    moon.style.top = value * 1.05 + 'px'; 
    mountains_behind.style.top = value * 0.5 + 'px';
    mountains_front.style.top = value * 0 + 'px';
    text.style.marginRight = value * 2.5 + 'px';
    btn.style.marginTop = value * 1.5 + 'px';
    header.style.top = value * 0.5 + 'px';
})
