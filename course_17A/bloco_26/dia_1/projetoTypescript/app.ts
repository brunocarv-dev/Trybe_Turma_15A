let yes: boolean = true;
let no: boolean = false;
let x: number;
x=1;
let s: string;
s = "Hello world"
let nullValue = null;
let undefinedValue = undefined;
let flag = true;
let message = 'Hello World!'

console.log(yes, no);
console.log(x);
console.log(s);
console.log(nullValue);
console.log(undefinedValue);
console.log(typeof(flag));
console.log(typeof(message));

s = "Nice world!"

function sayNiceWorld(nice: string): void {
  console.log(nice);
}

sayNiceWorld(s);