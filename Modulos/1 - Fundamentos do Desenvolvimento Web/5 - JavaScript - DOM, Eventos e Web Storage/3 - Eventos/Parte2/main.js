const divUm = document.getElementById('divUm');
const divDois = document.getElementById('divDois');
const divTres = document.getElementById('divTres');
const input = document.getElementById('input');
const myWebpage = document.getElementById('mySpotrybefy');


//  Copie esse arquivo e edite apenas ele;
//  Crie uma função que adicione a classe 'tech' ao elemento selecionado;
// 1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

let divs = document.querySelectorAll('.container div')
for (let i of divs) {
  i.addEventListener('click', addTech)
}

function addTech(event) {
  let currentTech = document.querySelector('.tech')
  currentTech.classList.remove('tech')
  event.target.classList.add('tech')
}

//  Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

input.addEventListener('keyup', changeText)

function changeText() {
  let currentTech = document.querySelector('.tech')
  currentTech.innerText = input.value
}

//  Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 1. Que tal redirecionar para seu portifólio?

myWebpage.addEventListener('dblclick', redirect)

function redirect() {
  window.open('https://www.betrybe.com')
}

//  Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

myWebpage.addEventListener('mouseover', changeColor)

function changeColor() {
  myWebpage.style.color = 'red'
}

// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

divUm.addEventListener('dblclick', resetText);
// Não precisa passar o parâmetro dentro do addEventListener. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'divUm'.