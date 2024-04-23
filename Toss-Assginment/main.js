let h1 = document.querySelector('h1');
let h2 = document.querySelector('h2')
let btn = document.querySelector('button')


function tossNow(recive){
    let x = Math.ceil(Math.random(2)*2)
    console.log(x)
    if(x === 1){
        console.log('YOU WON THE TOSS!');
        h1.innerHTML = recive,
        h2.innerHTML =  `YOU WON THE TOSS! ` 
    }else{
        console.log('YOU LOSS THE TOSS!');
        h1.innerHTML = recive,
        h2.innerHTML =  `YOU LOSS THE TOSS! `
    }
}