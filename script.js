(function() {
    'use strict';

    const html = document.documentElement;
    const getPeriod = window.__getTimePeriod;

    // ========== 0. 首次访问声明 ==========
    const consentOverlay = document.getElementById('consentOverlay');
    const consentBtn = document.getElementById('consentBtn');

    function hasConsented() {
        return localStorage.getItem('consent') === 'true';
    }

    function checkConsentOverlay() {
        if (!hasConsented()) {
            if (consentOverlay) consentOverlay.style.display = 'flex';
        } else {
            if (consentOverlay) consentOverlay.style.display = 'none';
        }
    }

    if (consentBtn) {
        consentBtn.addEventListener('click', () => {
            localStorage.setItem('consent', 'true');
            if (consentOverlay) consentOverlay.style.display = 'none';
            // 同意后，若没有手动语言，尝试自动检测
            if (!localStorage.getItem('lang')) {
                autoDetectLanguage();
            }
        });
    }

    // ========== 辅助：强制地区 ==========
    function getForcedCountry() {
        return localStorage.getItem('forceCountry') || 'auto';
    }
    function setForcedCountry(value) {
        if (value === 'auto') {
            localStorage.removeItem('forceCountry');
        } else {
            localStorage.setItem('forceCountry', value);
        }
    }

    // ========== 1. 自动语言检测（需同意） ==========
    async function autoDetectLanguage() {
        if (localStorage.getItem('lang')) return;

        const forced = getForcedCountry();
        if (forced === 'CN') {
            html.setAttribute('lang', 'zh');
            return;
        }
        if (forced === 'OTHER') {
            html.setAttribute('lang', 'en');
            return;
        }

        // 仅同意后才执行 IP 检测
        if (!hasConsented()) return;

        try {
            const response = await fetch('https://api.country.is');
            const data = await response.json();
            html.setAttribute('lang', data.country !== 'CN' ? 'en' : 'zh');
        } catch (e) {
            console.warn('自动语言检测失败', e);
        }
    }

    // ========== 2. 主题切换 ==========
    const themeBtn = document.getElementById('themeBtn');
    themeBtn.addEventListener('click', () => {
        html.classList.toggle('dark');
        localStorage.setItem('darkMode', html.classList.contains('dark'));
    });

    // ========== 3. 语言手动切换 ==========
    const langBtn = document.getElementById('langBtn');
    langBtn.addEventListener('click', () => {
        const cur = html.getAttribute('lang');
        const next = cur === 'zh' ? 'en' : 'zh';
        html.setAttribute('lang', next);
        localStorage.setItem('lang', next);
        setForcedCountry('auto');
        const countrySelect = document.getElementById('countrySelect');
        if (countrySelect) countrySelect.value = 'auto';
    });

    // ========== 4. 时区模拟及时间段核心 ==========
    function getSimulatedTimezoneOffset() {
        const val = localStorage.getItem('simulatedTimezone');
        if (val === null || val === 'auto') return null;
        const num = parseInt(val, 10);
        return isNaN(num) ? null : num;
    }

    function setSimulatedTimezoneOffset(offsetMinutes) {
        if (offsetMinutes === null) {
            localStorage.removeItem('simulatedTimezone');
        } else {
            localStorage.setItem('simulatedTimezone', offsetMinutes);
        }
    }

    let customHour = null;

    function getCurrentEffectiveHour() {
        if (customHour !== null) return customHour;

        const offset = getSimulatedTimezoneOffset();
        if (offset !== null) {
            const now = new Date();
            const utcMinutes = now.getUTCHours() * 60 + now.getUTCMinutes();
            let localMinutes = (utcMinutes + offset) % 1440;
            if (localMinutes < 0) localMinutes += 1440;
            return Math.floor(localMinutes / 60);
        }

        return new Date().getHours();
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
    document.addEventListener('visibilitychange', () => {
        if (!document.hidden && customHour === null) {
            syncTimePeriod();
        }
    });

    // ========== 5. 调试面板（完全优先，不受同意限制）==========
    const debugPanel = document.getElementById('debugPanel');
    const hourInput = document.getElementById('hourInput');
    const setHourBtn = document.getElementById('setHourBtn');
    const resetHourBtn = document.getElementById('resetHourBtn');
    const countrySelect = document.getElementById('countrySelect');
    const timezoneSelect = document.getElementById('timezoneSelect');
    const debugCloseBtn = document.getElementById('debugCloseBtn');
    const clearDataBtn = document.getElementById('clearDataBtn');
    const timezoneInfo = document.getElementById('timezoneInfo');

    function updateTimezoneInfo() {
        if (!timezoneInfo) return;
        try {
            timezoneInfo.textContent = Intl.DateTimeFormat().resolvedOptions().timeZone;
        } catch (e) {
            timezoneInfo.textContent = '无法检测';
        }
    }

    function syncTimezoneSelect() {
        if (!timezoneSelect) return;
        const offset = getSimulatedTimezoneOffset();
        if (offset === null) {
            timezoneSelect.value = 'auto';
        } else {
            timezoneSelect.value = offset.toString();
        }
    }

    function syncCountrySelect() {
        if (countrySelect) countrySelect.value = getForcedCountry();
    }

    // Alt+7 打开/关闭
    document.addEventListener('keydown', (e) => {
        if (e.altKey && e.key === '7') {
            e.preventDefault();
            if (debugPanel.style.display === 'block') {
                debugPanel.style.display = 'none';
            } else {
                debugPanel.style.display = 'block';
                hourInput.value = getCurrentEffectiveHour();
                syncCountrySelect();
                syncTimezoneSelect();
                updateTimezoneInfo();
            }
        }
    });

    if (debugCloseBtn) {
        debugCloseBtn.addEventListener('click', () => {
            debugPanel.style.display = 'none';
        });
    }

    // 时区切换 - 立即生效
    if (timezoneSelect) {
        timezoneSelect.addEventListener('change', () => {
            const val = timezoneSelect.value;
            if (val === 'auto') {
                setSimulatedTimezoneOffset(null);
            } else {
                const offset = parseInt(val, 10);
                if (!isNaN(offset)) {
                    setSimulatedTimezoneOffset(offset);
                }
            }
            syncTimePeriod();
        });
    }

    // 地区切换 - 立即生效
    if (countrySelect) {
        countrySelect.addEventListener('change', () => {
            const value = countrySelect.value;
            setForcedCountry(value);
            localStorage.removeItem('lang');
            if (value === 'CN') {
                html.setAttribute('lang', 'zh');
            } else if (value === 'OTHER') {
                html.setAttribute('lang', 'en');
            } else {
                autoDetectLanguage();
            }
        });
    }

    setHourBtn.addEventListener('click', () => {
        let val = parseInt(hourInput.value, 10);
        if (isNaN(val)) val = 12;
        val = Math.min(23, Math.max(0, val));
        customHour = val;
        syncTimePeriod();
    });

    resetHourBtn.addEventListener('click', () => {
        customHour = null;
        syncTimePeriod();
        debugPanel.style.display = 'none';
    });

    if (clearDataBtn) {
        clearDataBtn.addEventListener('click', () => {
            if (confirm('确定要清除所有本地数据并刷新页面吗？')) {
                localStorage.clear();
                location.reload(true);
            }
        });
    }

    // ========== 启动流程 ==========
    checkConsentOverlay();
    syncTimePeriod(); // 总是即时生效

    // 若已同意，尝试自动检测；若未同意，强制地区仍会应用
    if (hasConsented()) {
        autoDetectLanguage();
    } else {
        const forced = getForcedCountry();
        if (forced === 'CN') html.setAttribute('lang', 'zh');
        else if (forced === 'OTHER') html.setAttribute('lang', 'en');
    }

})();