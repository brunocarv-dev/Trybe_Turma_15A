interface MyInterface {
  myNumber: number;
  
  myFunc(myParam: number): string;
}

class MyClass implements MyInterface {
  constructor(public myNumber: number) {}

  myFunc(myParam: number): string {
    return (this.myNumber + myParam).toString();
  }
}

const MyClassObject = new MyClass(5);
console.log(MyClassObject.myNumber);
console.log(MyClassObject.myFunc(5));