let upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let lowerCase = 'abcdefghijklmnopqrstuvwxyz'
let number = '01234566789'
let symbols = '~!@#$%^&*()_+}<>?"|`'

function gerneratBtn(){
    console.log('Generate Password');
    upperCase = Math.floor(Math.random(upperCase))
    lowerCase = Math.floor(Math.random(lowerCase))
    number = Math.floor(Math.random(number))
    symbols = Math.floor(Math.random(symbols))
    console.log(upperCase);
}