// const nomeProduto = "Casaco Branco";
//const marca = "Zara";
//const preco = 70;
//const nomeArquivoImagem = "product-1.jpg;

//alert("Alerta!");

// Criando cards dos produtos

const catalogo = [
	{
		id: 1,
		marca: "Zara",
		nome: "Casaco Branco",
		preco: 70,
		imagem: "product-1.jpg",
		feminino: true,
	},
	{
		id: 2,
		marca: "Zara",
		nome: "Sobretudo feminino",
		preco: 130,
		imagem: "product-2.jpg",
		feminino: true,
	},
	{
		id: 3,
		marca: "Camelôôô",
		nome: "Roura do Chaves",
		preco: 1000,
		imagem: "product-3.jpg",
		feminino: true,
	},
	{
		id: 4,
		marca: "Achados&Perdidos",
		nome: "Colete Comprido com Cinto",
		preco: 88,
		imagem: "product-4.jpg",
		feminino: true,
	},
	{
		id: 5,
		marca: "Zara",
		nome: "Fadamento Coisado",
		preco: 10,
		imagem: "product-5.jpg",
		feminino: true,
	},
	{
		id: 6,
		marca: "Ceasa",
		nome: "Roupa velha",
		preco: 13,
		imagem: "product-6.jpg",
		feminino: true,
	},
	{
		id: 7,
		marca: "Norte-Sul",
		nome: "Calça sem costura",
		preco: 406,
		imagem: "product-7.jpg",
		feminino: true,
	},
	{
		id: 8,
		marca: "Roupa cara",
		nome: "Só com muita grama",
		preco: 729,
		imagem: "product-8.jpg",
		feminino: true,
	},
];

for (const produtoCatalogo of catalogo) {

	// Criando o card
	const cartaoProduto = `<div id="card-produto-1">
	<img
		src="./assets/img/${produtoCatalogo.imagem}"
		alt="Imagem - Produto 1"
		style="height: 300px"
	/>
	<p>${produtoCatalogo.marca}</p>
	<p>${produtoCatalogo.nome}</p>
	<p>$${produtoCatalogo.preco}</p>
	<button>Adicionar</button>
	</div>`;
	document.getElementById("container-produto").innerHTML += cartaoProduto
}