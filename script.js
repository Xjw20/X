const modeBtn = document.getElementById('modeBtn');
const tipText = modeBtn.querySelector('.tip-text');
let nowMode = localStorage.getItem('mode') || 'light';

function upMode() {
    document.documentElement.className = nowMode;
    tipText.innerText = nowMode === 'dark' ? '切换浅色模式' : '切换深色模式';
}
upMode();

modeBtn.onclick = function () {
    nowMode = nowMode === 'light' ? 'dark' : 'light';
    localStorage.setItem('mode', nowMode);
    upMode();
};

modeBtn.onmouseenter = () => tipText.style.display = 'block';
modeBtn.onmouseleave = () => tipText.style.display = 'none';

const langBtn = document.getElementById('langBtn');
const langTip = langBtn.querySelector('.lang-tip');
const titleDom = document.querySelector('.top-title');
const centerDom = document.querySelector('.center-text');
const langTextDom = langBtn.querySelector('.lang-text');

let isChinese = true;

langBtn.onclick = function () {
    isChinese = !isChinese;
    if (isChinese) {
        titleDom.innerText = "欢迎访问我的网站";
        centerDom.innerText = "这只是一个无聊的网站";
        langTextDom.innerText = "中/E";
    } else {
        titleDom.innerText = "Welcome to my website";
        centerDom.innerText = "This is just a boring website";
        langTextDom.innerText = "E/中";
    }
};

langBtn.onmouseenter = function () {
    langTip.style.display = 'block';
    langTip.innerText = '切换语言';
};
langBtn.onmouseleave = () => langTip.style.display = 'none';