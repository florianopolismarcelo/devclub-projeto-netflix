let botaoSom = document.querySelector(".botao-som");
let video = document.querySelector(".video");
let botao = document.querySelector(".link-info");
let modal = document.querySelector(".modal");

// Essa parte do código é para ligar o som
botaoSom.addEventListener("click", ligaSom);

function ligaSom() {
  //alert("Opa! O botão foi clicado")
  video.muted = false;
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
