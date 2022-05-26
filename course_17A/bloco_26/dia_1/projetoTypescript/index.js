var StudentStatus;
(function (StudentStatus) {
    StudentStatus[StudentStatus["Active"] = 1] = "Active";
    StudentStatus[StudentStatus["Inactive"] = 2] = "Inactive";
    StudentStatus[StudentStatus["Paused"] = 3] = "Paused";
})(StudentStatus || (StudentStatus = {}));
var newStudentStatus = StudentStatus.Inactive;
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["OK"] = 200] = "OK";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
    StatusCodes[StatusCodes["Unauthorized"] = 3] = "Unauthorized";
    StatusCodes[StatusCodes["PaymentRequired"] = 4] = "PaymentRequired";
    StatusCodes[StatusCodes["Forbidden"] = 5] = "Forbidden";
    StatusCodes[StatusCodes["NotFound"] = 6] = "NotFound";
})(StatusCodes || (StatusCodes = {}));
var ok = StatusCodes.OK;
var indiceOk = StatusCodes["OK"];
var stringBadRequest = StatusCodes[400];
var indiceValue = StatusCodes[3];
var diasDaSemana;
(function (diasDaSemana) {
    diasDaSemana[diasDaSemana["segunda"] = 23] = "segunda";
    diasDaSemana[diasDaSemana["ter\u00E7a"] = 24] = "ter\u00E7a";
    diasDaSemana[diasDaSemana["quarta"] = 25] = "quarta";
    diasDaSemana[diasDaSemana["quinta"] = 26] = "quinta";
    diasDaSemana[diasDaSemana["sexta"] = 27] = "sexta";
})(diasDaSemana || (diasDaSemana = {}));
var coresDoArcoIris;
(function (coresDoArcoIris) {
    coresDoArcoIris["red"] = "vermelho";
    coresDoArcoIris["orange"] = "laranja";
    coresDoArcoIris["yellow"] = "amarelo";
    coresDoArcoIris["green"] = "verde";
    coresDoArcoIris["blue"] = "azul";
    coresDoArcoIris["anil"] = "anil";
    coresDoArcoIris["violet"] = "violeta";
})(coresDoArcoIris || (coresDoArcoIris = {}));
var maquina;
(function (maquina) {
    maquina[maquina["salvar"] = 1] = "salvar";
    maquina[maquina["imprimir"] = 2] = "imprimir";
    maquina[maquina["abrir"] = 3] = "abrir";
    maquina[maquina["visualizar"] = 4] = "visualizar";
    maquina[maquina["fechar"] = 5] = "fechar";
})(maquina || (maquina = {}));
var bussola;
(function (bussola) {
    bussola["Norte"] = "N";
    bussola["Leste"] = "L";
    bussola["Sul"] = "S";
    bussola["Oeste"] = "O";
})(bussola || (bussola = {}));
console.log(diasDaSemana.segunda);
console.log(coresDoArcoIris.red);
console.log(coresDoArcoIris['green']);
console.log(maquina.salvar);
console.log(bussola.Norte);
