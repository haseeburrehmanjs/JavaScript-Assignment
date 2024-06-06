let search = document.querySelector('#search-input');
let form = document.querySelector('form');


form.addEventListener('submit', function (event) {
    event.preventDefault()
    if (search.value === '') {
        // alert('Please Enter Something')
        window.location = url
    } else {
        let url = `https://www.google.com/search?q= ${search.value}`
        // window.open(url) 
        window.location = url
        search.value = ''
    }
})


