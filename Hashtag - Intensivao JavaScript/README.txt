**** CONFIGURANDO SERVIDOR ****

https://vitejs.dev/guide/

*** COMANDO CONFIGURANDO SERVIDOR ***

npm create vite@latest

    Project name: Magazine Hashtag
    Package nane: magazine-hashtag
    Framework: Vanilla (JavaScript)

    Now run:
    cd "Magazine Hashtag"
    npm install
    npm run dev

-------------**** TailWind Css ****--------------------------------------

https://tailwindcss.com/docs/installation/using-postcss

[comandos]
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init

[criar novo arquivo - comandos]
Criar arquivo: postcss.config.js

Comando dentro deste novo arquivo:
export default = {  // comando desta linha foi alterado devido o formado da configuracao dos diretorios deste projeto
   plugins: {
      tailwindcss: {},
      autoprefixer: {},
   }
}

Alterar conteudo do arquivo: `tailwind.config.js`
/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./src/**/*.{html, js}, ./*.{html, js}"],
   theme: {
      extend: {},
   },
   plugins: [],
}

Adicionar comandos no `style.css`
@tailwind base;
@tailwind components;
@tailwind utilities;
--------------------------------------------------------------
**** Icones ****

Acessar site Font Awesome:
https://fontawesome.com/
https://cdnjs.com
https://cdnjs.com/libraries/font-awesome



--------------------------------------------------------------
**** CODIGOS ****
Video 01 - JS2023
