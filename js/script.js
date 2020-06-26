const request = new XMLHttpRequest()

function contries() {
    request.open('GET', 'https://restcountries.eu/rest/v2/all', true);
    const select = document.getElementById('contries');

    request.onload = function(res) {
        let data = JSON.parse(res.target.response);
    
        data.forEach(d => {
            const option = document.createElement('option');
            option.innerText = d.name;
            option.value = d.name;
            select.appendChild(option)
        })
    }
    
    request.send();
}

contries();