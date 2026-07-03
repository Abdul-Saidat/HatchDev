class animal {
  #type

  #nooflegs

  constructor (type) {
    this.type = type
  }

  gettype () {
    return this.#type
  }

  settype (type) {
    this.#type = type
  }
}

class cow extends animal {
  constructor () {
    super(type)
    this.gettype(type)
  }
}

my_cow = new cow()

