import { produtos  } from "./objetos.js";
console.table(produtos);

// Montando o Front-end

// Recuperar a main para receber os dados do JS, montando os cards
const elMain = document.querySelector('#gridProdutos');
console.log(elMain);

// Precisamos pegar cada um dos objetos do Array Produtos 
// Para fazer isso, usaremos uma estrutura de repetição chama ForEach()
// Para cada elemento do array ele montará uma div


produtos.forEach(produto => {
    elMain.innerHTML += `
        <div class="div-produto">
            <h1>${produto.nome}</h1>
            <h3>${produto.categoria}</h3>
            <p>${produto.preco}</p>
        </div>
    `
})

