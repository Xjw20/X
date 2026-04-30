// 深浅色模式
const modeBtn = document.getElementById('modeBtn');
const tipText = modeBtn.querySelector('.tip-text');
let mode = localStorage.getItem('mode') || 'light';

function refreshMode() {
    document.body.className = mode;
    tipText.innerText = mode === 'dark' ? '切换浅色模式' : '切换深色模式';
}
refreshMode();

modeBtn.addEventListener('click', () => {
    mode = mode === 'light' ? 'dark' : 'light';
    localStorage.setItem('mode', mode);
    refreshMode();
});

modeBtn.addEventListener('mouseenter', () => tipText.style.display = 'block');
modeBtn.addEventListener('mouseleave', () => tipText.style.display = 'none');

// 中英切换
const langBtn = document.getElementById('langBtn');
const langTip = langBtn.querySelector('.lang-tip');
let isZh = true;

langBtn.addEventListener('click', () => {
    isZh = !isZh;
    let title = document.querySelector('.top-title');
    let txt = langBtn.querySelector('.lang-text');
    if(isZh){
        title.innerText = '欢迎访问我的网站';
        txt.innerText = '中/E';
    }else{
        title.innerText = 'Welcome to my website';
        txt.innerText = 'E/中';
    }
});

langBtn.addEventListener('mouseenter', () => {
    langTip.style.display = 'block';
    langTip.innerText = '切换语言';
});
langBtn.addEventListener('mouseleave', () => langTip.style.display = 'none');