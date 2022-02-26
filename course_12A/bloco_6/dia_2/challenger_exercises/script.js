let state = document.getElementById("est");
let nameState = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goías', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraíma', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];

for (let uFederativas = 0; uFederativas < 27; uFederativas += 1) {
    let stateList = document.createElement("option");
    state.appendChild(stateList);
    stateList.innerHTML = nameState[uFederativas];
};