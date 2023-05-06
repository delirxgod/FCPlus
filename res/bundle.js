//localStorage.getItem('BTN_ACCEPT', "on");
FC_BUTTON_ACCEPT = localStorage.getItem('BTN_ACCEPT');

if(FC_BUTTON_ACCEPT === null) {
    localStorage.setItem('BTN_ACCEPT', "on");
}



function buttonsHTML() {
    let buttonsCode = document.querySelectorAll('.m4tQCU');

    buttonsCode[0].innerHTML = '<ul class="B2b9Lj"><li class="j0yYJr niqoHv"><a class="AFLXSF" href="/"><span>Главная</span></a></li><li class="j0yYJr"><a class="AFLXSF" href="/matches"><span>Матчи</span></a></li><li class="j0yYJr"><div class="IbDbLH"><button type="button" class="WA17Fa"><div class="GCQCcK"><span>Соревнования</span></div></button><div class="Dt_KDD"><a class="mFXxRZ" href="/leagues"><span>Лиги</span></a><a class="mFXxRZ" href="/tournaments"><span>Турниры</span></a></div></div></li><li class="j0yYJr"><div class="IbDbLH"><button type="button" class="WA17Fa"><div class="GCQCcK"><span>Топы</span></div></button><div class="Dt_KDD"><a class="mFXxRZ" href="/users"><span>Игроки</span></a><a class="mFXxRZ" href="/teams"><span>Команды</span></a></div></div></li><li class="j0yYJr"><a class="AFLXSF" href="/streams"><span>Стримы</span></a></li><li class="j0yYJr"><a class="AFLXSF" href="/servers"><span>Серверы</span></a></li><li class="j0yYJr"><a class="AFLXSF" href="https://forums.fastcup.net" target="_blank" rel="noopener noreferrer"><span>Форум</span></a></li><li class="j0yYJr"><a class="AFLXSF" href="https://gameguard.ac" target="_blank" rel="noopener noreferrer"><span>Античит</span></a></li><li class="j0yYJr"><div class="IbDbLH"><button type="button" class="WA17Fa"><div class="GCQCcK"><span>Помощь</span></div></button><div class="Dt_KDD"><a class="mFXxRZ" href="/faq">FAQ</a><a class="mFXxRZ" href="/rules"><span>Правила</span></a><button class="mFXxRZ"><div class="GCQCcK"><span>Поддержка</span></div></button></div></div></li><div class="btn"><button class="tog AC btn-turn-on">Auto-accept</button></div></li></div></a></li></ul>'

    let btnAC = document.querySelectorAll('.AC');
    if (FC_BUTTON_ACCEPT === "on") {
        btnAC[0].innerText = "Auto-Accept ON";
    } else {
        btnAC[0].innerText = "Auto-Accept OFF";
    }
    btnAC[0].addEventListener('click', function buttonSwitchAC() {
        let tempAC = btnAC[0];
        if(!tempAC.classList.contains('btn-turn-off')) {
            tempAC.classList.remove('btn-turn-on');
            tempAC.classList.add('btn-turn-off');
            localStorage.setItem('BTN_ACCEPT', 'off');
            btnAC[0].innerText = "Auto-Accept OFF";
            btnAC[0] = tempAC;
        }
        else {
            tempAC.classList.remove('btn-turn-off');
            tempAC.classList.add('btn-turn-on');
            localStorage.setItem('BTN_ACCEPT', 'on');
            btnAC[0].innerText = "Auto-Accept ON";
            btnAC[0] = tempAC;
        }
    });
}

function autoaccept() {
    FC_BUTTON_ACCEPT = localStorage.getItem('BTN_ACCEPT');
    if(FC_BUTTON_ACCEPT === 'on') {
        let temp = document.querySelectorAll('.J8yUlf');
        for (let i = 0; i < temp.length; i++) {
            if (temp[i].innerText.toLowerCase() === 'ready') {
                temp[i].click();
            } else if (temp[i].innerText.toLowerCase() === 'готов к игре') {
                temp[i].click();
            }
        }
    }
}

setTimeout(() => {
    buttonsHTML();
}, 300)

setInterval(() => {
    autoaccept();
}, 4000)