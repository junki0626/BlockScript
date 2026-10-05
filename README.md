### Execution (Start)
`node Block.js example.block`

### Syntax & Examples

* **Basic Command (example)**
  ```json
  ["cmd", "***"]
  ```

* **Print to Console (print)**
  ```json
  ["log", "Hello, World!"]
  ```

* **Conditional Statement (if)**
  ```json
  [ 
    ["set", "a", 1], 
    ["if", "a", 2, ["log", "false"]], 
    ["if", "a", 1, ["log", "true"]] 
  ]
  ```

* **Loop Statement (while)**
  ```json
  [
    ["set", "i", 1], 
    ["while", "i", 10, ["log", "while"]]
  ]
  ```

* **Variable Assignment & Logging (set)**
  ```json
  [
    ["set", "score", 100], 
    ["log", "score"]
  ]
  ```
