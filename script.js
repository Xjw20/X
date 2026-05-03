(function() {
    'use strict';

    const html = document.documentElement;
    const getPeriod = window.__getTimePeriod;

    // 主题
    const themeBtn = document.getElementById('themeBtn');
    themeBtn.addEventListener('click', function() {
        html.classList.toggle('dark');
        localStorage.setItem('darkMode', html.classList.contains('dark'));
    });

    // 语言
    const langBtn = document.getElementById('langBtn');
    langBtn.addEventListener('click', function() {
        const cur = html.getAttribute('lang');
        const next = cur === 'zh' ? 'en' : 'zh';
        html.setAttribute('lang', next);
        localStorage.setItem('lang', next);
    });

    // 时间同步
    let customHour = null;

    function getCurrentEffectiveHour() {
        return customHour !== null ? customHour : new Date().getHours();
    }

    function syncTimePeriod() {
        const hour = getCurrentEffectiveHour();
        html.setAttribute('time-period', getPeriod(hour));

        const panel = document.getElementById('debugPanel');
        const hourInput = document.getElementById('hourInput');
        if (panel && panel.style.display === 'block' && hourInput) {
            hourInput.value = hour;
        }
    }

    setInterval(syncTimePeriod, 60000);

    document.addEventListener('visibilitychange', function() {
        if (!document.hidden && customHour === null) {
            syncTimePeriod();
        }
    });

    syncTimePeriod();

    // 调试面板
    const debugPanel = document.getElementById('debugPanel');
    const hourInput = document.getElementById('hourInput');
    const setHourBtn = document.getElementById('setHourBtn');
    const resetHourBtn = document.getElementById('resetHourBtn');

    document.addEventListener('keydown', function(e) {
        if (e.altKey && e.key === '7') {
            e.preventDefault();
            if (debugPanel.style.display === 'block') {
                debugPanel.style.display = 'none';
            } else {
                debugPanel.style.display = 'block';
                hourInput.value = getCurrentEffectiveHour();
            }
        }
    });

    setHourBtn.addEventListener('click', function() {
        let val = parseInt(hourInput.value, 10);
        if (isNaN(val)) val = 12;
        val = Math.min(23, Math.max(0, val));
        customHour = val;
        syncTimePeriod();
    });

    resetHourBtn.addEventListener('click', function() {
        customHour = null;
        syncTimePeriod();
        debugPanel.style.display = 'none';
    });
})();