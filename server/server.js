const express = require('express');
const app = express();
const cors = require('cors');
const {spawn, exec} = require('node:child_process');
const fs = require('fs');
app.use(cors());


app.get('/execute', (req, res) =>{
    let language = req.query.language;

    if (language === 'Javascript'){
        fs.writeFileSync('helloWorld.js', req.query.code);
        const ls = exec('node helloWorld.js', (error, stdout, stderr)=>{
            if (error){
                console.log(error);
                return;
            }
            res.send({"output": stdout});
        });
    }
    else if (language === 'Python3'){
        fs.writeFileSync('helloWorld.py', req.query.code);
        const ls = exec('python3 helloWorld.py', (error, stdout, stderr)=>{
            if (error){
                console.log(error);
                return;
            }
            res.send({"output": stdout});
        });
    }
    else if (language === 'C++'){
        fs.writeFileSync('helloWorld.cpp', req.query.code);
        const ls = exec('g++ helloWorld.cpp && ./a.out', (error, stdout, stderr)=>{
            if (error){
                console.log(error);
                return;
            }
            res.send({"output": stdout});
        });
    }
});

app.get('/', (req, res) => {
    res.send({"hi":["1", "2", "3"]});
});


app.listen(3000, () => console.log('Listening on port 3000!'));



// FOR REFERENCE

// const ls = spawn('python3', ['helloWorld.py']);
// const ls = spawn('g++', ['helloWorld.cpp', '&&', './a.out']);

// const ls = exec('g++ helloWorld.cpp && ./a.out', (error, stdout, stderr)=>{
//     if (error){
//         console.log(error);
//         return;
//     }
//     console.log(stdout);
// });

// ls.stdout.on('data', (data)=>{
//     console.log(`stdout: ${data}`);
// });

// ls.stderr.on('data', (data) => {
//     console.error(`stderr: ${data}`);
// });
  
// ls.on('close', (code) => {
// console.log(`child process exited with code ${code}`);
// });