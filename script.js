// 深浅色模式 修复手机切换回弹锁死问题
const modeBtn = document.getElementById('modeBtn');
const tipText = modeBtn.querySelector('.tip-text');

// 稳定读取存储，不延迟不错乱
let nowMode = localStorage.getItem('mode');
// 默认浅色，不会强制变黑
if(!nowMode) nowMode = 'light';

function upMode() {
    document.documentElement.className = nowMode;
    if(nowMode === 'dark'){
        tipText.innerText = '切换浅色模式';
    }else{
        tipText.innerText = '切换深色模式';
    }
}
// 初始化直接加载，手机不卡顿不回弹
upMode();

modeBtn.onclick = function () {
    // 正常互切，不会自动跳回黑色
    if(nowMode === 'light'){
        nowMode = 'dark';
    }else{
        nowMode = 'light';
    }
    localStorage.setItem('mode', nowMode);
    upMode();
};

modeBtn.onmouseenter = () => tipText.style.display = 'block';
modeBtn.onmouseleave = () => tipText.style.display = 'none';

// 中英双语切换 顶部+中间文字同步
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