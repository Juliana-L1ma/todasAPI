//tags para aparecer as opções de albuns
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
acc[i].addEventListener("click", function() {
/* Toggle between adding and removing the "active" class,
to highlight the button that controls the panel */
this.classList.toggle("active");

/* Toggle between hiding and showing the active panel */
var panel = this.nextElementSibling;
if (panel.style.display === "block") {
  panel.style.display = "none";
} else {
  panel.style.display = "block";
}
});
}

// Aqui começa uma API de informações dos albuns

//API album 1 ********************************************************************************************************
const album1Info = '{"estilo": "Heavy Metal", "lancamento": "1991", "artista": "Metallica", "quantidade": "12 músicas", "lucro": "5 milhões", "single": "Enter Sandman"}'
const album1 = JSON.parse(album1Info)
console.log(album1);

var link1 = 'Clique para ir ao álbum';
var URL = 'https://open.spotify.com/album/2Kh43m04B1UkVcpcRa1Zug?si=gDW7ySeNTAWlAsqWpJE_FQ/';

    function chamaAlbum1(){
    document.getElementById("artista1").innerHTML = "Artista: " + album1.artista;
    document.getElementById("estilo1").innerHTML = "Estilo do álbum: " + album1.estilo;
    document.getElementById("lancamento1").innerHTML = "Ano de lançamento: " + album1.lancamento;
    document.getElementById("quantidadeMusicas1").innerHTML = "Quantidade de músicas: " + album1.quantidade;
    document.getElementById("lucro1").innerHTML = "Lucro com o álbum: " + album1.lucro;
    document.getElementById("single1").innerHTML = "Single: " + album1.single;
    document.getElementById("linkalbum1").innerHTML = link1.link(URL);
}

  //API album 2 ********************************************************************************************************
const album2Info = '{"estilo": "Hard Rock", "lancamento": "1987", "artista": "Guns n Roses", "quantidade": "12 músicas", "lucro": "1 milhao", "single": "Welcome to the jungle"}'
const album2 = JSON.parse(album2Info)
console.log(album2);
var link2 = 'Clique para ir ao álbum';
var URL2 = 'https://open.spotify.com/album/3I9Z1nDCL4E0cP62flcbI5?si=cOSJQew-RFWzf1NBRKPnrQ/';

    function chamaAlbum2(){
    document.getElementById("artista2").innerHTML = "Artista: " + album2.artista;
    document.getElementById("estilo2").innerHTML = "Estilo do álbum: " + album2.estilo;
    document.getElementById("lancamento2").innerHTML = "Ano de lançamento: " + album2.lancamento;
    document.getElementById("quantidadeMusicas2").innerHTML = "Quantidade de músicas: " + album2.quantidade;
    document.getElementById("lucro2").innerHTML = "Lucro com o álbum: " + album2.lucro;
    document.getElementById("single2").innerHTML = "Single: " + album2.single;
    document.getElementById("linkalbum2").innerHTML = link2.link(URL2);

  }


//API album 3 ********************************************************************************************************
const album3Info = '{"estilo": "Rock", "lancamento": "1999", "artista": "Red Hot Chili Peppers", "quantidade": "18 músicas", "lucro": "1 milhao", "single": "Californication"}'
const album3 = JSON.parse(album3Info)
console.log(album3);
var link3 = 'Clique para ir ao álbum';
var URL3 = 'https://open.spotify.com/album/2Y9IRtehByVkegoD7TcLfi?si=j6HH3iw1ROONh-Iv-MPEqg/';

    function chamaAlbum3(){
    document.getElementById("artista3").innerHTML = "Artista: " + album3.artista;
    document.getElementById("estilo3").innerHTML = "Estilo do álbum: " + album3.estilo;
    document.getElementById("lancamento3").innerHTML = "Ano de lançamento: " + album3.lancamento;
    document.getElementById("quantidadeMusicas3").innerHTML = "Quantidade de músicas: " + album3.quantidade;
    document.getElementById("lucro3").innerHTML = "Lucro com o álbum: " + album3.lucro;
    document.getElementById("single3").innerHTML = "Single: " + album3.single;
    document.getElementById("linkalbum3").innerHTML = link3.link(URL3);
  }

  //API album 4 ********************************************************************************************************
