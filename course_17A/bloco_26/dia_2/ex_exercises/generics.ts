function getArray<T>(items: T[]): T[] {
  return new Array<T>().concat(items);
}

let numberArray = getArray<number>([5, 10, 15, 20]);
let stringArray = getArray<string>(["Cats", "Dogs", "Birds"]);

// console.log(numberArray);
// console.log(stringArray);0

interface ProcessIdentity<T, U> {
  (value: T, message: U): T;
}

function processIdentity<T, U> (value: T, message: U): T {
  console.log(message);
  return value;
}

// let processor: ProcessIdentity<number, string> = processIdentity;
// let returnNumber = processor(100, "Olá");
// let returnErrror = processor("Olá", 100);

class ProcessIdentity <T, U> {
  _value: T;
  _message: U;

  constructor(value: T, message: U) {
    this._value = value;
    this._message = message;
  }

  getIdentity(): T {
    console.log(this._message);
    return this._value;
  }
}

let processor = new ProcessIdentity<number, string>(100, 'Olá');
processor.getIdentity();