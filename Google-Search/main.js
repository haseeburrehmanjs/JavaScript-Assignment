let search = document.querySelector('#search-input');
let form = document.querySelector('form');


form.addEventListener('submit', function (event) {
    event.preventDefault()
    let url = `https://www.google.com/search?q= ${search.value}`
    // window.open(url) 
    window.location = url
    search.value = ''
})



