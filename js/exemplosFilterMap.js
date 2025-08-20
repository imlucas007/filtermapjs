import { log } from "console";
import { produtos } from "./objetos.js";
console.table(produtos);

// retornar um array apenas com os nomes dos produtos
// usaremos o Map() para fazer a busca e a geração do novo array
// ELE NÃO ALTERA O ARRAY ORIGINAL

const nomesProdutos = produtos.map(produto => produto.nome);
console.table(nomesProdutos);

const categoriaProdutos = produtos.map(produto => produto.categoria);
console.table(categoriaProdutos);

// Criando um novo array com o nome e a categoria
// Estou usando map, pois ele percorre todo o array e retorna TODOS VALORES ENCONTRADOS
// MAP SEMPRE RETORNA UM ARRAY COM O MESMO TAMANHO DO ORIGINAL

const nomeCategoria = produtos.map(({id}) => ({id}));
console.table(nomeCategoria);

// usando filter
// filter() = retorno de um novo array conforme a condição que foi definida
// ele mantem o array original intacto 
// buscar todos os produtos com categoria = Celular 

const celulares = produtos.filter(produto => produto.categoria === 'Celular');
console.table(celulares);

// produtos com preço entre 1000 e 5000 
const faixaPreco = produtos.filter(produto => produto.preco >= 1000 && produto.preco <= 5000);
console.table(faixaPreco);

// estoque maior que 9
const qtdEstoque = produtos.filter(produto => produto.estoque >= 9);
console.table(qtdEstoque);

// usando find 
// find() ele retorna apenas o primeiro elemento que ele encontrar 
// verificar se extiste um iphone nos objetos
const buscaIphone = produtos.find(produto => produto.nome.toLowerCase().includes('iphone'.toLowerCase()));
console.table(buscaIphone);

// startsWith() ele verfica se uma string começa com os caracteres desejados
const stringIniciaComFo = produtos.filter(produto => produto.nome.toLowerCase().startsWith('fo'.toLowerCase()));
console.table(stringIniciaComFo);

// endsWith() ele verfica se uma string termina com os caracteres desejados
const finalO = produtos.filter(produto => produto.nome.toLowerCase().endsWith('o'.toLowerCase()));
console.table(finalO);

// includes()  ele busca uma string em qualquer parte do objeto
const buscaText = 'pol';
const produtosEncontrados = produtos.filter(produto => produto.nome.toLowerCase().includes(buscaText.toLowerCase()));
console.table(produtosEncontrados);

// criando uma função - dessa forma conseguimos buscar qualquer produto
// função precisa ser chmada para funcionar
function buscarProdutos(produtoBuscar) {
    return produtos.filter(produto => produto.nome.toLowerCase().includes(produtoBuscar.toLowerCase()));
}

// chamando a função e dizendo o que ela tem que buscar
console.table(buscarProdutos('sm'));
