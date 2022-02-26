let sonway = document.createElement("div");

let way = document.getElementById("elementoOndeVoceEsta");

way.appendChild(sonway);

way.children[2].innerText = "euSouOFilhoDoElementoOndeVoceEsta"

console.log(way.children[2]);

<!--            Espaço              -->

let fatherway = document.getElementById("pai");

let brotherway = document.createElement("div");

fatherway.appendChild(brotherway);

fatherway.children[4].innerHTML = "euSouOIrmãoDoElementoOndeVoceEsta"

console.log(fatherway.children[4]);

<!--            Espaço              -->

let firstgrandson = document.getElementById("primeiroFilhoDoFilho");

let sonfgs = document.createElement("div");

firstgrandson.appendChild(sonfgs);

firstgrandson.firstElementChild.innerHTML = "euSouOFilhoDoPrimeiroFilhoDoFilho";

console.log(firstgrandson.firstElementChild);

<!--            Espaço              -->

console.log(document.getElementById("pai").children[2]);