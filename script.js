

let inputText = document.getElementById('inputField');
let containerWords = document.getElementById('fieldInputWords');
let btnListeaza = document.getElementById('btnListeaza');

btnListeaza.addEventListener('click' , (e) => {


let paragraph = document.createElement('p');

paragraph.classList.add('paragraph-styling');

let str = inputText.value;

let result = str.toString().split(" ");

result.sort();

paragraph.innerHTML = result + "." ;

containerWords.appendChild(paragraph);

inputText.value = "";

let btnDelete = document.createElement('button');

btnDelete.innerText = "Delete";

containerWords.appendChild(btnDelete);

btnDelete.addEventListener('click' , (e) => {

containerWords.removeChild(paragraph);
containerWords.removeChild(btnDelete);

});

});