/*
Class digunakan untuk membuat constructor sebuah object
*/

class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  greet() {
    return `Hello ${this.name}`
  }
}

class Member extends Person { // subclass atau child class
  constructor(name, age, memberId) {
    super(name, age)
    this.memberId = memberId
  }
}

// const Rudy = new Person('Rudy', 23)
const Rudy = new Member('Rudy', 23, 99)
console.log(Rudy.memberId);