// function defaultTask(cb) {
//     // place code for your default task here
//     cb(console.log("All right"));
//   }  
//   exports.default = defaultTask
// ----------------------------------------------------------
// const { series, parallel } = require ("gulp");
// async function test () {
//   await console.log ("test");
// }
// async function tick () {
//   await console.log ("tick");
// }
// exports.default = test;
// exports.test = parallel(test, tick);
//-------------------------------------------------------------
const { src, dest } = require("gulp");
const babel = require("gulp-babel")
function piping_html () {
  return src("./src/*html").pipe(dest("dest_dir"));
}
function piping_js () {
  return src("./src/**/*js").pipe(babel()).pipe(dest("dest_dir"))
}
exports.default = piping_js;