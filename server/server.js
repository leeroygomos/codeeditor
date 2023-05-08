const express = require('express');
const app = express();
const cors = require('cors');
const {exec} = require('node:child_process');
const path = require('path');
const fs = require('fs');
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname + "/public")));
app.use(cors());

const JAVASCRIPT_FILE = './code_files/helloWorld.js';
const JAVASCRIPT_COMMAND = 'node ' + JAVASCRIPT_FILE;
const PYTHON_FILE = './code_files/helloWorld.py';
const PYTHON_COMMAND = 'python3 ' + PYTHON_FILE;
const CPP_FILE = './code_files/helloWorld.cpp';
const CPP_COMMAND = 'g++ ' + CPP_FILE + ' && ./a.out';

app.get('/execute', (req, res) =>{
    let language = req.query.language;
    let code = req.query.code;

    if (language === 'Javascript'){
        fs.writeFileSync(JAVASCRIPT_FILE, code);
        run = exec(JAVASCRIPT_COMMAND, (error, stdout, stderr) =>{
            if (error){
                res.send({"errors": stderr.toString()});
            }
            else{
                res.send({'output': stdout});
            }
            return;
        });
    }
    else if(language === 'Python'){
        fs.writeFileSync(PYTHON_FILE, code);
        run = exec(PYTHON_COMMAND, (error, stdout, stderr) =>{
            if (error){
                res.send({"errors": stderr.toString()});
            }
            else{
                res.send({'output': stdout});
            }
            return;
        });
    }
    else if(language === 'C++'){
        fs.writeFileSync(CPP_FILE, code);
        run = exec(CPP_COMMAND, (error, stdout, stderr) =>{
            if (error){
                res.send({"errors": stderr.toString()});
            }
            else{
                res.send({'output': stdout});
            }
            return;
        });
    }
});

app.listen(port, () => console.log(`Listening on port ${port}!`));