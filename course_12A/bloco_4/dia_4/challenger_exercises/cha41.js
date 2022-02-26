let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal dos quadrinhos do Pato Donald'
};

//console.log('Seja muito bem-vinda '+ info.personagem + '. Sou um grande fã seu! :D');

info.recorrente = 'Sim';
//console.log (info);

//for(let key in info){
// console.log(key);  
//}

//console.log('\n\n\n');    

//for(let key in info){
//    console.log(info[key]);  
//}   

let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
};

for (let key in info) {
    if (key != 'recorrente') 
       { console.log(info[key] + ' e ' + info2[key]);}
    
    else {console.log('Ambos recorrentes')};

};   