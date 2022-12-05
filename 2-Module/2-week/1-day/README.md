# M2-W2-D1

---

## Assessment (40m)

---

## Context Lecture

```js
class Dog {
  constructor(name){
    this.name = name;
  }

  bark(){
    console.log(`${this.name} barks!`)
  }
}

const cali = new Dog('Cali');

//called with context
cali.bark();

//save function with context but called on the global scope
let caliBark = cali.bark;
caliBark(); //context has a runtime binding not a lexical binding

setTimeout(cali.bark, 1000); // same thing [Function: bark] does not include the context

```

---

## Context Project phases 1-3

---
