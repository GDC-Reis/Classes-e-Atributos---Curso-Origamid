// classList
// Retorna uma lista com as classes do elemento.
// Permite adicionar, remover e verificar se contém.

const menu = document.querySelector('.menu');

menu.className; // string
menu.classList; // lista de classes
menu.classList.add('ativo');
menu.classList.add('ativo','mobile'); // duas classes
menu.classList.remove('ativo');
menu.classList.toggle('ativo') // adiciona/remove a classe
menu.classList.contains('ativo'); // true ou false
menu.classList.replace('ativo', 'inativo'); // substitui a classe ativo pela inativo

if(menu.classList.contains('ativo')){
    menu.classList.add('esta-ativo');
}


// attributes
// Retorna um array-like com os atributos do elemento.

const animais = document.querySelector('.animais');

animais.attributes; // retorna todos os atributos
animais.attributes.class; // retorna a classe do atributo
animais.attributes.id; // retorna o id do atributo 
animais.attributes[0]; // retorna o primeiro atributo


// getAttribute e setAttribute
// Métoddos que retornam ou definem de acordo com o atributo selecionado

const img = document.querySelector('img');

img.getAttribute('src'); // valor de src
img.setAttribute('alt', 'Texto Alternativo'); // muda o alt
img.hasAttribute('alt'); // true / false
img.removeAttribute('alt'); // remove o alt

// img.hasAttribute(); // true / false se tem algum atributo

// é muito comum métodos de get e set 


// Read Only(apenas leitura) vs Writable
// Existem propriedades que não permitem a mudança de seus valores,
// essas são consideradas Read Only, ou seja, apenas leitura.

const animals = document.querySelector('.animais');

animals.className; // string com o nome das classes 
animals.className = 'azul'; // substitui completamente a string
animals.classList += 'vermelho'; // adiciona vermelho a string

animals.attributes = 'class="ativo"'; // não funciona, read-only

/* Lembrando que podemos modificar o valor de uma propriedade usando: objeto.propriedade = '' */


// Exercício 

// Adicione a classe ativa a todos os itens do menu
const itensMenu = document.querySelectorAll('.menu a');

itensMenu.forEach((item) => {
    item.classList.add('ativo');
});


// Remove a classe ativo de todos os itens do menu e mantenham apenas
itensMenu.forEach((item) => {
    item.classList.remove('ativo');
});

itensMenu[0].classList.add('ativo');


// Verifique se as imagens possuem o atributo alt
const imgd = document.querySelectorAll('img');

// Sempre quando verificar cada um dos elementos usar o loop
imgd.forEach((img) => {
    const possuiAtributo = img.hasAttribute('alt');
    console.log(img, possuiAtributo);
})

// Modifique o href do link externo do menu
const link = document.querySelector('a[href^="http"]');
link.setAttribute('href', 'https://www.googl.com/'); // href -> atributo que vamos modificar, Novo Valor.