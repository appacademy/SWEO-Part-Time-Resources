- <span style="color:#cd1d1d;">**Object Oriented Programming**</span>:
    - Object Oriented Programming is one of many **design patterns** to **break down a complex problem** into **smaller parts** that are readable, maintainable, and interactive (API).
    - The main concept behind **OOP** is the idea that we can **identify, group, and organize related data and behaviors together** in order to treat them as a single entity within a larger system (classes).
    
- <span style="color:#cd1d1d;">**Classes**</span> (**Special Functions**): are blueprint to create our very own objects which has attributes & behaviors that emulates or models a problem we are trying to represent
    - Classes are a clean way to `Encapsulate` our code. 
        - They provide an API that hides the internal complexity(logic) and manages the data of our object
     - Example of a **car class API** (think real world representations)
        - properties (data): model, year, type
        - action (verbs): stop, move, drive, park
    - **`Classes in Two Parts`**:
        - **Interface(the what)**: what can this class do for us or other code?
        - **Implementation(the how)**: how the class actually does what it does



- <span style="color:#cd1d1d;">**instantiate**</span> (invoking): Class is just a framework (blueprint) until it is **instantiated** (built).
    - think function declarations vs. function invocations

- <span style="color:#cd1d1d;">**Instance**</span>: Object made from a class

- <span style="color:#cd1d1d;">**Constructor**</span>: handles setup, data initialization, or actions to perform prior to the instantiation of a class object 
    - **TLDR**: what setup/prepwork needs to be done before the object is created. Then constructor creates object for us.

- <span style="color:#cd1d1d;">**Properties**</span>: data or fields that represent the object (nouns and adjectives)
    - Also known as: instance varibles, fields, members.

- <span style="color:#cd1d1d;">**Methods**</span>: actions that the object can perform and what can be done to it (verbs)
    - Invoked on a given **instance** of the class (**instance methods**)
    - Think: `array.push(item)`
    - ```javascript= 
        const list = new Array(1,5,3,9,11,-3);
        list.push(10);
        console.log(list); // [ 1,5,3,9,11,-3,10]
        ```

- <span style="color:#cd1d1d;">**Encapsulation**</span> (hiding the how): **hiding** and protecting the **implementation details** (**the how**) and properties behind object's methods. 
    - Whoever or whatever uses our class object API should only need to worry about what it can do for them (**the what**).
    - Think of `array.push` method. We don't care about the implementation details, we only care about what `.push` takes in, what it can do for us, and what it spits out.
- <span style="color:#cd1d1d;">**Inheritance**:
    - We can use implementation inheritance to **allow classes** (children) **receive** the **properties and methods** of their **parent class**.
    
    - ![](https://i.imgur.com/pEiwHWc.png)
    
    - Inheritance is done through the **`extends`** keyword