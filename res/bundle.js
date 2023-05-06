let FC_BUTTON_ACCEPT = localStorage.getItem('BTN_ACCEPT');
let FC_THEME = localStorage.getItem('COLOR')

if(FC_THEME === null) {
    localStorage.setItem('COLOR', '#8f7bd1');
}

if(FC_BUTTON_ACCEPT === null) {
    localStorage.setItem('BTN_ACCEPT', 'on');
}

function buttonsHTML() {
    let buttonsCode = document.querySelectorAll('.kI42CN');

    // COLOR CHANGE

    let colorChange = document.createElement('INPUT')
    colorChange.type = 'color';
    colorChange.id ='colorPicker';
    colorChange.name = 'colorPicker';
    colorChange.classList.add('CPC');
    let textColorChange = document.createElement('div');
    textColorChange.innerText = 'Color: '
    textColorChange.classList.add('CPC');

    // BUTTON

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
    buttonsCode[0].appendChild(textColorChange);
    buttonsCode[0].appendChild(colorChange);

    document.querySelectorAll('#colorPicker')[0].value = localStorage.getItem('COLOR');

    // SWITCH
    let btnAC = document.querySelectorAll('.AC');
    btnAC[0].addEventListener('click', function buttonSwitchAC() {
        let tempAC = btnAC[0];
        if(!tempAC.classList.contains('btn-turn-off')) {
            tempAC.classList.remove('btn-turn-on');
            tempAC.classList.add('btn-turn-off');
            localStorage.setItem('BTN_ACCEPT', 'off');
            btnAC[0].innerText = 'Auto-Accept OFF';
            btnAC[0] = tempAC;
        } else {
            tempAC.classList.remove('btn-turn-off');
            tempAC.classList.add('btn-turn-on');
            localStorage.setItem('BTN_ACCEPT', 'on');
            btnAC[0].innerText = 'Auto-Accept ON';
            btnAC[0] = tempAC;
        }
    });
}

function changeColor () {
    let color = document.querySelectorAll('#colorPicker')[0].value;
    document.body.style.setProperty('--color-border', color);
    document.body.style.setProperty('--body-color', color);
    document.body.style.setProperty('--color-brand', color);
    document.body.style.setProperty('--btn-quaternary-bg', color);
    document.body.style.setProperty('--shadow-color', color + '22');
    document.body.style.setProperty('--block-header-bg', color + '13');
    document.body.style.setProperty('--btn-primary-bg', color);
    document.body.style.setProperty('--btn-primary-bg-hover', color + '64');
    document.body.style.setProperty('--btn-flush-filters-bg', color + '22');
    document.body.style.setProperty('--nav-link-bg', color + '22');
    document.body.style.setProperty('--btn-flush-filters-bg-hover', color + '05');

    localStorage.setItem('COLOR', color);

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
/* INTERVALS AND TIMEOUTS */


setTimeout(() => {
    buttonsHTML();
}, 300)

setInterval(() => {
    changeColor();
    }, 310)

setInterval(() => {
    autoAccept();
}, 4000)