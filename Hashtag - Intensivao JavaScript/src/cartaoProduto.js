import { catalogo } from "./utilidades";

export function renderizarCatalogo() {
    for (const produtoCatalogo of catalogo) {

        // Criando o card
        const cartaoProduto = `
            <div class='border-solid border-2 border-sky-500 w-48 m-2 flex flex-col p-2 justify-between' id="card-produto-${produtoCatalogo.id}">
            <img
            src="./assets/img/${produtoCatalogo.imagem}"
            alt="Produto 1 do Magazine Hashtag."
            />
            <p class='marca'>${produtoCatalogo.marca}</p>
            <p>${produtoCatalogo.nome}</p>
            <p>$${produtoCatalogo.preco}</p>
            <button class="bg-slate-950 text-slate-200 hover:bg-slate-700">
                <i class="fa-solid fa-cart-plus"></i>
            </button>
            </div>
        `;    
    document.getElementById("container-produto").innerHTML += cartaoProduto
    }
}