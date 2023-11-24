// //LocalModule
// const global = require('./One');

// // global.func();
// // console.log(global.num);
// // global.dummy();

// var obj = new global.myclass('dak');
// obj.myfunc();

const readline = require("readline"); //import { createInterface } from 'readline';
const events = require("events"); //import events from 'events';
const crypto = require("crypto"); //import crypto from 'crypto';
const path = require("path"); //import path from 'path';
const fs = require("fs"); //import fs from 'fs';
const Url = require("url"); //import Url from 'url';
const http = require("http");

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const app = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile(path.join(`${__dirname}/Home.html`), "utf8", (err, data) => {
      if (err) {
        throw err;
      }
      res.end(data);
    });
  }
  if (req.url === "/service") {
    fs.readFile(
      path.join(`${__dirname}/Main/Service.html`),
      "utf8",
      (err, data) => {
        if (err) {
          throw err;
        }
        res.end(data);
      }
    );
  }
  if (req.url === "/about") {
    const x = [{ id: 1, name: "Mohan" }];
    res.end(JSON.stringify(x));
  }
});

//const PORT = process.env.PORT || 2500;
// app.listen(PORT,() =>{
//     console.log(`Server started on ${PORT}`);//dyanmic
// });
//OR
app.listen(8080, () => {
  console.log("Server started on 8080");
});

// "start" : "nodemon index.js"
// fs.mkdir('test',(err)=>{
//     if(err){throw err}
//     fs.writeFile(path.join(`${__dirname}/test/test.js`),'i love Node',(err) =>{
//         if(err){throw err}
//         console.log('file created');
//     });
// });

// console.log(__dirname);
// console.log(__filename);
// console.log(path.parse(__filename).name);
//D:\node tutorial\
//console.log(path.join(`${__dirname}/dest/test.js`));
// r1.question('What is your name? ', (ans) =>{
// const hash =crypto.createHmac('sha256','dkjfsljf').update(ans).digest('hex');
// console.log(hash);
// r1.close();
// });

// r1.on('close',()=>{
//     console.log('name encrypted');
// })
// const myEmitter = new events.EventEmitter();

//var x =  ['john','harry','kevin'];

// myEmitter.addListener('my',() => {//can use on inste
//     for(let i= 0; i < x.length; i++){
//         console.log(i + " " + x[i])
//     }
//     console.log("ooops fired !!!!!! ");
// });
// setTimeout (() => {
//     myEmitter.emit('my');
// }, 3000);

// r1.question('What is your name? ', (ans) =>{
//     if(ans === 'John')
//     {
//         console.log('Correct!!');
//         myEmitter.addListener('my',() => {//can use on inste

//             console.log("ooops fired !!!!!! ");
//         });
//         setTimeout (() => {
//             myEmitter.emit('my');
//         }, 3000);
//         r1.close();
//         myEmitter.addListener('my',() => {//can use on inste
//         console.log("ooops fired !!!!!! ");
// });
// setTimeout (() => {
//     myEmitter.emit('my');
// }, 3000);
//     }
//     else{
//         r1.setPrompt('Wrong Name Try Again \n');
//         r1.prompt();
//         r1.on('line',(input)=> {
//             if(input === 'John'){
//                 console.log('Correct!!');
//                 myEmitter.addListener('my',() => {//can use on inste

//                     console.log("ooops fired !!!!!! ");
//                 });
//                 setTimeout (() => {
//                     myEmitter.emit('my');
//                 }, 3000);
//                 r1.close();
//                 myEmitter.addListener('my',() => {//can use on inste
//                 console.log("ooops fired !!!!!! ");
//         });
//         setTimeout (() => {
//             myEmitter.emit('my');
//         }, 3000);
//                 r1.close();
//             }
//             else{
//                 r1.setPrompt(input + ' wrong \n');
//                 r1.prompt();
//             }
//         })
//     }
// })
// fs.readFile(path.join(`${__dirname}/test/test.js`),'utf-8',(err,data)=>{
//     console.log(data);
// });
