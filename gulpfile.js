// function defaultTask(cb) {
//     // place code for your default task here
//     cb(console.log("All right"));
//   }  
//   exports.default = defaultTask
                                         //to run: enter gulp
// ----------------------------------------------------------
// const { series, parallel } = require ("gulp"); //imports
// async function test () {
//   await console.log ("test");
// }
// async function tick () {
//   await console.log ("tick");
// }
// exports.default = test;
// exports.test = series(test, tick);//order of series args sets priority; can use parallel instead of series:
                                    //-series() - able to choose order of paralell functions
                                   //-parallel() - unable to choose order of paralell functions
                                  // to run: enter gulp test
//-------------------------------------------------------------
const { src, dest } = require("gulp");
const babel = require("gulp-babel"); 
const  concat = require("gulp-concat"); 
var uglify = require("gulp-uglify"); 
function piping_html () {
  return src("./src/*html").pipe(dest("dest_dir"));
}
function piping_js () {
  return src("./src/**/*js") // sets path to the working data
  .pipe(babel({presets:["@babel/env"]})) //presets - changing files view according to preset
  .pipe(uglify()) // minimalize code
  .pipe(concat("index.js"))//making main file
  .pipe(dest("dest_dir"))// sending the stream of working data to specified path
}
exports.default = piping_js;
                      // run in order(by commenting unrunable)1:piping_html,2: piping_js:1 - scr, dest;2 - babel and uglify;3 - concat