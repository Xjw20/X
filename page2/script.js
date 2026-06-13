function generateQuestionBank() {
    const normalTemplates = [
        { q: "中国近代史的开端是哪一事件？", opts: ["鸦片战争", "太平天国运动", "洋务运动", "甲午战争"], ans: 0 },
        { q: "第一次鸦片战争爆发于哪一年？", opts: ["1840年", "1842年", "1856年", "1860年"], ans: 0 },
        { q: "《南京条约》是在哪次战争后签订的？", opts: ["鸦片战争", "第二次鸦片战争", "甲午战争", "八国联军侵华"], ans: 0 },
        { q: "火烧圆明园发生在哪场战争期间？", opts: ["第二次鸦片战争", "鸦片战争", "甲午战争", "八国联军侵华"], ans: 0 },
        { q: "太平天国运动的发起者是？", opts: ["洪秀全", "杨秀清", "李秀成", "石达开"], ans: 0 },
        { q: "洋务运动的核心口号是？", opts: ["自强求富", "师夷长技以制夷", "民主共和", "民主科学"], ans: 0 },
        { q: "甲午中日战争爆发于哪一年？", opts: ["1894年", "1895年", "1898年", "1900年"], ans: 0 },
        { q: "《马关条约》签订于哪一年？", opts: ["1895年", "1894年", "1898年", "1901年"], ans: 0 },
        { q: "戊戌变法发生在哪一年？", opts: ["1898年", "1895年", "1900年", "1901年"], ans: 0 },
        { q: "八国联军侵华战争爆发于？", opts: ["1900年", "1898年", "1901年", "1895年"], ans: 0 },
        { q: "《辛丑条约》签订于哪一年？", opts: ["1901年", "1900年", "1899年", "1902年"], ans: 0 },
        { q: "中国同盟会成立于哪一年？", opts: ["1905年", "1901年", "1911年", "1912年"], ans: 0 },
        { q: "辛亥革命首发地是？", opts: ["武昌", "南京", "广州", "北京"], ans: 0 },
        { q: "辛亥革命爆发于哪一年？", opts: ["1911年", "1912年", "1910年", "1913年"], ans: 0 },
        { q: "中华民国临时政府成立于？", opts: ["1912年", "1911年", "1913年", "1910年"], ans: 0 },
        { q: "新文化运动兴起的标志是？", opts: ["《青年杂志》创刊", "五四运动", "中共成立", "辛亥革命"], ans: 0 },
        { q: "新文化运动的核心口号是？", opts: ["民主与科学", "自强与求富", "民主共和", "实业救国"], ans: 0 },
        { q: "五四运动爆发于哪一年？", opts: ["1919年", "1918年", "1920年", "1921年"], ans: 0 },
        { q: "中共一大召开于哪一年？", opts: ["1921年", "1920年", "1922年", "1923年"], ans: 0 },
        { q: "第一次国共合作形成的标志是？", opts: ["国民党一大召开", "中共一大", "黄埔军校建立", "北伐开始"], ans: 0 },
        { q: "北伐战争开始于哪一年？", opts: ["1926年", "1924年", "1925年", "1927年"], ans: 0 },
        { q: "南昌起义发生于哪一年？", opts: ["1927年", "1926年", "1928年", "1929年"], ans: 0 },
        { q: "中国第一个农村革命根据地是？", opts: ["井冈山根据地", "中央根据地", "鄂豫皖根据地", "湘鄂西根据地"], ans: 0 },
        { q: "九一八事变发生于哪一年？", opts: ["1931年", "1932年", "1935年", "1937年"], ans: 0 },
        { q: "红军长征开始于哪一年？", opts: ["1934年", "1933年", "1935年", "1936年"], ans: 0 },
        { q: "遵义会议召开于哪一年？", opts: ["1935年", "1934年", "1936年", "1933年"], ans: 0 },
        { q: "西安事变发生于哪一年？", opts: ["1936年", "1935年", "1937年", "1934年"], ans: 0 },
        { q: "全国性抗战开始的标志是？", opts: ["七七事变", "九一八事变", "一二八事变", "八一三事变"], ans: 0 },
        { q: "七七事变发生于哪一年？", opts: ["1937年", "1936年", "1938年", "1939年"], ans: 0 },
        { q: "抗日战争胜利于哪一年？", opts: ["1945年", "1944年", "1946年", "1943年"], ans: 0 },
        { q: "全面内战爆发于哪一年？", opts: ["1946年", "1945年", "1947年", "1948年"], ans: 0 },
        { q: "三大战役不包括以下哪项？", opts: ["渡江战役", "辽沈战役", "淮海战役", "平津战役"], ans: 0 },
        { q: "国民党政权在大陆覆灭的标志是？", opts: ["南京解放", "北平解放", "上海解放", "广州解放"], ans: 0 },
        { q: "中华人民共和国成立于？", opts: ["1949年", "1948年", "1950年", "1951年"], ans: 0 }
    ];

    const hardTemplates = [
        { q: "《南京条约》中开放的通商口岸不包括以下哪个城市？", opts: ["南京", "广州", "厦门", "上海"], ans: 0 },
        { q: "近代割占中国领土最多的国家是？", opts: ["俄国", "英国", "日本", "法国"], ans: 0 },
        { q: "洋务运动中创办的最大民用企业是？", opts: ["轮船招商局", "开平矿务局", "汉阳铁厂", "湖北织布局"], ans: 0 },
        { q: "黄海海战中壮烈牺牲的致远舰管带是？", opts: ["邓世昌", "丁汝昌", "刘步蟾", "林永升"], ans: 0 },
        { q: "戊戌变法中甘愿为变法流血牺牲的是？", opts: ["谭嗣同", "康有为", "梁启超", "杨锐"], ans: 0 },
        { q: "中国近代第一个全国性的资产阶级革命政党是？", opts: ["中国同盟会", "兴中会", "华兴会", "光复会"], ans: 0 },
        { q: "五四运动中发挥主力军作用的是？", opts: ["工人阶级", "青年学生", "民族资产阶级", "小资产阶级"], ans: 0 },
        { q: "中共一大最终转移到哪里召开？", opts: ["嘉兴南湖", "杭州西湖", "苏州太湖", "宁波东钱湖"], ans: 0 },
        { q: "黄埔军校的政治部主任是？", opts: ["周恩来", "蒋介石", "廖仲恺", "戴季陶"], ans: 0 },
        { q: "确立党对军队绝对领导的历史事件是？", opts: ["三湾改编", "南昌起义", "秋收起义", "古田会议"], ans: 0 },
        { q: "长征中红军跳出敌人包围圈的事件是？", opts: ["巧渡金沙江", "四渡赤水", "强渡大渡河", "飞夺泸定桥"], ans: 0 },
        { q: "西安事变的和平解决标志着？", opts: ["抗日民族统一战线初步形成", "全面抗战开始", "国共第二次合作正式形成", "局部抗战开始"], ans: 0 },
        { q: "抗战以来中国军队取得的首次大捷是？", opts: ["平型关大捷", "台儿庄战役", "百团大战", "万家岭战役"], ans: 0 },
        { q: "台儿庄战役属于哪次会战的一部分？", opts: ["徐州会战", "淞沪会战", "太原会战", "武汉会战"], ans: 0 },
        { q: "百团大战的主要指挥者是？", opts: ["彭德怀", "朱德", "林彪", "刘伯承"], ans: 0 },
        { q: "抗日战争中，中国主动出击日军规模最大的战役是？", opts: ["百团大战", "台儿庄战役", "平型关大捷", "长沙会战"], ans: 0 },
        { q: "揭开人民解放军战略进攻序幕的是？", opts: ["挺进大别山", "孟良崮战役", "辽沈战役", "渡江战役"], ans: 0 },
        { q: "淮海战役的中心城市是？", opts: ["徐州", "蚌埠", "郑州", "济南"], ans: 0 },
        { q: "平津战役中和平解放的城市是？", opts: ["北平", "天津", "张家口", "唐山"], ans: 0 },
        { q: "第一届中国人民政治协商会议选举的中央人民政府主席是？", opts: ["毛泽东", "朱德", "刘少奇", "宋庆龄"], ans: 0 }
    ];

    const normalBank = [];
    const hardBank = [];
    const prefixes = ["", "中国近代史上，", "历史上，", "晚清时期，", "民国时期，", "根据所学知识，", "在我国历史上，"];
    const normalCount = 80000;
    const hardCount = 20000;

    for (let i = 0; i < normalCount; i++) {
        const tpl = normalTemplates[i % normalTemplates.length];
        const prefix = prefixes[Math.floor(i / normalTemplates.length) % prefixes.length];
        const question = prefix + tpl.q;
        const offsets = [[1,2,5], [-1,2,3], [-2,-1,1], [10,5,3], [-5,-3,2]];
        let options = [...tpl.opts];
        let answer = tpl.ans;
        
        if (/年/.test(tpl.opts[0])) {
            const baseYear = parseInt(tpl.opts[0]);
            const offset = offsets[i % offsets.length];
            options = [
                `${baseYear}年`,
                `${baseYear + offset[0]}年`,
                `${baseYear + offset[1]}年`,
                `${baseYear + offset[2]}年`
            ];
            const indices = [0,1,2,3];
            for (let j = indices.length - 1; j > 0; j--) {
                const k = Math.floor((i + j) % (j + 1));
                [indices[j], indices[k]] = [indices[k], indices[j]];
            }
            const shuffled = [];
            for (let j = 0; j < 4; j++) {
                shuffled.push(options[indices[j]]);
                if (indices[j] === 0) answer = j;
            }
            options = shuffled;
        }

        normalBank.push({
            id: `n_${i}`,
            type: "normal",
            question,
            options,
            answer
        });
    }

    for (let i = 0; i < hardCount; i++) {
        const tpl = hardTemplates[i % hardTemplates.length];
        const prefix = prefixes[Math.floor(i / hardTemplates.length) % prefixes.length];
        hardBank.push({
            id: `h_${i}`,
            type: "hard",
            question: prefix + tpl.q,
            options: [...tpl.opts],
            answer: tpl.ans
        });
    }

    return { normalBank, hardBank };
}

