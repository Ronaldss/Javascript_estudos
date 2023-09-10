const dataBase = [
	{
		id: 1,
		imagem: "assets/img/africa-do-sul.png",
		nome: "Africa do Sul",
	},
	{
		id: 2,
		imagem: "assets/img/brasil.svg",
		nome: "Brasil",
	},
	{
		id: 3,
		imagem: "assets/img/seiLa.svg",
		nome: "De algum país ai",
	},
]; 


for (var contTabela of dataBase){
	// Criando o card
	const cartaoProduto = `
	
	<div class="border-solid border-2 border-sky-500 w-48 m-2">
	<img src="${contTabela.imagem}" alt="imagem" style="height: 200px; margin: 0;">
	<p>Id: ${contTabela.id}</p>
	<p>Bandeira: ${contTabela.nome}</p>
	</div>
	
	`;
	document.getElementById("cards").innerHTML += cartaoProduto
}



for (var i=0; i<10; i++ ) {
	const ronald = `
		<h1 class="border-solid border-2 border-sky-500 w-48 m-2">Ronald</h1>
	`;
	console.log(i);
	document.getElementById("cardRd").innerHTML += ronald
}
