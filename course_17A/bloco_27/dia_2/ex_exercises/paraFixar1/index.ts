class SuperClass {
  constructor(public isSuper: boolean = true) {}

  public sayHello() {
    console.log('Olá mundo!');
  }
}

class Subclass extends SuperClass{
  constructor() {
    super();
    this.isSuper = false;
  }
}

const objetoSuperClass = new SuperClass(true);

function myFunc(param: SuperClass) {
  param.sayHello()
  if (param.isSuper === true) return console.log('Super!');
  console.log('Sub!');
}

const objetoSubClass = new Subclass();

myFunc(objetoSuperClass);
myFunc(objetoSubClass);