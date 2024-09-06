function pesquisar() {
  // Seleciona a seção onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById("campo-pesquisa").value

// se camposPesquisa for igual a vazio ("")
if (!campoPesquisa) {
  section.innerHTML = "<p>Nenhuma infromação foi encontrada</p>"
  return
}
// interpreta todas as palavras escritas no campo de pesquisa como letras minúsculas.
campoPesquisa = campoPesquisa.toLowerCase()

  //console.log(campoPesquisa);
  
  // Inicializa uma string vazia para armazenar os resultados
  let resultados = "";
  let titulo = "";
  let descricao = "";
  let tags = "";

  // Intera sobre cada dado da pesquisa e constrói o HTML para mostrar na página.
  for (let dado of dados) {
    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLocaleLowerCase()
    tags = dado.tags.toLocaleLowerCase()
    //se titulo includes camposPesquisa ou descricao inclui campoPesquisa
    if (titulo.includes(campoPesquisa)|| descricao.includes(campoPesquisa)||tags.includes(campoPesquisa)) {
      // Cria um novo elemento HTML para cada resultado 
      resultados += `
      <div class="item-resultado">
        <h2>
          <a href="#" target="_blank">${dado.titulo}</a>
        </h2>
        <p class="descricao-meta">${dado.descricao}</p>
        <a href=${dado.link} target="_blank">Mais informações</a>
      </div>
    `;
    }
  }
  
  // Outra forma de atualizar o conteúdo da seção com os resultados
  // Se o loop if for verdadeiro ele me retornará uma informação, portanto, o campo de string não será vazia e deverá apresentar na tela os dados armazenados e processados na variável resultados.
  //if (resultados != "") 
    //{section.innerHTML = resultados;
  //}
  // Se não, ou seja, se resultados não conter string o que indica que a condição for é falsa deverá informar a mensagem "Cidade não encontrada"
  //else {
    //section.innerHTML = "<p> Cidade não encontrada </p>"

    if (!resultados) {
     resultados = "<p> Cidade não encontrada </p>"
    }
//Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
  
}