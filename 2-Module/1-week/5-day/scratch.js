class Animal {
  constructor(name) {
    this.name = name;
  }

  speak(noise) {
    return `${this.name} ${noise}s`;
  }

  potty(){
    return `${this.name} just went potty!`;
  }
}

class Dog extends Animal {
  constructor(name){
    super(name)
  }

  speak() {
    return `${this.name} barks`;
  }
}