// Boolean
let isDone: boolean = false;

// Number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// String
let color: string = "blue";
color = "red";

let fullname: string = "Bob Bobbington";
let age: number = 37;
let sentence: string = `Hello, my name is ${fullname}. I'll be ${
  age + 1
} years old next month.`;
console.log(sentence);

// Array
let list: number[] = [1, 2, 3];

let list2: Array<number> = [1, 2, 3, 4];

// Tuple
let x: [string, number];

x = ["hello", 10];
// x = [10,"hello"] Error

// Enum
enum Color {
  Red,
  Green,
  Blue,
}

let c: Color = Color.Green;

console.log(c);

// Unknown
let notSure: unknown = 4;
notSure = "maybe a string instead";

notSure = false;

declare const maybe: unknown;

// const aNumber:number = maybe;

if (maybe === true) {
  const aBoolean: boolean = maybe;
}

if (typeof maybe === "string") {
  const aString: string = maybe;
}
