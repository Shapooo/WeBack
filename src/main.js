let bkBoxStyle = `.bkBox{position:fixed;border-radius:5px;background:#fff;top:80px;right:20px;z-index:100000;padding:10px 15px;text-align:center;border:1px solid #a7a6a6}.bkBox-title{font-size:20px;color:#ff8200;margin:8px 0;font-weight:400;border:1px solid transparent;border-bottom-color:#a7a6a6}.bkBox-button{border-radius:2.25rem;display:block;background:#ffd3a3;padding:5px 8px;color:#fff;text-align:center;cursor:pointer;margin:16px auto 7px;border:0;font:white}.bkBox-button:hover{background:#ff8200}.box,.nav{width:300px;margin:auto;display:flex}.nav{height:30px;background-color:#fff;border:1px gray}.box{overflow:hidden}.bk-naviItem{color:#000;height:30px;width:100px;margin:auto;border:8px #000;float:left}.bk-naviItem,.bk-naviItem:hover{text-decoration:none}.bk-navi-inner{border-radius:8px;height:30px}.bk-navi-inner:hover{background-color:#f2f0ef}.bk-pageNumIndicator{margin:16px}.bk-settingPage{border-radius:5px;width:300px;height:150px;background-color:#f2f0ef;flex-shrink:0}.bk-input{border-radius:1em;border:2px solid #ffd3a3;height:20px;width:50px;text-align:center}.bk-input:hover{border:2px solid #ff8200}.bkBox-tip{height:100px;width:300px;display:flex;align-items:center;justify-content:center}`;

const SETTINGS_TEMP = `<div class="bk-pageNumIndicator"></div><div>下载 <input type="number" value="1" min="1" max="22" class="bk-input"> 至 <input type="number" value="22" min="1" max="22" class="bk-input"> 页</div><div><button class="bkBox-button">开始下载</button></div>`;

const TITLE_PIC = `<img src="data:image/png;base64,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">`;

const BKBOX_TEMP = `<div class="bkBox-title">${TITLE_PIC}</div><nav><div class="navi"></div></nav><section><div class="box"></div></section>`;


let globalConfig = {
    uid: $CONFIG.uid,
    httpInit: () => {
        return {
            headers: {
                "accept": "application/json, text/plain, */*",
                "accept-language": "zh-CN,zh;q=0.9,en-IN;q=0.8,en;q=0.7,ar;q=0.6",
                "sec-ch-ua":
                    '" Not A;Brand";v="99", "Chromium";v="101", "Google Chrome";v="101"',
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": '"macOS"',
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-requested-with": "XMLHttpRequest",
            },
            referrer: `https://weibo.com/u/${this.uid}`,
            referrerPolicy: "strict-origin-when-cross-origin",
            body: null,
            method: "GET",
            mode: "cors",
            credentials: "include",
        }
    }
}

const TT = (type, name) => {
    return (async () => {
        let a = await getPageAmount(type);
        console.log(`get amount of ${type} post: ${a}`);
        return { type: type, name: name, pageAmount: a }
    })();
}

let bkBox = document.createElement("div");
bkBox.className = "bkBox";
bkBox.innerHTML = BKBOX_TEMP;

let bkBoxStyleSheet = document.createElement("style");
bkBoxStyleSheet.innerText = bkBoxStyle;
bkBox.appendChild(bkBoxStyleSheet);

let bkBoxTip = document.createElement("div");
bkBoxTip.className = 'bkBox-tip';
bkBox.appendChild(bkBoxTip);

let bkTypes = [TT('fav', '我的收藏'), TT('like', '我的点赞'), TT('myblog', '我的发布')];
Promise.all(bkTypes).then((values) => {
    values.map((t) => {
        return {
            type: t.type, name: t.name, settingsPage: (() => {
                let type = t.type;
                let name = t.name;
                let pageAmount = t.pageAmount;
                let page = document.createElement('div');
                page.innerHTML = SETTINGS_TEMP;
                let pageNumIndicator = page.getElementsByClassName("bk-pageNumIndicator")[0];
                if (type == 'like') {
                    pageNumIndicator.innerHTML = '无法获知点赞总页数';
                    pageNumIndicator.title = "微博的接口并不返回全部点赞的数量；同样每页二十条";
                } else {
                    pageNumIndicator.innerHTML = name + "的总页数为 " + pageAmount;
                    pageNumIndicator.title = "每页二十条博文";
                }

                let pageEndInput = page.querySelectorAll('input')[1];
                pageEndInput.max = pageAmount;
                pageEndInput.value = pageAmount;
                let btn = page.getElementsByClassName("bkBox-button")[0];
                btn.addEventListener("click", async () => {
                    let dlRange_ = page.querySelectorAll("input");
                    let dlRange = [dlRange_[0].value, dlRange_[1].value];
                    hideAllButton();
                    await fetchAllPostMetas(type, dlRange);
                    showAllButton();
                })
                return page;
            })()
        };
    }).forEach((c) => {
        settleDownBkTypes(c.type, c.name, c.settingsPage);
        console.log(`settled post type ${c.type} to bkBox`);
    })
    document.body.appendChild(bkBox);
})

function hideAllButton() {
    let buttons = document.getElementsByClassName('bkBox-button');
    buttons.forEach(btn => {
        btn.style.display = 'none';
    })
}
function showAllButton() {
    let buttons = document.getElementsByClassName('bkBox-button');
    buttons.forEach(btn => {
        btn.style.display = 'block';
    })
}

function settleDownBkTypes(type, name, settingsPage) {
    let nav = bkBox.getElementsByClassName("navi")[0];
    let settingBox = bkBox.getElementsByClassName("box")[0];
    let naviButton = document.createElement("a");
    naviButton.innerHTML = "<div class='bk-navi-inner'>" + name + "</div>";
    naviButton.className = "bk-naviItem"
    naviButton.href = "#" + type;
    nav.appendChild(naviButton);
    let page = document.createElement("div");
    page.id = type;
    page.className = "bk-settingPage"
    page.appendChild(settingsPage);
    settingBox.appendChild(page);
    nav.append
}

async function getPageAmount(type) {
    if (type == 'like') {
        return Infinity;
    }
    let data = (await fetchMyContent(1, type)).data;
    let amount = 0;
    if (type == 'fav') {
        amount = data.total_number;
    } else {
        amount = data.total;
    }
    return Math.ceil(amount / 20);
}

function showTip(msg) {
    bkBoxTip.innerHTML = msg;
}