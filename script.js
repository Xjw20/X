const body = document.body;
const themeBtn = document.getElementById('themeBtn');
const langBtn = document.getElementById('langBtn');
const welcome = document.querySelector('.welcome');
const mainTip = document.querySelector('.main-tip');

// 深浅模式
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.setAttribute('data-theme', savedTheme);
}

themeBtn.addEventListener('click', () => {
    if (body.getAttribute('data-theme') === 'dark') {
        body.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
    } else {
        body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
});

// 语言切换
let isZh = true;
langBtn.addEventListener('click', () => {
    isZh = !isZh;
    if (isZh) {
        welcome.textContent = '欢迎访问我的网站';
        mainTip.textContent = '这只是一个无聊的网站';
    } else {
        welcome.textContent = 'Welcome to my website';
        mainTip.textContent = 'This is just a boring website';
    }
});