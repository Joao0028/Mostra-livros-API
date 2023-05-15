var btnOrdena = document.querySelector(".btn-ordenacao")

btnOrdena.addEventListener("click", ordena)


function ordena(){
    const livrosOrdenados = livros.sort((a,b)=> a.preco-b.preco)

    exibirOsLivrosNaTela(livrosOrdenados)
}
