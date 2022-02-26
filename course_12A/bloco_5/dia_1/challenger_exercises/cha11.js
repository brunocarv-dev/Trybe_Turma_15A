document.getElementById("paragraph").innerHTML = "Vejo-me ocupando uma posição relevante em uma equipe responsável por análise de dados e terminando o meu curso superior em banco de dados."
document.querySelectorAll('.main-content')[0].style.backgroundColor = 'rgb(76,164,109)'
document.querySelectorAll('.main-content .center-content')[0].style.backgroundColor = 'white'
document.querySelectorAll('.title')[0].innerHTML = "JavaScript"
let pmaiusculo = document.getElementsByTagName("p")
for(let indice=0; indice<pmaiusculo.length; indice +=1){
 pmaiusculo[indice].style.textTransform = 'uppercase'
 console.log(pmaiusculo[indice]);}
