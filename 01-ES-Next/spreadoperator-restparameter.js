// Spread Operator

let arr1 = [1, 2, 3];
// let arr2 = [...arr1, 4, 5, 6]
let arr2 = [4, 5, 6, ...arr1] // [4, 5, 6, 1, 2, 3]
console.log(arr2);

const club = {
  id: 1,
  country: "England"
}

const manCity = {
  ...club,
  name: 'Man City'
}
console.log(manCity);


// ==========================================


// Rest Parameter

const add = (a, b, ...rest) => {
  let total = 0
  for(let i = 0; i < rest.length; i++) {
    total += rest[i]
  }
  return a + b + total
}
console.log(add(1, 2, 3, 4)); // 10