let h1 = document.querySelector('.head1');
let h2 = document.querySelector('h2')
let btn = document.querySelector('button')
let img = document.querySelector('img')


function tossNow(recive){
    let x = Math.ceil(Math.random(2)*2)
    console.log(x)
    if(x === 1){
        console.log('YOU WON THE TOSS!');
        h1.innerHTML = recive,
        h2.innerHTML =  `CONGRATULAIONS! YOU WON THE TOSS! `
        img.src="https://blog.tcea.org/wp-content/uploads/2021/09/clip2-4.png"
    }else{
        console.log('YOU LOSS THE TOSS!');
        h1.innerHTML = recive,
        h2.innerHTML =  `YOU LOSS THE TOSS!`
        img.src="https://flipcoin.net/assets/website/extras/images/queen.png"
    }
}