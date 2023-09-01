const dataBase = [
	{
		id: 1,
		imagem: "src/img/africa-do-sul.png",
		nome: "Africa do Sul",
	},
	{
		id: 2,
		imagem: "src/img/brasil.svg",
		nome: "Brasil",
	},
	{
		id: 3,
		imagem: "src/img/seiLa.svg",
		nome: "De algum país ai",
	},
]; 


for (var contTabela of dataBase){
	// Criando o card
	const cartaoProduto = `
	
	<div>
	<img src="${contTabela.imagem}" alt="imagem" style="height: 250px; margin: 0;">
	<p>Id: ${contTabela.id}</p>
	<p>Bandeira: ${contTabela.nome}</p>
	<hr>
	</div>
	
	`;
	document.getElementById("cards").innerHTML += cartaoProduto
}