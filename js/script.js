
function aumentar() {
  var elementosTexto = document.getElementsByClassName('mudar');
  for (var i = 0; i < elementosTexto.length; i++) {
      var tamanhoFonteAtual = parseInt(window.getComputedStyle(elementosTexto[i]).fontSize);
      elementosTexto[i].style.fontSize = (tamanhoFonteAtual + 2) + 'px';
  }
}


function diminuir() {
  var elementosTexto = document.getElementsByClassName('mudar');
  
  for (var i = 0; i < elementosTexto.length; i++) {
      var tamanhoFonteAtual = parseInt(window.getComputedStyle(elementosTexto[i]).fontSize);
      elementosTexto[i].style.fontSize = (tamanhoFonteAtual - 2) + 'px';
  }
}