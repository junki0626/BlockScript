# BlockScript 

A minimalist, **Turing-complete** programming language powered by JSON-style syntax and Node.js.

## 🚀 Execution
Run the script using Node.js:
```bash
node Block.js example.block
```

## 📋 Syntax

### Print to Console (`log`)
Prints a literal string or the value of a variable.
```json
["log", "Hello, World!"]
```

### Variable Assignment (`set`)
Assigns a value to a variable.
```json
["set", "score", 100]
```

### Increment (`+`)
Increments the value of a variable by 1.
```json
["+", "score"]
```

### Decrement (`-`)
Decrements the value of a variable by 1.
```json
["-", "score"]
```

### Loop Statement (`while`)
Repeats the command while the variable is not equal to the target value. 
*Note: You must manually adjust the loop variable inside the loop using `+` or `-` to prevent infinite loops.*
```json
[
  ["set", "i", 5],
  ["while", "i", 0, ["-", "i"]]
]
```

---

## 💡 Why it is Turing-Complete
This language satisfies the core requirements of a **Counter Machine** model by providing:
1. Arbitrary variable storage (`set`)
2. Increment (`+`) & Decrement (`-`)
3. Conditional looping and zero-testing (`while`)

With just these 5 commands, you can compute any computable algorithm!
