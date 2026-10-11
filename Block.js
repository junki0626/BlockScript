const fs = require('fs');
const path = require('path');

const vars = {};

function run(code) {
    const cmd = code[0];

    if (cmd == "log") {
        console.log(vars[code[1]]);
    }
    if (cmd == "set") {
        vars[code[1]] = code[2];
    }
    if (cmd == "+") {
        vars[code[1]]++;
    }
    if (cmd == "-") {
        vars[code[1]]--;
    }
    if (cmd == "*") {
        vars[code[1]] *= vars[code[2]];
    }
    if (cmd == "while") {
        while (vars[code[1]] != code[2]) {
            code[3].forEach(sub => run(sub));
        }
    }
}

const file = process.argv[2];
if (path.extname(file) !== '.block') {
    console.error("Err : Only files with .block extension are allowed.");
    process.exit(1);
}

const raw = fs.readFileSync(file, 'utf-8');
const code = JSON.parse(raw);
run(code);
