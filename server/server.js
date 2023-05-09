const express = require('express');
const app = express();
const cors = require('cors');
const {exec} = require('node:child_process');
const path = require('path');
const fs = require('fs');
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname + "/public")));
app.use(cors());

// FILES
const CODE_FILE = 'code';
const JAVASCRIPT_FILE = CODE_FILE + '.js';
const PYTHON_FILE = CODE_FILE + '.py';
const CPP_FILE = CODE_FILE + '.cpp';
const JAVA_FILE = CODE_FILE + '.java';
const CSHARP_FILE = CODE_FILE + '.cs';
const C_FILE = CODE_FILE + '.c';
const GO_FILE = CODE_FILE + '.go';
const RUST_FILE = CODE_FILE + '.rs';

// COMMANDS
const JAVASCRIPT_COMMAND = 'node ' + JAVASCRIPT_FILE;
const PYTHON_COMMAND = 'python3 ' + PYTHON_FILE;
const CPP_COMMAND = 'g++ ' + CPP_FILE + ' && ./a.out';
const JAVA_COMMAND = 'java ' + JAVA_FILE;
const CSHARP_COMMAND = 'mcs ' + CSHARP_FILE + ' && mono code.exe';
const C_COMMAND = 'gcc ' + C_FILE + ' && ./a.out';
const GO_COMMAND = 'go run ' + GO_FILE;
const RUST_COMMAND = 'rustc ' + RUST_FILE + ' && ./code'

app.get('/execute', (req, res) =>{
    let language = req.query.language;
    let code = req.query.code;
    let command = '';
    let current_file = '';

    if (language === 'Javascript'){
        current_file = JAVASCRIPT_FILE;
        command = JAVASCRIPT_COMMAND;
    }
    else if (language === 'Python'){
        current_file = PYTHON_FILE;
        command = PYTHON_COMMAND;
    }
    else if (language === 'C++'){
        current_file = CPP_FILE;
        command = CPP_COMMAND;
    }
    else if (language === 'Java'){
        current_file = JAVA_FILE;
        command = JAVA_COMMAND;
    }
    else if (language === 'C#'){
        current_file = CSHARP_FILE;
        command = CSHARP_COMMAND;
    }
    else if (language === 'C'){
        current_file = C_FILE;
        command = C_COMMAND;
    }
    else if (language === 'Go'){
        current_file = GO_FILE;
        command = GO_COMMAND;
    }
    else if (language === 'Rust'){
        current_file = RUST_FILE;
        command = RUST_COMMAND;
    }

    fs.renameSync(CODE_FILE, current_file);
    fs.writeFileSync(current_file, code);

    run = exec(command, (error, stdout, stderr) =>{
        if (error){
            res.send({"errors": stderr.toString()});
        }
        else{
            res.send({'output': stdout});
        }
        fs.renameSync(current_file, CODE_FILE);
        return;
    });

    
});

app.listen(port, () => console.log(`Listening on port ${port}!`));