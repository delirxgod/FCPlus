/*
function getUserInfo() {
    let infoId = [];
    let data = document.getElementsByClassName("usD7xn");
    console.log(data)
    if(data.length > 5) { 
        for ( var i=0 ; i < data.length ; i++ )
        {
        let tempName = data[i].innerHTML;
        data[i].innerHTML = tempName + "<br><br>" + "1250 pts"+ "<br>" + "1.09 KD" + "<br><br>Country:" + components.users.winrate;
        infoId.push(data[i].parentNode.parentNode.parentNode.href)
        console.log("infoId[i]")
        }
    }
}
*/

(function() {
    'use strict';
setInterval( () => {
            let btn = document.getElementsByClassName('J8yUlf rVPnYX JSdUlp');
            if( btn.length && btn[0].innerText.toLowerCase() == 'готов к игре' ) {
                btn[0].click();
    }
    else {
             let btn = document.getElementsByClassName('J8yUlf rVPnYX JSdUlp');
                if( btn.length && btn[0].innerText.toLowerCase() == 'ready' ) {
                btn[0].click();
    }}
}, 3500 )
})();
