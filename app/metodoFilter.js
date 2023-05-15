const botoes = document.querySelectorAll(".btn")

botoes.forEach(btn => {
    btn.addEventListener("click", filtrarLivros)
})


function filtrarLivros(){

    const elementoBTN = document.getElementById(this.id)
    const categoria = elementoBTN.value
    let LivrosFiltrados = livros.filter(livro =>

     livro.categoria == `${categoria}`
    )
    elementoParaInserirLivros.innerHTML = ""
    exibirOsLivrosNaTela(LivrosFiltrados)
}


var BTNDisponiveis = document.querySelector(".btn-disponiveis")

BTNDisponiveis.addEventListener("click", LivrosDisponiveis)


function LivrosDisponiveis() {

    var LDisponivel = livros.filter(livro => 
        livro.quantidade > 0
    )

    exibirOsLivrosNaTela(LDisponivel)

    carregaValorTotal.style.display = "block"

    var valorTotal = 0

    for(var i = 0; i < LDisponivel.length;i++){
        var valor =  LDisponivel[i].preco
        valorTotal +=  valor
    }
    
    const preco = document.getElementById("valor")
    
    preco.innerHTML = `${valorTotal.toFixed(2)}`
}
