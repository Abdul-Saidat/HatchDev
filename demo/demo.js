let hatchdev_students = ['ify, oba, bolu']

class student {
  static #name

  static age

  constructor (name, age) {
    this.name = name
    this.age = age
  }

  getname () {
    return this.name
  }

  speak () {
    console.log(`My name is ${this.name}`)
  }
}

class individual extends student {
  constructor (name) {
    super(name)
  }

  speak () {
    console.log(`I am an individual and My name is ${this.name}`)
  }
}

let me = new student('oba', 25)
let you = new student('bimpe', 50)
console.log(me.age)
console.log(me.getname)
console.log(me.speak())
const obj = new individual('bolaa')
console.log(obj.speak())

// me is an instance of the class
