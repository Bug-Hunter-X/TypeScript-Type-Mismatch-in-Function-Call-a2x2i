function add(a: number, b: number): number {
  return a + b;
}

let result = add(10, "20"); // Type Error: Argument of type 'string' is not assignable to parameter of type 'number'.
console.log(result);