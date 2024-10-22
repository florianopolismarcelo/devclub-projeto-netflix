let botaoSom = document.querySelector(".botao-som");
let video = document.querySelector(".video");
let botao = document.querySelector(".link-info");
let modal = document.querySelector(".modal");
let audio = document.querySelector(".audio");

// Essa parte do código é para ligar o som
botaoSom.addEventListener("click", ligaSom);

function ligaSom() {
  //alert("Opa! O botão foi clicado")
  video.muted = !video.muted // Código para ligar e desligar o som 
}

// Essa parte do código é para mostrar modal
botao.addEventListener("click", mostrarModal);
modal.addEventListener("click", esconderModal);

function mostrarModal() {
  //alert("Fui Clicado")
  modal.style.display = "block";
}

function esconderModal() {
  modal.style.display = "none";
}

//Tocar o TUNDUM

window.addEventListener("load", tocarAudio);
function tocarAudio() {
  audio.play();
}


// Abaixo: é uma  forma de fazer o código do TUNDUM acima.

/*

const audioOutraFormaDeFazer = document.querySelector(".audio");
window.addEventListener("load", () => {
  audioOutraFormaDeFazer.play();
});
*/

/*

// Dica de um colega abaixo também uma outra forma de fazer o código do TUNDUM acima.

e tem como fazer ele sem precisar colocar o caminho do Audio no HTML
voce so cria uma variavel ai no JS
declara a musica

const musica = new Audio('./src/audio/tudum-netflix-sound.mp3')

// e faz a função para ela tocar com botão ou sem


musicaFocoInput.addEventListener('change', ()=> {
  if(musica.paused) {
      musica.play()
  }else {
      musica.pause()
  }
})

// nesse meu caso estou usando aqueles botoes de mover para o lado

// E sem o botão?

window.addEventListener("load", () => document.querySelector(".audio").play());

*/

