(function () {
    'use strict';

    const html = document.documentElement;
    const getPeriod = window.__getTimePeriod;

    const STORAGE_KEYS = {
        DARK_MODE: 'darkMode',
        LANG: 'lang',
        FORCE_COUNTRY: 'forceCountry'
    };

    const storage = {
        get(key) {
            try {
                return localStorage.getItem(key);
            } catch {
                return null;
            }
        },
        set(key, value) {
            try {
                localStorage.setItem(key, value);
            } catch {
                console.warn(`Failed to save ${key}`);
            }
        },
        remove(key) {
            try {
                localStorage.removeItem(key);
            } catch {
                console.warn(`Failed to remove ${key}`);
            }
        }
    };

    function getForcedCountry() {
        return storage.get(STORAGE_KEYS.FORCE_COUNTRY) || 'auto';
    }

    function setForcedCountry(value) {
        if (value === 'auto') {
            storage.remove(STORAGE_KEYS.FORCE_COUNTRY);
        } else {
            storage.set(STORAGE_KEYS.FORCE_COUNTRY, value);
        }
    }

    async function autoDetectLanguage() {
        if (storage.get(STORAGE_KEYS.LANG)) return;

        const forced = getForcedCountry();
        if (forced !== 'auto') {
            html.setAttribute('lang', forced === 'CN' ? 'zh' : 'en');
            return;
        }

        try {
            const response = await fetch('https://api.country.is');
            const data = await response.json();
            html.setAttribute('lang', data.country !== 'CN' ? 'en' : 'zh');
        } catch (e) {
            console.warn('自动语言检测失败', e);
        }
    }

    function toggleTheme() {
        html.classList.toggle('dark');
        storage.set(STORAGE_KEYS.DARK_MODE, html.classList.contains('dark'));
    }

    function toggleLanguage() {
        const next = html.getAttribute('lang') === 'zh' ? 'en' : 'zh';
        html.setAttribute('lang', next);
        storage.set(STORAGE_KEYS.LANG, next);
        setForcedCountry('auto');
    }

    function syncTimePeriod() {
        const hour = new Date().getHours();
        html.setAttribute('time-period', getPeriod(hour));
    }

    function copyUid() {
        const uidElement = document.getElementById('uidNumber');
        const copyBtn = document.getElementById('copyBtn');
        if (!uidElement || !copyBtn) return;
        
        const uid = uidElement.textContent.trim();
        const prefix = 'UID:';
        const textToCopy = uid;
        
        navigator.clipboard.writeText(textToCopy).then(() => {
            copyBtn.classList.add('copied');
            
            const successText = html.getAttribute('lang') === 'zh' ? '已复制!' : 'Copied!';
            
            const style = document.createElement('style');
            style.textContent = `
                html[lang="zh"] .copy-btn::before { content: "${successText}" !important; }
                html[lang="en"] .copy-btn::before { content: "${successText}" !important; }
            `;
            document.head.appendChild(style);
            copyBtn._style = style;
            
            setTimeout(() => {
                copyBtn.classList.remove('copied');
                if (copyBtn._style) {
                    copyBtn._style.remove();
                }
            }, 1500);
        }).catch(err => {
            console.error('复制失败:', err);
        });
    }

    function init() {
        const themeBtn = document.getElementById('themeBtn');
        const langBtn = document.getElementById('langBtn');
        const copyBtn = document.getElementById('copyBtn');
       

        themeBtn?.addEventListener('click', toggleTheme);
        langBtn?.addEventListener('click', toggleLanguage);
        copyBtn?.addEventListener('click', copyUid);

       

        syncTimePeriod();
        autoDetectLanguage();
    }

    init();
})();
