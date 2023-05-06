const express = require('express');
const app = express();
const cors = require('cors');
const {spawn, exec} = require('node:child_process');


app.use(cors());
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

app.get('/', (req, res) => {
    res.send({"hi":["1", "2", "3"]});
});


app.listen(3000, () => console.log('Listening on port 3000!'));