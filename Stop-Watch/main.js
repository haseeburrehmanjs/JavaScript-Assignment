let secound = document.querySelector('#secound');
let mint = document.querySelector('#minute');
let hour = document.querySelector('#hour');


let sec = 0;
let mints = 0;
let hours = 0;
let startEntervel;

function startBtn(){
    startEntervel = setInterval(function(){
        sec += 1
        console.log(sec);
        secound.innerHTML = sec
        if(sec === 60){
            secound.innerHTML = sec
            sec = 0
            mints++
            mint.innerHTML  = mints
        }
        if (mints === 60){
            hour.innerHTML = hours
            mints = 0
            hours++
            hour.innerHTML = hours
        }
    }, 1000)
}

function stopBtn() {
    clearInterval(startEntervel)
    setTimeout(sec)
}
function resetBtn() {
    clearInterval(startEntervel)
    sec = 0;
    mints = 0;
    hours = 0;
    secound.innerHTML = 0;
    mint.innerHTML = 0;
    hour.innerHTML = 0;
}