const album4Info = '{"estilo": "Pop", "lancamento": "2021", "artista": "Taylor Swift", "quantidade": "30 músicas", "lucro": "1 milhao", "single": "All to well"}'
const album4 = JSON.parse(album4Info)
console.log(album4);
var link4 = 'Clique para ir ao álbum';
var URL4 = 'https://open.spotify.com/album/6kZ42qRrzov54LcAk4onW9?si=BVMEaxUXQlaldmM8SIjmfQ/';
    function chamaAlbum4(){
    document.getElementById("artista4").innerHTML = "Artista: " + album4.artista;
    document.getElementById("estilo4").innerHTML = "Estilo do álbum: " + album4.estilo;
    document.getElementById("lancamento4").innerHTML = "Ano de lançamento: " + album4.lancamento;
    document.getElementById("quantidadeMusicas4").innerHTML = "Quantidade de músicas: " + album4.quantidade;
    document.getElementById("lucro4").innerHTML = "Lucro com o álbum: " + album4.lucro;
    document.getElementById("single4").innerHTML = "Single: " + album4.single;
    document.getElementById("linkalbum4").innerHTML = link4.link(URL4);

  }

  //API album 5 ********************************************************************************************************
const album5Info = '{"estilo": "Pop", "lancamento": "2021", "artista": "Justin Bieber", "quantidade": "16 músicas", "lucro": "1 milhao", "single": "Hold on"}'
const album5 = JSON.parse(album5Info)
console.log(album5);
var link5 = 'Clique para ir ao álbum';
var URL5 = 'https://open.spotify.com/album/5dGWwsZ9iB2Xc3UKR0gif2?si=ITX_UD_XRMyL4q2D8diemg/';

    function chamaAlbum5(){
    document.getElementById("artista5").innerHTML = "Artista: " + album5.artista;
    document.getElementById("estilo5").innerHTML = "Estilo do álbum: " + album5.estilo;
    document.getElementById("lancamento5").innerHTML = "Ano de lançamento: " + album5.lancamento;
    document.getElementById("quantidadeMusicas5").innerHTML = "Quantidade de músicas: " + album5.quantidade;
    document.getElementById("lucro5").innerHTML = "Lucro com o álbum: " + album5.lucro;
    document.getElementById("single5").innerHTML = "Single: " + album5.single;
    document.getElementById("linkalbum5").innerHTML = link5.link(URL5);

  }

  //API album 6 ********************************************************************************************************
const album6Info = '{"estilo": "Pop", "lancamento": "2022", "artista": "Twenty one Pilots", "quantidade": "11 músicas", "lucro": "1 milhao", "single": "Chocker"}'
const album6 = JSON.parse(album6Info)
console.log(album6);
var link6 = 'Clique para ir ao álbum';
var URL6 = 'https://open.spotify.com/album/0Q5XBpCYFgUWiG9DUWyAmJ?si=xtFubzMLSyKxF-yYuat_Pg/';

    function chamaAlbum6(){
    document.getElementById("artista6").innerHTML = "Artista: " + album6.artista;
    document.getElementById("estilo6").innerHTML = "Estilo do álbum: " + album6.estilo;
    document.getElementById("lancamento6").innerHTML = "Ano de lançamento: " + album6.lancamento;
    document.getElementById("quantidadeMusicas6").innerHTML = "Quantidade de músicas: " + album6.quantidade;
    document.getElementById("lucro6").innerHTML = "Lucro com o álbum: " + album6.lucro;
    document.getElementById("single6").innerHTML = "Single: " + album6.single;
    document.getElementById("linkalbum6").innerHTML = link6.link(URL6);

  }

  //API album 7 ********************************************************************************************************
const album7Info = '{"estilo": "Rap", "lancamento": "2002", "artista": "Eminem", "quantidade": "20 músicas", "lucro": "1 milhao", "single": "Without Me"}'
const album7 = JSON.parse(album7Info)
console.log(album7);
var link7 = 'Clique para ir ao álbum';
var URL7 = 'https://open.spotify.com/album/2cWBwpqMsDJC1ZUwz813lo?si=cGTYxPEKQRWngqAWlwsVmg/';
    function chamaAlbum7(){
    document.getElementById("artista7").innerHTML = "Artista: " + album7.artista;
    document.getElementById("estilo7").innerHTML = "Estilo do álbum: " + album7.estilo;
    document.getElementById("lancamento7").innerHTML = "Ano de lançamento: " + album7.lancamento;
    document.getElementById("quantidadeMusicas7").innerHTML = "Quantidade de músicas: " + album7.quantidade;
    document.getElementById("lucro7").innerHTML = "Lucro com o álbum: " + album7.lucro;
    document.getElementById("single7").innerHTML = "Single: " + album7.single;
    document.getElementById("linkalbum7").innerHTML = link7.link(URL7);

  }

  //API album 8 ********************************************************************************************************
