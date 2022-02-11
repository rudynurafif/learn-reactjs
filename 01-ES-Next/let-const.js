// var | let & const

// // HOISTING
// console.log(name);
// // var name
// let name

// // SCOPE VARIABEL
// var name = 'rudy' // global variabel

// if (true) {
//   // var b = 5 // var tetap menjadi global variabel meskipun didalam scope if / for
//   let b = 5 // let menjadi local variabel jika didalam block scope
//   console.log(b);
//   console.log(name);
// }

// function test() {
//   var a = 3 // var akan menjadi local variabel jika didalam function
//   console.log(a);
//   console.log(name);
// }
// console.log('>>', b);
// // console.log(a);
// test()

// // CONST
// // let a = 5; // let bisa direassign (dirubah/dideklarasikan ulang)
// const a = 5; // tidak bisa direassign
// a = 6;
// console.log(a);