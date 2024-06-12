function logMessage(message: string): void {
  console.log(message);
}

logMessage("Hello, World!"); // Output: Hello, World!

function add(a: number, b: number): number {
  return a + b;
}

const result = add(3, 5);

// result sẽ có kiểu number
function getInfo(name: string): string;
function getInfo(age: number): string;
function getInfo(nameOrAge: string | number): string {
  if (typeof nameOrAge === "string") {
    return `Name: ${nameOrAge}`;
  } else {
    return `Age: ${nameOrAge}`;
  }
}

console.log(getInfo("Alice")); // Output: Name: Alice
console.log(getInfo(30)); // Output: Age: 30