const album8Info = '{"estilo": "Rap", "lancamento": "1997", "artista": "Racionais Mcs", "quantidade": "12 músicas", "lucro": "1 milhao", "single": "Diário de um detento"}'
const album8 = JSON.parse(album8Info)
console.log(album8);
var link8 = 'Clique para ir ao álbum';
var URL8 = 'https://open.spotify.com/album/1UzrzuOmZfBgXyS3pgKD10?si=6jI0rY1SSgmctU6LlTK8bQ/';

    function chamaAlbum8(){
    document.getElementById("artista8").innerHTML = "Artista: " + album8.artista;
    document.getElementById("estilo8").innerHTML = "Estilo do álbum: " + album8.estilo;
    document.getElementById("lancamento8").innerHTML = "Ano de lançamento: " + album8.lancamento;
    document.getElementById("quantidadeMusicas8").innerHTML = "Quantidade de músicas: " + album8.quantidade;
    document.getElementById("lucro8").innerHTML = "Lucro com o álbum: " + album8.lucro;
    document.getElementById("single8").innerHTML = "Single: " + album8.single;
    document.getElementById("linkalbum8").innerHTML = link8.link(URL8);

  }

  //API album 9 ********************************************************************************************************
const album9Info = '{"estilo": "Rap", "lancamento": "2011", "artista": "Criolo", "quantidade": "11 músicas", "lucro": "1 milhao", "single": "Não existe amor em SP"}'
const album9 = JSON.parse(album9Info)
console.log(album9);
var link9 = 'Clique para ir ao álbum';
var URL9 = 'https://open.spotify.com/album/2zeWAYgh0WfMhiHwvUV15b?si=w7z-TXDjT2itC121mCyX7A/';

    function chamaAlbum9(){
    document.getElementById("artista9").innerHTML = "Artista: " + album9.artista;
    document.getElementById("estilo9").innerHTML = "Estilo do álbum: " + album9.estilo;
    document.getElementById("lancamento9").innerHTML = "Ano de lançamento: " + album9.lancamento;
    document.getElementById("quantidadeMusicas9").innerHTML = "Quantidade de músicas: " + album9.quantidade;
    document.getElementById("lucro9").innerHTML = "Lucro com o álbum: " + album9.lucro;
    document.getElementById("single9").innerHTML = "Single: " + album9.single;
    document.getElementById("linkalbum9").innerHTML = link9.link(URL9);

  }

  const nav = document.querySelector(".nav");
const btnMenu = document.querySelector(".btn-menu");
const menu = document.querySelector(".menu");

function handleButtonClick(event) {
  if (event.type === "touchstart") event.preventDefault();
  event.stopPropagation();
  nav.classList.toggle("active");
  handleClickOutside(menu, () => {
    nav.classList.remove("active");
    setAria();
  });
  setAria();
}

function handleClickOutside(targetElement, callback) {
  const html = document.documentElement;
  function handleHTMLClick(event) {
    if (!targetElement.contains(event.target)) {
      targetElement.removeAttribute("data-target");
      html.removeEventListener("click", handleHTMLClick);
      html.removeEventListener("touchstart", handleHTMLClick);
      callback();
    }
  }
  if (!targetElement.hasAttribute("data-target")) {
    html.addEventListener("click", handleHTMLClick);
    html.addEventListener("touchstart", handleHTMLClick);
    targetElement.setAttribute("data-target", "");
  }
}

function setAria() {
  const isActive = nav.classList.contains("active");
  btnMenu.setAttribute("aria-expanded", isActive);
  if (isActive) {
    btnMenu.setAttribute("aria-label", "Fechar Menu");
  } else {
    btnMenu.setAttribute("aria-label", "Abrir Menu");
  }
}

btnMenu.addEventListener("click", handleButtonClick);
btnMenu.addEventListener("touchstart", handleButtonClick);