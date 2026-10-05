const fs = require('fs');
const path = require('path');

const vars = {};

function run(code){
    const cmd = code[0];
    if(cmd == "log"){
        console.log(vars[code[1]] !== undefined ? vars[code[1]] : code[1]);
    }
    if(cmd == "set"){
        vars[code[1]] = code[2];
    }
    if(cmd == "while"){
        while(vars[code[1]] != code[2]){
            run(code[3]);
            vars[code[1]]++;
        }
    }
    if (cmd == "if") {
        if(vars[code[1]] == code[2]){
            run(code[3]);
        }
    }
}

const file = process.argv[2];
if (path.extname(file) !== '.ks') {
    console.error("Err : Only files with .ks extension are allowed.");
    process.exit(1);
}

const raw = fs.readFileSync(file, 'utf-8');
const code = JSON.parse(raw);
run(code);
