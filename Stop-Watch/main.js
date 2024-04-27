let secound = document.querySelector('#second');
let mint = document.querySelector('#mint');
let hour = document.querySelector('#hour');


let sec = 0;
let mints = 0;
let hours = 0;
let startEntervel;

function startBtn() {
    startEntervel = setInterval(function(){
        sec += 1
        if(sec === 60){
            secound.innerHTML = sec
        }
    },1000)
}

function stopBtn() {
    clearInterval(startEntervel)
    setTimeout(sec)
}
function resetBtn() {
    clearInterval(startEntervel)
    sec = 0
    secound.innerHTML = 0;
    mint.innerHTML = 0;
    hour.innerHTML = 0;
}