const search = function () {
    const input = document.querySelector('.search-block > input')
    const searchBtn = document.querySelector('.search-block > button')

    input.addEventListener('input', (event) => {
        searchBtn.onclick = function() {
            console.log(event.target.value)
        }
    })
}

search()