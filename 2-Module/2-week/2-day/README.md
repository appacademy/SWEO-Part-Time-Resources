# M2-W2-D2

---

## Bind, Call, and Apply

```js
class Dog {
  constructor(name){
    this.name = name;
  }

  bark(){
    console.log(`${this.name} says bark!`)
  }

  play(toy){
    console.log(`${this.name} likes to play with a ${toy}`)
  }
};

const cali = new Dog('Cali');
const caliBark = cali.bark;

caliBark() //Error -> the method lost its context [Function: bark]

//1. bind allows us to permanantly attach a context to a particular function

const boundCaliBark = caliBark.bind(cali);
boundCaliBark();
console.log(boundCaliBark); // [Function: bound bark]

//2. Call and Apply allow temporary attaching a context to a function
const play = cali.play

//call, (C)omma Seperated Args
play.call(cali, 'stick');

//apply, (A)rray of Args
play.apply(cali, ['ball']);
```

---

## Arrow Functions Revisited

```js
class Dog {
  constructor(name){
    this.name = name;
  }

  delayedBark(){
    setTimeout(function(){
      console.log(this);
      console.log(`${this.name} says bark!`)
    }, 1000)
  }

  arrowDelayedBark(){
    setTimeout(() => {
      console.log(this);
      console.log(`${this.name} says bark!`)
    }, 1000)
  }
}

const cali = new Dog('Cali');

cali.delayedBark(); //timeoutObject Context -> runtime binding
cali.arrowDelayedBark(); //Dog {name: "Cali"} Context -> lexical binding
```

---

## Context Project (Paired)

---
