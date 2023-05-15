const elementoParaInserirLivros = document.getElementById('livros')
const carregaValorTotal = document.getElementById("valor_total_livros_disponiveis")


function exibirOsLivrosNaTela(listaDeLivros) {
    
  carregaValorTotal.style.display = "none"
  
  listaDeLivros.forEach(livro => {

      var disponibilidade = livro.quantidade>0?"livros__imagens":" indisponivel"

        elementoParaInserirLivros.innerHTML += `
        <div class="livro">
        <img class="${disponibilidade}"  src="${livro.imagem}"
          alt="${livro.alt}" />
        <h2 class="livro__titulo">
          ${livro.titulo}
        </h2>
        <p class="livro__descricao">${livro.autor}</p>
        <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
        <div class="tags">
          <span class="tag">${livro.categoria}</span>
        </div>
      </div>
        `
    })

    console.log(listaDeLivros)
}



//Testando o metódo filter
const idades = [10,28,20,9,11,23,30,18]

const podeDirigir = idades.filter(pessoa => {
    return pessoa >= 18
})
