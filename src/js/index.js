//console.log(document.getElementById("botao-alterar-tema"))
const botaoAlterarTema = document.getElementById("botao-alterar-tema");

const body = document.querySelector("body");
//console.log(body);
const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");

botaoAlterarTema.addEventListener("click", () => {
  const modoEscuroEstaAtivo = body.classList.contains("modo-escuro"); //verificando se o modo escuro está ativo

  body.classList.toggle("modo-escuro");

  if (modoEscuroEstaAtivo) {
    //body.classList.remove("modo-escuro");

    imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png");
  } else {
    //console.log(body.classList);
   // body.classList.add("modo-escuro");

    imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png");
  }
});
