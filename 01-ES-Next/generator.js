// function biasa() {
//   return 'halo'
// }

function* generator(){
  yield 1;
  yield 2;
  yield 3;
  return 4;
}

const gen = generator()
gen.next().value
gen.next().value
