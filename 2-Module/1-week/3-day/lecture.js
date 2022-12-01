// 

class Fruit {
    constructor(color, taste) {
      this.color = color;
      this.taste = taste;
    }
  
    eat() {
      console.log(`You ate a ${this.constructor.name}.`);
    }
  }
  
  class Apple extends Fruit {
    constructor() {
      super('red', 'sweet');
    }
  }
  
  const orange = new Fruit('orange', 'tangy');
  const apple = new Apple();
  orange.eat()
  apple.eat()