function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function formatTime(timestamp) {
    const d = new Date(timestamp);
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    const h = String(d.getHours()).padStart(2, '0');
    const min = String(d.getMinutes()).padStart(2, '0');
    return `${y}-${m}-${day} ${h}:${min}`;
}

const PROGRESS_KEY = 'modern_history_quiz_progress';
const DONE_KEY = 'modern_history_quiz_done';
const HISTORY_KEY = 'modern_history_quiz_history';
const { normalBank, hardBank } = generateQuestionBank();
const totalQuestions = 20;
const normalCount = 15;
const hardCount = 5;

let currentQuestions = [];
let currentIndex = 0;
let score = 0;
let answered = false;

const startScreen = document.getElementById('startScreen');
const gameBody = document.getElementById('gameBody');
const startBtn = document.getElementById('startBtn');
const continueBtn = document.getElementById('continueBtn');
const historyBtn = document.getElementById('historyBtn');
const questionTagEl = document.getElementById('questionTag');
const questionTextEl = document.getElementById('questionText');
const optionsListEl = document.getElementById('optionsList');
const scoreEl = document.getElementById('score');
const currentEl = document.getElementById('current');
const progressFillEl = document.getElementById('progressFill');
const nextBtn = document.getElementById('nextBtn');
const resultModal = document.getElementById('resultModal');
const finalScoreEl = document.getElementById('finalScore');
const restartBtn = document.getElementById('restartBtn');
const backHomeBtn = document.getElementById('backHomeBtn');
const historyModal = document.getElementById('historyModal');
const historyList = document.getElementById('historyList');
const clearHistoryBtn = document.getElementById('clearHistoryBtn');
const closeHistoryBtn = document.getElementById('closeHistoryBtn');

