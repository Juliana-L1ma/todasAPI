//objeto que contém todos os dados que usaremos da API
const api = {
    key: "64ed82577ced7f69cb1687f0ce536131",
    base: "https://api.openweathermap.org/data/2.5/",
    //língua
    lang: "pt_br",
    //unidade de medida
    units: "metric"
}

   //selecionando os elementos do html no js
    const city = document.querySelector('.city')
    const date = document.querySelector('.date');
    const container_img = document.querySelector('.container-img');
    const container_temp = document.querySelector('.container-temp');
    const temp_number = document.querySelector('.container-temp div');
    const temp_unit = document.querySelector('.container-temp span');
    const weather_t = document.querySelector('.weather');
    const search_input = document.querySelector('.form-control');
    const search_button = document.querySelector('.btn');
    const low_high = document.querySelector('.low-high');


    //Eventos para realizar a pesquisa, seja clicando no botão como no primeiro, 
    search_button.addEventListener('click', function() {
        //usa o que foi colocado no input como parâmetro
        searchResults(search_input.value)
    })
     //ou clicando no enter como nesse segundo, quando acionados chama a função searchResults
    search_input.addEventListener('keypress', enter)
    function enter(event) {
        key = event.keyCode
        if (key === 13) {
            searchResults(search_input.value)
        }
    }


    function searchResults(city) {
        //requisição da API e retorna em formato JSON
        fetch(`${api.base}weather?q=${city}&lang=${api.lang}&units=${api.units}&APPID=${api.key}`)
            .then(response => {
                //se a requisição não der certo manda mensagem de erro, por exemplo quando o usuário digita errado
                if (!response.ok) {
                    throw new Error(`http error: status ${response.status}`)
                }
                return response.json();
            })
            .catch(error => {
                alert(error.message)
            })
            //função que retorna ela mesma como parâmetro para outra função que exibe na tela
            .then(response => {
                displayResults(response)
            });
    }

    //essa função imprime todos os dados climáticos do local digitado pelo usuário
    function displayResults(weather) {
        console.log(weather)
    
        city.innerText = `${weather.name}, ${weather.sys.country}`;
    
        let now = new Date();
        date.innerText = dateBuilder(now);
    
        //o icone aparece de acordo com a descrição do clima
        let iconName = weather.weather[0].icon;
        container_img.innerHTML = `<img src="./icons/${iconName}.png">`;
    
        //Math.round arredonda a temperatura 
        let temperature = `${Math.round(weather.main.temp)}`
        temp_number.innerHTML = temperature;
        temp_unit.innerHTML = `°c`;
    
        weather_tempo = weather.weather[0].description;
        weather_t.innerText = capitalizeFirstLetter(weather_tempo)
    
        low_high.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;
    }

    function dateBuilder(d) {
        //arrays para dia da semana e ano
        let days = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
        let months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julio", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    
        //funções do JS para manipular datas
        let day = days[d.getDay()]; //retorna um número de 0 a 6 onde o 0 é domingo
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();
    
        return `${day}, ${date} ${month} ${year}`;
    }
    
    
    //descrição do clima
     function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
     }
    
