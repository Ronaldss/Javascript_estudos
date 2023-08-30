// const nomeProduto = "Casaco Branco";
//const marca = "Zara";
//const preco = 70;
//const nomeArquivoImagem = "product-1.jpg;

alert("Alerta!");

// Criando cards dos produtos
const produto1 = {
	id: 1,
	nome: "Casaco Branco",
	marca: "Zara",
	preco: 70,
	nomeArquivoImagem: "product-1.jpg",
};

const catalogo = [produto1, produto2, produto3, produto4, produto5, produto6, produto7, produto8];

const cartaoProduto = `<div id="card-produto-1">
<img
	src="./assets/img/${produto1.nomeArquivoImagem}"
	alt="Imagem - Produto 1"
	style="height: 300px"
/>
<p>${produto1.marca}</p>
<p>${produto1.nome}</p>
<p>${produto1.preco}</p>
<button>Adicionar</button>
</div>`;
document.getElementById("container-produto").innerHTML += cartaoProduto
