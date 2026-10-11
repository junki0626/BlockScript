# BlockScript

A minimalist, Turing-complete programming language powered by JSON-style syntax and Node.js.

## 💡 Philosophy
- **설계를 이해하면 코딩을 더 잘합니다.** 복잡한 도구에 의존하지 않고 컴퓨터의 원리를 직관적으로 이해하도록 돕습니다.
- **최소한의 규칙이 창의력을 만듭니다.** 단 32줄의 코어로 작동하며, 기초만 주어졌을 때 사용자는 가장 창의적인 알고리즘을 짜낼 수 있습니다.
- **확장성은 사용자의 몫입니다.** 함수 하나당 단 2줄의 `if` 구조로 무한히 확장 가능합니다. BlockScript++가 나오든지 말든지는 사용하는 사람들의 몫입니다.

## 🚀 Execution
Run the script using Node.js:
```bash
node Block.js example.block
```

## 📋 Syntax & 6 Commands
- `["log", "var"]` : 변수값 출력
- `["set", "var", val]` : 변수 선언 및 값 할당
- `["+", "var"]` : 변수 1 증가
- `["-", "var"]` : 변수 1 감소
- `["*", "var1", "var2"]` : var1에 var2를 곱해서 다시 var1에 저장

- `["while", "var", val, [commands]]` : 조건 만족 시까지 루프 수행
