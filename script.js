const body = document.body;
const langBtn = document.getElementById("langBtn");
const langTip = document.getElementById("langTip");
const themeBtn = document.getElementById("themeSwitch");
const themeTip = document.getElementById("themeTip");
const topBox = document.querySelector(".top-box");

let langData = { zh: {}, en: {} };

setTimeout(() => {
    body.classList.add("theme-loaded");
}, 10);

// 从后端拿语言数据
fetch("/api/lang")
    .then(res => res.json())
    .then(data => {
        langData = data;
        loadLang();
    })
    .catch(() => {
        langData = {
            zh: { title: "欢迎访问我的网站" },
            en: { title: "Welcome to my website" }
        };
        loadLang();
    });

loadLang();
updateThemeTip();

function loadLang() {
    const lang = localStorage.getItem("lang") || "zh";
    if (lang === "en") {
        body.classList.add("lang-en");
        topBox.textContent = langData.en.title;
        langTip.textContent = "Switch language";
    } else {
        body.classList.remove("lang-en");
        topBox.textContent = langData.zh.title;
        langTip.textContent = "语言切换";
    }
    updateThemeTip();
}

langBtn.onclick = function () {
    const current = localStorage.getItem("lang") || "zh";
    const next = current === "zh" ? "en" : "zh";
    localStorage.setItem("lang", next);
    loadLang();
};

themeBtn.onclick = function () {
    body.classList.toggle("light");
    updateThemeTip();
    localStorage.setItem("theme", body.classList.contains("light") ? "light" : "dark");
};

function updateThemeTip() {
    const lang = localStorage.getItem("lang") || "zh";
    const isLight = body.classList.contains("light");

    if (lang === "en") {
        themeTip.textContent = isLight ? "Switch to dark mode" : "Switch to light mode";
    } else {
        themeTip.textContent = isLight ? "切换深色模式" : "切换浅色模式";
    }
}