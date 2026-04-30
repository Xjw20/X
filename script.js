// 深浅模式切换 彻底修复闪白、刷新乱跳bug
const modeBtn = document.getElementById('modeBtn');
const tipText = modeBtn.querySelector('.tip-text');

// 读取本地存储
let nowMode = localStorage.getItem('mode') || 'light';

// 初始化图标文字
function initMode() {
    if(nowMode === 'dark'){
        document.body.classList.add('dark');
        tipText.innerText = '切换浅色模式';
    }else{
        document.body.classList.remove('dark');
        tipText.innerText = '切换深色模式';
    }
}
initMode();

// 点击切换
modeBtn.addEventListener('click',()=>{
    if(nowMode === 'light'){
        nowMode = 'dark';
    }else{
        nowMode = 'light';
    }
    localStorage.setItem('mode', nowMode);
    initMode();
});

// 鼠标悬浮显示提示
modeBtn.addEventListener('mouseenter',()=>{
    tipText.style.display = 'block';
});
modeBtn.addEventListener('mouseleave',()=>{
    tipText.style.display = 'none';
});

// 中英切换简单基础代码
const langBtn = document.getElementById('langBtn');
const langTip = langBtn.querySelector('.lang-tip');
let isZh = true;

langBtn.addEventListener('click',()=>{
    isZh = !isZh;
    if(isZh){
        document.querySelector('.top-title').innerText = '欢迎访问我的网站';
        langBtn.querySelector('.lang-text').innerText = '中/E';
    }else{
        document.querySelector('.top-title').innerText = 'Welcome to my website';
        langBtn.querySelector('.lang-text').innerText = 'E/中';
    }
});

langBtn.addEventListener('mouseenter',()=>{
    langTip.style.display = 'block';
    langTip.innerText = '切换语言';
});
langBtn.addEventListener('mouseleave',()=>{
    langTip.style.display = 'none';
});
