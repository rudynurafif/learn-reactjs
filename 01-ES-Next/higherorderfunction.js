// MAP
// untuk melooping sebuah array
const fruits = [
  {
    id: 1,
    name: 'Apple',
    price: 2000
  },
  {
    id: 2,
    name: 'Water Melon',
    price: 3000
  },
  {
    id: 3,
    name: 'Dragon Fruit',
    price: 2500
  },
  {
    id: 4,
    name: 'Apple',
    price: 2000
  },
]
// const fruitName = fruits.map(function(item) {
//   return item.name
// })
const fruitName = fruits.map(item => item.name)
console.log(fruitName); // [ 'Apple', 'Water Melon', 'Dragon Fruit' ]

// Filter
const apple = fruits.filter(item => item.name !== "Apple")
console.log(apple); // mereturn array

// Find
const waterMelon = fruits.find(item => item.name === 'Water Melon')
console.log(waterMelon); // mereturn object

// Reduce
const totalPrice = fruits.reduce((total, currentItem) => total + currentItem.price, 0)
console.log(totalPrice); // 9500