function getDoneIds() {
    try {
        return JSON.parse(localStorage.getItem(DONE_KEY)) || [];
    } catch {
        return [];
    }
}

function saveDoneIds(ids) {
    localStorage.setItem(DONE_KEY, JSON.stringify(ids));
}

function getHistory() {
    try {
        return JSON.parse(localStorage.getItem(HISTORY_KEY)) || [];
    } catch {
        return [];
    }
}

function saveHistory(record) {
    const list = getHistory();
    list.unshift(record);
    localStorage.setItem(HISTORY_KEY, JSON.stringify(list));
}

function pickQuestions() {
    const doneIds = getDoneIds();
    const availableNormal = normalBank.filter(q => !doneIds.includes(q.id));
    const availableHard = hardBank.filter(q => !doneIds.includes(q.id));

    const pickedNormal = shuffleArray(availableNormal).slice(0, normalCount);
    const pickedHard = shuffleArray(availableHard).slice(0, hardCount);
    const all = [...pickedNormal, ...pickedHard];
    return shuffleArray(all);
}

function saveProgress() {
    localStorage.setItem(PROGRESS_KEY, JSON.stringify({
        questions: currentQuestions,
        index: currentIndex,
        score: score
    }));
}

function loadProgress() {
    try {
        return JSON.parse(localStorage.getItem(PROGRESS_KEY));
    } catch {
        return null;
    }
}

