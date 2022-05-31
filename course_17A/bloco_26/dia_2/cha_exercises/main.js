"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Colors;
(function (Colors) {
    Colors["PRETA"] = "Preta";
    Colors["BRANCA"] = "Branca";
    Colors["VERMELHA"] = "Vermelha";
    Colors["PRATA"] = "Prata";
})(Colors || (Colors = {}));
var Direcao;
(function (Direcao) {
    Direcao["ESQUERDA"] = "Esquerda";
    Direcao["DIREITA"] = "Direita";
})(Direcao || (Direcao = {}));
var AbrePorta;
(function (AbrePorta) {
    AbrePorta["ABRE"] = "Abre as portas";
})(AbrePorta || (AbrePorta = {}));
var FechaPorta;
(function (FechaPorta) {
    FechaPorta["FECHA"] = "Fecha as portas";
})(FechaPorta || (FechaPorta = {}));
class Car {
    constructor(brand, color, doors) {
        this._brand = brand;
        this._color = color;
        this._doors = doors;
    }
    honk() {
        console.log('Bibi');
    }
    openTheDoor(porta) {
        console.log(porta);
    }
    closeTheDoor(porta) {
        console.log(porta);
    }
    turnOn() {
        console.log('Liga o carro');
    }
    turnOff() {
        console.log('Desliga o carro');
    }
    speedUp() {
        console.log('Acelera o carro');
    }
    speedDown() {
        console.log('Desacelera o carro');
    }
    stop() {
        console.log('Para o carro');
    }
    turn(direcao) {
        console.log(`Vira o carro para a ${direcao}`);
    }
}
exports.default = Car;
;
const ferrari = new Car('Ferrari', Colors.VERMELHA, 2);
ferrari.openTheDoor(AbrePorta.ABRE);
ferrari.closeTheDoor(FechaPorta.FECHA);
ferrari.speedUp();
ferrari.speedDown();
ferrari.turn(Direcao.ESQUERDA);
ferrari.speedUp();
