let seound = document.querySelector('#second');
let mint = document.querySelector('#mint');
let hour = document.querySelector('#hour');

let sec = 0;
function startBtn(){
    console.log('start watch');
    setInterval(function (){
        sec += 1
        seound.innerHTML = sec
        console.log(sec);
        if (sec === 60){
            seound.innerHTML = 0
            sec = 0
        }
    } ,1000)
}

function stopBtn(){
    console.log('Stop Watch');
    setTimeout(sec)
    se
}
function resetBtn(){
    console.log('Reset Watch');

}