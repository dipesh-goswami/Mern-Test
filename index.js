//********** importing as function ***************
// import { diff } from './lib.js';
// console.log(diff(3, 5));


//************ importing as variable ******************
// const libe = require('./lib.js');
// console.log(libe.sum(1, 2));

// //*************** using fs **********************
// const fs = require('fs');
// // const txt = fs.readFileSync('demo.txt', 'utf-8');
// // console.log(txt);

// fs.readFile('demo.txt', 'utf-8', (err, txt) => {
//   console.log(txt);
// })


//********** using express **************
// console.log("hello dipesh");
// const express = require('express');
// const server = express();
// server.listen(8080);


//************** using os *****************
// const os = require('os');
// // console.log(os.EOL);//cursor go to next line
// // console.log(os.arch());//tells your os arch...x64
// // console.log(os.cpus());
// // console.log(os.devNull);
// // console.log(os.freemem());
// // console.log(os.homedir());
// // console.log(os.networkInterfaces());
// console.log(os.version());


//********** promises ******************
// const p = new Promise((res, rej) => {
//   rej("1211212");
// });

// p.then((data) => {
//   console.log("resolved 1");
//   return data;
// }).then(() => {
//   console.log("resolved 2")
// }).catch((err) => {
//   console.log("rejected 1");
//   return err;
// }).then((err) => {
//   console.log("rejected 2");
// });



//***************** async await ****************
// const p = new Promise((res, rej) => {
//   setTimeout(() => { res(6) }, 2000);
// });
// async function f() {
//   const d = await p;
//   console.log(d);
// }
// f();
// console.log(7);

//solution:
// 7
// 6



//************ API Tested *************
async function gen() {
  const res = await fetch('https://reqres.in/api/users?page=2');
  const datas = await res.json();
  console.log(datas.data[1].email);

}
gen();




