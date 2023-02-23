# `M6W2D4`

## Inheritance

```js
// js
class Animal {
  constructor(name, sound){
    this.name = name;
    this.sound = sound;
  }

  speak(){
    return `${this.name} says ${this.sound}`
  }
}

class Dog extends Animal {
  constructor(name){
    super(name, 'woof') //default sound
  }
}

const myDog = new Dog('callie');
console.log(myDog.speak());
```

```py
# py
class Animal:
  def __init__(self, name, sound):
    self.name = name
    self.sound = sound

  def speak(self):
    return f'{self.name} says {self.sound}'

class Dog(Animal):
  def __init__(self, name):
    super().__init__(name, 'woof')

my_dog = Dog('callie')
print(my_dog.speak())

class Parent:
  def test(self):
    print('I am a parent class')

class Child(Parent):
  def test(self):
    print('I am a child class')
    super().test()

child = Child()
child.test()
```
