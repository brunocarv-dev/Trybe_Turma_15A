"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.hemisferioSul = exports.hemisferioNorte = exports.choiseHemisferio = void 0;
var readline_sync_1 = __importDefault(require("readline-sync"));
var exercise02_1 = __importDefault(require("./exercise02"));
var exercise03_1 = __importDefault(require("./exercise03"));
var correspondenciaSul = (_a = {},
    _a[exercise03_1.default.OUTONO] = [exercise02_1.default.Janeiro, exercise02_1.default.Fevereiro, exercise02_1.default.Março],
    _a[exercise03_1.default.INVERNO] = [exercise02_1.default.Abril, exercise02_1.default.Maio, exercise02_1.default.Junho],
    _a[exercise03_1.default.PRIMAVERA] = [exercise02_1.default.Julho, exercise02_1.default.Agosto, exercise02_1.default.Setembro],
    _a[exercise03_1.default.VERAO] = [exercise02_1.default.Outubro, exercise02_1.default.Novembro, exercise02_1.default.Dezembro],
    _a);
var correspondenciaNorte = (_b = {},
    _b[exercise03_1.default.OUTONO] = correspondenciaSul[exercise03_1.default.PRIMAVERA],
    _b[exercise03_1.default.PRIMAVERA] = correspondenciaSul[exercise03_1.default.OUTONO],
    _b[exercise03_1.default.VERAO] = correspondenciaSul[exercise03_1.default.INVERNO],
    _b[exercise03_1.default.INVERNO] = correspondenciaSul[exercise03_1.default.VERAO],
    _b);
var hemisferios = {
    Norte: "Hemisfério Norte",
    Sul: "Hemisfério Sul",
};
var arrayMeses = Object.values(exercise02_1.default);
var posicaoMes = readline_sync_1.default.keyInSelect(arrayMeses, "Escolha um mês do ano");
var mesEscolhido = arrayMeses[posicaoMes];
var arrayHemisferios = Object.values(hemisferios);
var posicaoHemisferio = readline_sync_1.default.keyInSelect(arrayHemisferios, "Escolha um hemisfério");
var hemisferioEscolhido = arrayHemisferios[posicaoHemisferio];
function choiseHemisferio(hemisferio, mes) {
    if (hemisferio === 'Hemisfério Norte')
        return hemisferioNorte(mes, correspondenciaNorte);
    return hemisferioSul(mes);
}
exports.choiseHemisferio = choiseHemisferio;
function hemisferioNorte(mes, correspondenciaNorte) {
    Object.entries(correspondenciaNorte).forEach(function (element) {
        if (element[1].includes(mesEscolhido)) {
            console.log("Em ".concat(mes, ", a esta\u00E7\u00E3o no hemisf\u00E9rio norte \u00E9: ").concat(element[0]));
        }
    });
}
exports.hemisferioNorte = hemisferioNorte;
function hemisferioSul(mes) {
    Object.entries(correspondenciaSul).forEach(function (element) {
        if (element[1].includes(mesEscolhido)) {
            console.log("Em ".concat(mes, ", a esta\u00E7\u00E3o no hemisf\u00E9rio sul \u00E9: ").concat(element[0]));
        }
    });
}
exports.hemisferioSul = hemisferioSul;
;
choiseHemisferio(hemisferioEscolhido, mesEscolhido);
