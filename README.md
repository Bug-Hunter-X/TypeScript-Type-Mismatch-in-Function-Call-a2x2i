# TypeScript Type Mismatch Bug

This repository demonstrates a common TypeScript error related to type mismatches in function calls. The `add` function expects two numbers as input, but the code attempts to pass a string as the second argument.  This results in a type error during compilation.

The solution shows how to resolve this error by ensuring the correct types are passed to the function.

## Bug

The `bug.ts` file contains the code that demonstrates the type error. TypeScript's type system correctly flags this as an error.

## Solution

The `bugSolution.ts` file shows how to correctly use the `add` function by providing numerical arguments.