let h1 = document.querySelector('.head1');
let h2 = document.querySelector('h2')
let btn = document.querySelector('button')
let img = document.querySelector('img')

function reset(){
    img.src="./Assets/Images/flip-coin.png"
    h1.innerHTML = 'DO TOSS NOW!'
    h2.innerHTML = ''
}

function tossNow(index){
    console.log(index);
    let randomNumber = Math.ceil(Math.random()*2)
    console.log(randomNumber);
    if(index === 'HEADS' && randomNumber === 1 || index === 'TAILS' && randomNumber === 2){
        console.log('YOU WON THE TOSS!');
        h2.innerHTML = 'CONGRATULAIONS! YOU WON THE TOSS!'
        h1.innerHTML = index
        img.src="./Assets/Images/HEAD (1).png"
    }else {
        console.log('YOU LOSS THE TOSS!');
        h1.innerHTML = index
        h2.innerHTML = 'YOU LOSS THE TOSS!!'
        img.src="./Assets/Images/HEAD (2).png"
    }

    // if(randomNumber === 1){
    //     img.src="./Assets/Images/HEAD (2).png"
    // }else(
    //     img.src="./Assets/Images/HEAD (1).png"
    // )
}












// function reset(){
//     img.src="./Assets/Images/flip-coin.png"
// }

// function tossNow(recive){
//     let x = Math.ceil(Math.random()*2)
//     console.log(x)
//     if(x === 1){
//         console.log('YOU WON THE TOSS!');
//         h1.innerHTML = recive,
//         h2.innerHTML =  `CONGRATULAIONS! YOU WON THE TOSS! `
//         img.src="./Assets/Images/HEAD (1).png"
//     }else{
//         console.log('YOU LOSS THE TOSS!');
//         h1.innerHTML = recive,
//         h2.innerHTML =  `YOU LOSS THE TOSS!`
//         img.src="./Assets/Images/HEAD (2).png"
//     }
// }