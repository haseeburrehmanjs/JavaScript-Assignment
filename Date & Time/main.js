let mint = document.querySelector('.mint')
let hour = document.querySelector('.hour')

// setInterval(function()
// clearInterval(seconds)
// clearTimeout(second)

let sec = document.querySelector('.sec')
function start() {
    let second = 0
    setInterval(function () {
        second += 1
        sec.innerHTML = second
    }, 1000)
}

function pouse() {
    clearInterval(function () {
        clearInterval(seconds)
        clearTimeout(second)
    })
}