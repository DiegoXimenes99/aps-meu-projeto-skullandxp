function mostrarSecao(id) {
  const secoes = document.querySelectorAll(".secao");
  secoes.forEach(secao => secao.style.display = "none");

  const secaoSelecionada = document.getElementById(id);
  if (secaoSelecionada) {
    secaoSelecionada.style.display = "block";
  }
}

function enviarRegistro(event) {
  event.preventDefault(); 
  const registro = document.getElementById('registro');
  const msgSucesso = registro.querySelector('.msg-sucesso');
  msgSucesso.style.display = 'block';
  event.target.reset();

  // 3000 = 3s aumentar posso por mais segundos de tela
  setTimeout(() => {
    msgSucesso.style.display = 'none';
    mostrarSecao('inicio');
  }, 3000);
}