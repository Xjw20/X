function generateQuestionBank() {
    // 简单题 1分：基础史实（近代史+现代史）
    const easyTemplates = [
        // 中国近代史
        { q: "中国近代史的开端是哪一事件？", opts: ["鸦片战争", "太平天国运动", "洋务运动", "甲午中日战争"], ans: 0 },
        { q: "第一次鸦片战争爆发于哪一年？", opts: ["1840年", "1842年", "1856年", "1860年"], ans: 0 },
        { q: "太平天国运动的发起者是？", opts: ["洪秀全", "杨秀清", "李秀成", "石达开"], ans: 0 },
        { q: "洋务运动的核心口号是？", opts: ["自强求富", "师夷长技以制夷", "民主共和", "民主科学"], ans: 0 },
        { q: "甲午中日战争爆发于哪一年？", opts: ["1894年", "1895年", "1898年", "1900年"], ans: 0 },
        { q: "戊戌变法发生在哪一年？", opts: ["1898年", "1895年", "1900年", "1901年"], ans: 0 },
        { q: "八国联军侵华战争爆发于哪一年？", opts: ["1900年", "1898年", "1901年", "1895年"], ans: 0 },
        { q: "辛亥革命爆发于哪一年？", opts: ["1911年", "1912年", "1910年", "1913年"], ans: 0 },
        { q: "新文化运动的核心口号是？", opts: ["民主与科学", "自强与求富", "民主共和", "实业救国"], ans: 0 },
        { q: "五四运动爆发于哪一年？", opts: ["1919年", "1918年", "1920年", "1921年"], ans: 0 },
        { q: "中共一大召开于哪一年？", opts: ["1921年", "1920年", "1922年", "1923年"], ans: 0 },
        { q: "南昌起义发生于哪一年？", opts: ["1927年", "1926年", "1928年", "1929年"], ans: 0 },
        { q: "九一八事变发生于哪一年？", opts: ["1931年", "1932年", "1935年", "1937年"], ans: 0 },
        { q: "红军长征开始于哪一年？", opts: ["1934年", "1933年", "1935年", "1936年"], ans: 0 },
        { q: "七七事变发生于哪一年？", opts: ["1937年", "1936年", "1938年", "1939年"], ans: 0 },
        { q: "抗日战争胜利于哪一年？", opts: ["1945年", "1944年", "1946年", "1943年"], ans: 0 },
        { q: "中华人民共和国成立于哪一年？", opts: ["1949年", "1948年", "1950年", "1951年"], ans: 0 },
        // 中国现代史
        { q: "抗美援朝战争开始于哪一年？", opts: ["1950年", "1949年", "1951年", "1952年"], ans: 0 },
        { q: "三大改造基本完成于哪一年？", opts: ["1956年", "1953年", "1957年", "1958年"], ans: 0 },
        { q: "我国第一个五年计划开始于哪一年？", opts: ["1953年", "1952年", "1954年", "1956年"], ans: 0 },
        { q: "我国第一颗原子弹爆炸成功是在哪一年？", opts: ["1964年", "1960年", "1967年", "1970年"], ans: 0 },
        { q: "十一届三中全会召开于哪一年？", opts: ["1978年", "1977年", "1979年", "1980年"], ans: 0 },
        { q: "香港回归祖国是在哪一年？", opts: ["1997年", "1996年", "1998年", "1999年"], ans: 0 },
        { q: "澳门回归祖国是在哪一年？", opts: ["1999年", "1997年", "1998年", "2000年"], ans: 0 },
        { q: "中国加入世界贸易组织是在哪一年？", opts: ["2001年", "1999年", "2000年", "2002年"], ans: 0 },
        { q: "我国改革开放的总设计师是？", opts: ["邓小平", "毛泽东", "周恩来", "刘少奇"], ans: 0 }
    ];

    // 普通题 2分：中等难度，需理解记忆
    const normalTemplates = [
        // 中国近代史
        { q: "《南京条约》是在哪次战争后签订的？", opts: ["鸦片战争", "第二次鸦片战争", "甲午中日战争", "八国联军侵华战争"], ans: 0 },
        { q: "火烧圆明园发生在哪场战争期间？", opts: ["第二次鸦片战争", "鸦片战争", "甲午中日战争", "八国联军侵华战争"], ans: 0 },
        { q: "《马关条约》签订于哪一年？", opts: ["1895年", "1894年", "1898年", "1901年"], ans: 0 },
        { q: "《辛丑条约》签订于哪一年？", opts: ["1901年", "1900年", "1899年", "1902年"], ans: 0 },
        { q: "中国同盟会成立于哪一年？", opts: ["1905年", "1901年", "1911年", "1912年"], ans: 0 },
        { q: "辛亥革命的首发地是？", opts: ["武昌", "南京", "广州", "北京"], ans: 0 },
        { q: "中华民国临时政府成立于哪一年？", opts: ["1912年", "1911年", "1913年", "1910年"], ans: 0 },
        { q: "新文化运动兴起的标志是？", opts: ["《青年杂志》创刊", "五四运动", "中国共产党成立", "辛亥革命"], ans: 0 },
        { q: "第一次国共合作正式形成的标志是？", opts: ["国民党一大召开", "中共一大召开", "黄埔军校建立", "北伐战争开始"], ans: 0 },
        { q: "北伐战争开始于哪一年？", opts: ["1926年", "1924年", "1925年", "1927年"], ans: 0 },
        { q: "中国第一个农村革命根据地是？", opts: ["井冈山革命根据地", "中央革命根据地", "鄂豫皖革命根据地", "湘鄂西革命根据地"], ans: 0 },
        { q: "遵义会议召开于哪一年？", opts: ["1935年", "1934年", "1936年", "1933年"], ans: 0 },
        { q: "西安事变发生于哪一年？", opts: ["1936年", "1935年", "1937年", "1934年"], ans: 0 },
        { q: "全国性抗日战争开始的标志是？", opts: ["七七事变", "九一八事变", "一二八事变", "八一三事变"], ans: 0 },
        { q: "全面内战爆发于哪一年？", opts: ["1946年", "1945年", "1947年", "1948年"], ans: 0 },
        { q: "三大战役不包括以下哪项？", opts: ["渡江战役", "辽沈战役", "淮海战役", "平津战役"], ans: 0 },
        { q: "国民党政权在大陆覆灭的标志是？", opts: ["南京解放", "北平解放", "上海解放", "广州解放"], ans: 0 },
        // 中国现代史
        { q: "抗美援朝战争胜利于哪一年？", opts: ["1953年", "1952年", "1954年", "1955年"], ans: 0 },
        { q: "我国第一部社会主义类型的宪法颁布于哪一年？", opts: ["1954年", "1953年", "1956年", "1950年"], ans: 0 },
        { q: "我国社会主义制度基本建立的标志是？", opts: ["三大改造完成", "新中国成立", "一五计划完成", "土地改革完成"], ans: 0 },
        { q: "文化大革命结束的标志是？", opts: ["粉碎江青反革命集团", "九一三事件", "邓小平复出", "十一届三中全会"], ans: 0 },
        { q: "被誉为“一夜崛起之城”的经济特区是？", opts: ["深圳", "珠海", "汕头", "厦门"], ans: 0 },
        { q: "我国对资本主义工商业改造的主要方式是？", opts: ["公私合营", "没收", "租赁", "承包"], ans: 0 },
        { q: "一五计划优先发展的行业是？", opts: ["重工业", "轻工业", "农业", "商业"], ans: 0 },
        { q: "我国最早设立的经济特区不包括？", opts: ["上海", "深圳", "珠海", "厦门"], ans: 0 }
    ];

    // 难题 4分：细节易混题
    const hardTemplates = [
        // 中国近代史
        { q: "《南京条约》中开放的通商口岸不包括以下哪个城市？", opts: ["南京", "广州", "厦门", "上海"], ans: 0 },
        { q: "近代割占中国领土最多的国家是？", opts: ["俄国", "英国", "日本", "法国"], ans: 0 },
        { q: "洋务运动中创办的最大民用企业是？", opts: ["轮船招商局", "开平矿务局", "汉阳铁厂", "湖北织布局"], ans: 0 },
        { q: "黄海海战中壮烈牺牲的致远舰管带是？", opts: ["邓世昌", "丁汝昌", "刘步蟾", "林永升"], ans: 0 },
        { q: "戊戌变法中甘愿为变法流血牺牲的代表人物是？", opts: ["谭嗣同", "康有为", "梁启超", "杨锐"], ans: 0 },
        { q: "中国近代第一个全国性的资产阶级革命政党是？", opts: ["中国同盟会", "兴中会", "华兴会", "光复会"], ans: 0 },
        { q: "五四运动中发挥主力军作用的阶级是？", opts: ["工人阶级", "青年学生", "民族资产阶级", "小资产阶级"], ans: 0 },
        { q: "中共一大最终转移到哪里继续召开？", opts: ["嘉兴南湖", "杭州西湖", "苏州太湖", "宁波东钱湖"], ans: 0 },
        { q: "黄埔军校的政治部主任是？", opts: ["周恩来", "蒋介石", "廖仲恺", "戴季陶"], ans: 0 },
        { q: "确立党对军队绝对领导的历史事件是？", opts: ["三湾改编", "南昌起义", "秋收起义", "古田会议"], ans: 0 },
        { q: "长征中红军跳出敌人包围圈的标志性事件是？", opts: ["巧渡金沙江", "四渡赤水", "强渡大渡河", "飞夺泸定桥"], ans: 0 },
        { q: "西安事变的和平解决标志着？", opts: ["抗日民族统一战线初步形成", "全面抗战正式开始", "国共第二次合作正式形成", "局部抗战开始"], ans: 0 },
        { q: "全民族抗战以来中国军队取得的首次大捷是？", opts: ["平型关大捷", "台儿庄战役", "百团大战", "万家岭战役"], ans: 0 },
        { q: "台儿庄战役属于哪次会战的组成部分？", opts: ["徐州会战", "淞沪会战", "太原会战", "武汉会战"], ans: 0 },
        { q: "百团大战的主要指挥者是？", opts: ["彭德怀", "朱德", "林彪", "刘伯承"], ans: 0 },
        { q: "抗日战争中中国主动出击日军规模最大的战役是？", opts: ["百团大战", "台儿庄战役", "平型关大捷", "长沙会战"], ans: 0 },
        { q: "揭开人民解放军战略进攻序幕的事件是？", opts: ["挺进大别山", "孟良崮战役", "辽沈战役", "渡江战役"], ans: 0 },
        { q: "淮海战役的中心城市是？", opts: ["徐州", "蚌埠", "郑州", "济南"], ans: 0 },
        { q: "平津战役中和平解放的城市是？", opts: ["北平", "天津", "张家口", "唐山"], ans: 0 },
        { q: "第一届中国人民政治协商会议选举的中央人民政府主席是？", opts: ["毛泽东", "朱德", "刘少奇", "宋庆龄"], ans: 0 },
        // 中国现代史
        { q: "十一届三中全会作出的历史性决策是？", opts: ["改革开放", "以阶级斗争为纲", "建立市场经济", "加入世贸组织"], ans: 0 },
        { q: "三大改造不包括以下哪个行业？", opts: ["官僚资本", "农业", "手工业", "资本主义工商业"], ans: 0 },
        { q: "香港回归前被哪个国家长期侵占？", opts: ["英国", "法国", "葡萄牙", "西班牙"], ans: 0 },
        { q: "澳门回归前被哪个国家长期侵占？", opts: ["葡萄牙", "英国", "西班牙", "荷兰"], ans: 0 },
        { q: "我国对外开放的格局顺序正确的是？", opts: ["经济特区-沿海开放城市-沿海经济开放区-内地", "沿海开放城市-经济特区-沿海经济开放区-内地", "经济特区-沿海经济开放区-沿海开放城市-内地", "沿海经济开放区-经济特区-沿海开放城市-内地"], ans: 0 }
    ];

    const easyBank = [];
    const normalBank = [];
    const hardBank = [];
    const totalEasy = 40000;
    const totalNormal = 40000;
    const totalHard = 20000;
    const offsets = [[1,2,5], [-1,2,3], [-2,-1,1], [10,5,3], [-5,-3,2], [2,3,7], [-3,1,4]];

    // 生成简单题库
    for (let i = 0; i < totalEasy; i++) {
        const tpl = easyTemplates[i % easyTemplates.length];
        let options = [...tpl.opts];
        let answer = tpl.ans;

        if (/年$/.test(tpl.opts[0])) {
            const baseYear = parseInt(tpl.opts[0]);
            if (!isNaN(baseYear)) {
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
        }

        easyBank.push({
            id: `e_${i}`,
            type: "easy",
            question: tpl.q,
            options,
            answer,
            userAnswer: null,
            isAnswered: false
        });
    }

    // 生成普通题库
    for (let i = 0; i < totalNormal; i++) {
        const tpl = normalTemplates[i % normalTemplates.length];
        let options = [...tpl.opts];
        let answer = tpl.ans;

        if (/年$/.test(tpl.opts[0])) {
            const baseYear = parseInt(tpl.opts[0]);
            if (!isNaN(baseYear)) {
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
        }

        normalBank.push({
            id: `n_${i}`,
            type: "normal",
            question: tpl.q,
            options,
            answer,
            userAnswer: null,
            isAnswered: false
        });
    }

    // 生成难题库
    for (let i = 0; i < totalHard; i++) {
        const tpl = hardTemplates[i % hardTemplates.length];
        hardBank.push({
            id: `h_${i}`,
            type: "hard",
            question: tpl.q,
            options: [...tpl.opts],
            answer: tpl.ans,
            userAnswer: null,
            isAnswered: false
        });
    }

    return { easyBank, normalBank, hardBank };
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
const { easyBank, normalBank, hardBank } = generateQuestionBank();
const totalQuestions = 20;
const easyCount = 8;
const normalCount = 8;
const hardCount = 4;

let currentQuestions = [];
let currentIndex = 0;
let score = 0;

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
const prevBtn = document.getElementById('prevBtn');
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
        const data = localStorage.getItem(DONE_KEY);
        return data ? JSON.parse(data) : [];
    } catch (e) {
        return [];
    }
}

function saveDoneIds(ids) {
    localStorage.setItem(DONE_KEY, JSON.stringify([...new Set(ids)]));
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
    const availableEasy = easyBank.filter(q => !doneIds.includes(q.id));
    const availableNormal = normalBank.filter(q => !doneIds.includes(q.id));
    const availableHard = hardBank.filter(q => !doneIds.includes(q.id));

    if (availableEasy.length < easyCount || availableNormal.length < normalCount || availableHard.length < hardCount) {
        alert('题库新题已不足，清空历史记录重新抽题');
        localStorage.removeItem(DONE_KEY);
        return pickQuestions();
    }

    const pickedEasy = shuffleArray(availableEasy).slice(0, easyCount);
    const pickedNormal = shuffleArray(availableNormal).slice(0, normalCount);
    const pickedHard = shuffleArray(availableHard).slice(0, hardCount);
    const all = [...pickedEasy, ...pickedNormal, ...pickedHard];
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
    resultModal.classList.add('hidden');
    startScreen.classList.add('hidden');
    gameBody.classList.remove('hidden');
    scoreEl.textContent = score;
    updateStats();
    renderQuestion();
}

function renderQuestion() {
    const q = currentQuestions[currentIndex];
    let tagText = '';
    let tagClass = 'question-tag ';
    switch(q.type) {
        case 'easy':
            tagText = '简单题 · 1分';
            tagClass += 'easy';
            break;
        case 'normal':
            tagText = '普通题 · 2分';
            tagClass += 'normal';
            break;
        case 'hard':
            tagText = '难题 · 4分';
            tagClass += 'hard';
            break;
    }
    questionTagEl.textContent = tagText;
    questionTagEl.className = tagClass;

    questionTextEl.textContent = q.question;
    optionsListEl.innerHTML = '';

    prevBtn.disabled = currentIndex <= 0;
    nextBtn.disabled = !q.isAnswered;

    q.options.forEach((opt, idx) => {
        const item = document.createElement('div');
        item.className = 'option-item';
        item.textContent = opt;
        item.dataset.index = idx;

        if (q.isAnswered) {
            item.classList.add('disabled');
            if (idx === q.answer) {
                item.classList.add('correct');
            }
            if (idx === q.userAnswer && idx !== q.answer) {
                item.classList.add('wrong');
            }
        } else {
            item.addEventListener('click', handleOptionClick);
        }

        optionsListEl.appendChild(item);
    });
}

function handleOptionClick(e) {
    const q = currentQuestions[currentIndex];
    if (q.isAnswered) return;

    const selectedIdx = parseInt(e.target.dataset.index);
    q.userAnswer = selectedIdx;
    q.isAnswered = true;

    const items = document.querySelectorAll('.option-item');
    items.forEach(item => item.classList.add('disabled'));
    
    if (selectedIdx === q.answer) {
        e.target.classList.add('correct');
        let addScore = 0;
        switch(q.type) {
            case 'easy': addScore = 1; break;
            case 'normal': addScore = 2; break;
            case 'hard': addScore = 4; break;
        }
        score += addScore;
        scoreEl.textContent = score;
    } else {
        e.target.classList.add('wrong');
        items[q.answer].classList.add('correct');
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
    const merged = [...doneIds, ...newIds];
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

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        saveProgress();
        updateStats();
        renderQuestion();
    }
});

startBtn.addEventListener('click', () => initGame(true));
continueBtn.addEventListener('click', () => initGame(false));
restartBtn.addEventListener('click', () => {
    resultModal.classList.add('hidden');
    initGame(true);
});
backHomeBtn.addEventListener('click', () => {
    window.location.href = "https://Xjw20.github.io/X/";
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