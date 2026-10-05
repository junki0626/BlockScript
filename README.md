Execution (Start)
node Block.js example.block
Syntax & Examples
• Basic Command (example)
["cmd", "***"]
• Print to Console (print)
["log", "Hello, World!"]
• Conditional Statement (if)
[
["set", "a", 1],
["if", "a", 2, ["log", "false"]],
["if", "a", 1, ["log", "true"]]
]
• Loop Statement (while)
[
["set", "i", 1],
["while", "i", 10, ["log", "while"]]
]
• Variable Assignment & Logging (set)
[
["set", "score", 100],
["log", "score"]
]
