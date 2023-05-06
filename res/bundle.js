//localStorage.getItem('BTN_ACCEPT', "on");
FC_BUTTON_ACCEPT = localStorage.getItem('BTN_ACCEPT');

if(FC_BUTTON_ACCEPT === null) {
    localStorage.setItem('BTN_ACCEPT', 'on');
}

function buttonsHTML() {

    // BUTTON
    let buttonsCode = document.querySelectorAll('.kI42CN');
    let btn = document.createElement("BUTTON");
    btn.className = 'AC ' + 'btn-turn-on';
    if (FC_BUTTON_ACCEPT === 'on') {
        btn.innerText = 'Auto-Accept ON';
        btn.classList.add('btn-turn-on');
        btn.classList.remove('btn-turn-off');
    } else {
        btn.innerText = 'Auto-Accept OFF';
        btn.classList.add('btn-turn-off');
        btn.classList.remove('btn-turn-on');
    }
    buttonsCode[0].appendChild(btn);

    // SWITCH
    let btnAC = document.querySelectorAll('.AC');
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
            btnAC[0].innerText = 'Auto-Accept ON';
            btnAC[0] = tempAC;
        }
    });
}

function autoAccept() {
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
    autoAccept();
}, 4000)