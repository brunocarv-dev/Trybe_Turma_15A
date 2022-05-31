enum Colors {
  PRETA = 'Preta',
  BRANCA = 'Branca',
  VERMELHA = 'Vermelha',
  PRATA = 'Prata',
}

enum Direcao {
  ESQUERDA = 'Esquerda',
  DIREITA = 'Direita',
}

enum AbrePorta {
  ABRE = 'Abre as portas',
}

enum FechaPorta {
  FECHA = 'Fecha as portas',
}

export default class Car {
  _brand: string;
  _color: Colors;
  _doors: number;

  constructor(brand: string, color: Colors, doors: number) {
    this._brand = brand;
    this._color = color;
    this._doors = doors;
  }

  public honk(): void {
    console.log('Bibi');
  }

  public openTheDoor(porta: AbrePorta): void {
    console.log(porta);
  }

  public closeTheDoor(porta: FechaPorta): void {
    console.log(porta);
  }

  public turnOn(): void {
    console.log('Liga o carro');
  }

  public turnOff(): void {
    console.log('Desliga o carro');
  }

  public speedUp(): void {
    console.log('Acelera o carro');
  }

  public speedDown(): void {
    console.log('Desacelera o carro');
  }

  public stop(): void {
    console.log('Para o carro');
  }

  public turn(direcao: Direcao): void {
    console.log(`Vira o carro para a ${direcao}`);
  }
};

const ferrari = new Car('Ferrari', Colors.VERMELHA, 2);
ferrari.openTheDoor(AbrePorta.ABRE);
ferrari.closeTheDoor(FechaPorta.FECHA);
ferrari.speedUp();
ferrari.speedDown();
ferrari.turn(Direcao.ESQUERDA);
ferrari.speedUp();