function clearProgress() {
    localStorage.removeItem(PROGRESS_KEY);
}

function checkContinue() {
    const saved = loadProgress();
    if (saved && saved.index < totalQuestions) {
        continueBtn.classList.remove('hidden');
    }
}

function renderHistory() {
    const list = getHistory();
    if (list.length === 0) {
        historyList.innerHTML = '<div class="empty-tip">暂无答题记录</div>';
        return;
    }
    let html = '';
    list.forEach(item => {
        html += `<div class="history-item">
            <span>${formatTime(item.time)}</span>
            <span class="score-text">${item.score}分</span>
        </div>`;
    });
    historyList.innerHTML = html;
}

function initGame(isNew) {
    if (isNew) {
        currentQuestions = pickQuestions();
        currentIndex = 0;
        score = 0;
    } else {
        const saved = loadProgress();
        currentQuestions = saved.questions;
        currentIndex = saved.index;
        score = saved.score;
    }
    answered = false;
    resultModal.classList.add('hidden');
    startScreen.classList.add('hidden');
    gameBody.classList.remove('hidden');
    scoreEl.textContent = score;
    updateStats();
    renderQuestion();
}

function renderQuestion() {
    const q = currentQuestions[currentIndex];
    if (q.type === 'hard') {
        questionTagEl.textContent = '难题 · 4分';
        questionTagEl.className = 'question-tag hard';
    } else {
        questionTagEl.textContent = '普通题 · 1分';
        questionTagEl.className = 'question-tag normal';
    }
    questionTextEl.textContent = q.question;
    optionsListEl.innerHTML = '';
    answered = false;
    nextBtn.disabled = true;
    q.options.forEach((opt, idx) => {
        const item = document.createElement('div');
        item.className = 'option-item';
        item.textContent = opt;
        item.dataset.index = idx;
        item.addEventListener('click', handleOptionClick);
        optionsListEl.appendChild(item);
    });
}

function handleOptionClick(e) {
    if (answered) return;
    answered = true;
    const items = document.querySelectorAll('.option-item');
    const selectedIdx = parseInt(e.target.dataset.index);
    const correctIdx = currentQuestions[currentIndex].answer;
    items.forEach(item => item.classList.add('disabled'));
    
    if (selectedIdx === correctIdx) {
        e.target.classList.add('correct');
        const q = currentQuestions[currentIndex];
        score += q.type === 'hard' ? 4 : 1;
        scoreEl.textContent = score;
    } else {
        e.target.classList.add('wrong');
        items[correctIdx].classList.add('correct');
    }
    saveProgress();
    nextBtn.disabled = false;
}

function updateStats() {
    currentEl.textContent = currentIndex + 1;
    progressFillEl.style.width = `${((currentIndex + 1) / totalQuestions) * 100}%`;
}

function markQuestionsDone() {
    const doneIds = getDoneIds();
    const newIds = currentQuestions.map(q => q.id);
    const merged = [...new Set([...doneIds, ...newIds])];
    saveDoneIds(merged);
}

function showResult() {
    markQuestionsDone();
    saveHistory({
        time: Date.now(),
        score: score,
        total: totalQuestions
    });
    finalScoreEl.textContent = score;
    resultModal.classList.remove('hidden');
    clearProgress();
}

nextBtn.addEventListener('click', () => {
    if (currentIndex < totalQuestions - 1) {
        currentIndex++;
        saveProgress();
        updateStats();
        renderQuestion();
    } else {
        showResult();
    }
});

startBtn.addEventListener('click', () => initGame(true));
continueBtn.addEventListener('click', () => initGame(false));
restartBtn.addEventListener('click', () => {
    resultModal.classList.add('hidden');
    initGame(true);
});
backHomeBtn.addEventListener('click', () => {
    window.location.href = 'https://Xjw20.github.io/X/';
});

historyBtn.addEventListener('click', () => {
    renderHistory();
    historyModal.classList.remove('hidden');
});
closeHistoryBtn.addEventListener('click', () => {
    historyModal.classList.add('hidden');
});
clearHistoryBtn.addEventListener('click', () => {
    localStorage.removeItem(HISTORY_KEY);
    localStorage.removeItem(DONE_KEY);
    renderHistory();
});

checkContinue();