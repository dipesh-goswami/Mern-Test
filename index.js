//importing as function
// import { diff } from './lib.js';
// console.log(diff(3, 5));


//importing as variable
// const libe = require('./lib.js');
// console.log(libe.sum(1, 2));

// //using fs
// const fs = require('fs');
// // const txt = fs.readFileSync('demo.txt', 'utf-8');
// // console.log(txt);

// fs.readFile('demo.txt', 'utf-8', (err, txt) => {
//   console.log(txt);
// })



// console.log("hello dipesh");
// const express = require('express');
// const server = express();
// server.listen(8080);

const os = require('os');
// console.log(os.EOL);//cursor go to next line
// console.log(os.arch());//tells your os arch...x64
// console.log(os.cpus());
// console.log(os.devNull);
// console.log(os.freemem());
// console.log(os.homedir());
// console.log(os.networkInterfaces());
console.log(os.version());
