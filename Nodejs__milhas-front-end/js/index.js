const container = document.querySelector(".container");
const locationsList = document.getElementById("list-destiny");
const depoimentosList = document.getElementById("list-depoimentos");
const inputDestino = document.getElementById("pesquisa-destino");

fetch('http://localhost:3000/destinos')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      const e = data[i];
      const locationElement = `<li>
      <img src=${e.imagens.foto_1} alt=${e.nome}>
      <p>${e.nome}</p>
      <span>R$ ${e.preco},00</span>
      <button>Ver Detalhes</button>
      </li>
      `
      locationsList.innerHTML += locationElement; 
    }
})

fetch('http://localhost:3000/depoimentos-home')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      const e = data[i];
      const depoimentoElement = `<li>
      <img src=${e.imagem} alt=${e.autor}>
      <div class="depoimento-text">
      <span>${e.depoimento}</span>
      <p>${e.autor}</p>
      </div>
      </li>
      `
      depoimentosList.innerHTML += depoimentoElement; 
    }
})

const containerDetails = document.querySelector(".container-details");
const imagemHeader = document.querySelector(".imagem-header");
const innerContainer = document.querySelector(".inner-container")

function buscarDestino() {
  fetch(`http://localhost:3000/destinos/busca?nome=${inputDestino.value}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      container.style.display = "none";
      containerDetails.style.display = "block";

      console.log(data)

      if(!data.destinosPorNome){
        let imagemHeaderElement = `
        <img src="https://img.freepik.com/free-photo/abstract-surface-textures-white-concrete-stone-wall_74190-8189.jpg" class="gradient">
        `
        imagemHeader.innerHTML = imagemHeaderElement;

        let innerContainerElement = `
        <h1>Poxa! Parece que nenhum destino foi encontrado.</h1>
        <button onclick="voltarHome()">Voltar</button>
        `
        innerContainer.innerHTML = innerContainerElement;
      } else {
  
        let destino = data.destinosPorNome[0]
  
        let imagemHeaderElement = `
        <img src=${destino.imagens.foto_1} class="gradient">
        `
        imagemHeader.innerHTML = imagemHeaderElement;
  
        let innerContainerElement = `
        <h1>Descubra mais sobre ${destino.nome}</h1>
        <h2>${destino.metas}</h2>
        <div class="images">
          <img src=${destino.imagens.foto_1}>
          <img src=${destino.imagens.foto_2}>
        </div>
        <span class="destiny-description">${destino.texto_descritivo}</span>
        <button onclick="voltarHome()">Voltar</button>
        `
        innerContainer.innerHTML = innerContainerElement;
      }
    });
};

function voltarHome() {
  container.style.display = "block";
  containerDetails.style.display = "none";
}