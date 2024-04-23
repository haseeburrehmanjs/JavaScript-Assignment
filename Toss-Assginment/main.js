let h1 = document.querySelector('.head1');
let h2 = document.querySelector('h2')
let btn = document.querySelector('button')
let img = document.querySelector('img')

function reset(){
    img.src="./Assets/Images/flip-coin.png"
}

function tossNow(recive){
    let x = Math.ceil(Math.random(2)*2)
    console.log(x)
    if(x === 1){
        console.log('YOU WON THE TOSS!');
        h1.innerHTML = recive,
        h2.innerHTML =  `CONGRATULAIONS! YOU WON THE TOSS! `
        img.src="./Assets/Images/HEAD (1).png"
    }else{
        console.log('YOU LOSS THE TOSS!');
        h1.innerHTML = recive,
        h2.innerHTML =  `YOU LOSS THE TOSS!`
        img.src="./Assets/Images/HEAD (2).png"
    }
}