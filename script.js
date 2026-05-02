// 深浅主题切换 + 永久记忆
const themeBtn = document.getElementById('themeBtn');
const html = document.documentElement;

themeBtn.addEventListener('click', ()=>{
    html.classList.toggle('dark');
    localStorage.setItem('darkMode', html.classList.contains('dark'));
});

// 中英文切换 + 永久记忆
const langBtn = document.getElementById('langBtn');

langBtn.addEventListener('click', ()=>{
    const currentLang = html.getAttribute('lang');
    const newLang = currentLang === 'zh' ? 'en' : 'zh';
    html.setAttribute('lang', newLang);
    localStorage.setItem('lang', newLang);
});

// 时间段更新核心
let customHour = null;
function updateTimePeriod() {
    const hour = customHour !== null ? customHour : new Date().getHours();
    let newPeriod = 'night';
    if (hour >= 0 && hour < 3) newPeriod = 'midnight';
    else if (hour >= 3 && hour < 6) newPeriod = 'lateNight';
    else if (hour >= 6 && hour < 11) newPeriod = 'morning';
    else if (hour >= 11 && hour < 13) newPeriod = 'noon';
    else if (hour >= 13 && hour < 18) newPeriod = 'afternoon';
    else if (hour >= 18 && hour < 19) newPeriod = 'evening';
    else if (hour >= 19 && hour < 24) newPeriod = 'night';
    html.setAttribute('time-period', newPeriod);
}
setInterval(updateTimePeriod, 60000);
updateTimePeriod();

// ===== 你的专属调试功能 Alt+7 快捷键 =====
const debugPanel = document.getElementById('debugPanel');
const hourInput = document.getElementById('hourInput');
const setHourBtn = document.getElementById('setHourBtn');
const resetHourBtn = document.getElementById('resetHourBtn');

// Alt + 7 打开/关闭调试面板
document.addEventListener('keydown', (e) => {
    if(e.altKey && e.key === '7'){
        e.preventDefault();
        if(debugPanel.style.display === 'block'){
            debugPanel.style.display = 'none';
        }else{
            debugPanel.style.display = 'block';
        }
    }
});

// 手动设置小时
setHourBtn.addEventListener('click', () => {
    let val = parseInt(hourInput.value);
    if(isNaN(val)) val = 12;
    if(val < 0) val = 0;
    if(val > 23) val = 23;
    customHour = val;
    updateTimePeriod();
});

// 恢复真实时间
resetHourBtn.addEventListener('click', () => {
    customHour = null;
    hourInput.value = new Date().getHours();
    updateTimePeriod();
    debugPanel.style.display = 'none';
});