License : MIT license

Start : node Block.js example.block

example: ["cmd", "***"]

print: ["log", "Hello, World!"]

if: [
["set", "a", 1],
["if", "a", 2, ["log", "false"]],
["if", "a", 1, ["log", "true"]]
]

while: [
["set", "i", 1],
["while", "i", 10, ["log", "while"]]
]

set: [
["set", "score", 100],
["log", "score"]
]