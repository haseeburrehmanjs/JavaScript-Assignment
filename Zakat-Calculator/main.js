let head = document.querySelector('#head')
let input1 = document.querySelector('#input1')
let input2 = document.querySelector('#input2')
let input3 = document.querySelector('#input3')


function render(){
    let calculate = +input2.value * +input3.value
    console.log(calculate);
    let total = calculate + +input1.value
    console.log(total);
    let percentage = total / 40
    console.log(percentage);
    head.innerHTML = `${percentage}`
}