//método fetch() para buscar o arquivo dados.json transformando o resultado em objeto usando o metodo response.json()

fetch('dados.json')
.then(response => response.json())
.then(informacoes => {
    //acessando os dados do objeto json e adicionando ao html dentro de um elemento div usando a propriedade innerHTML (front end)

    document.getElementById('imagemMetallica').innerHTML = informacoes.metallica.image;
    document.getElementById('nomeMetallica').innerHTML = "Artista: " +  informacoes.metallica.nome;
    document.getElementById('discoMetallica').innerHTML = "Álbum: " + informacoes.metallica.albuns;
    document.getElementById('estiloMetallica').innerHTML ="Gênero: " + informacoes.metallica.style;
    document.getElementById('precoMetallica').innerHTML = "Valor: " + informacoes.metallica.price;

    document.getElementById('imagemRedHot').innerHTML =  informacoes.redHot.image;
    document.getElementById('nomeRedHot').innerHTML = "Artista: " + informacoes.redHot.nome;
    document.getElementById('discoRedHot').innerHTML = "Álbum: " + informacoes.redHot.albuns;
    document.getElementById('estiloRedHot').innerHTML = "Gênero: " + informacoes.redHot.style;
    document.getElementById('precoRedHot').innerHTML = "Valor: " + informacoes.redHot.price;

    document.getElementById('imagemGuns').innerHTML = informacoes.guns.image;
    document.getElementById('nomeGuns').innerHTML = "Artista: " + informacoes.guns.nome;
    document.getElementById('discoGuns').innerHTML = "Álbum: " + informacoes.guns.albuns;
    document.getElementById('estiloGuns').innerHTML = "Gênero: " + informacoes.guns.style;
    document.getElementById('precoGuns').innerHTML = "Valor: " + informacoes.guns.price;


})