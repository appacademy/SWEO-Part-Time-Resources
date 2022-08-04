# <span style="color:#674ea7;">Classes & OOP Terminology</span>  
- <span style="color:#cd1d1d;">**Object Oriented Programming**</span>:
    - Object Oriented Programming is one of many **design patterns** to **break down a complex problem** into **smaller parts** that are readable, maintainable, and interactive (API).
    - The main concept behind **OOP** is the idea that we can **identify, group, and organize related data and behaviors together** in order to treat them as a single entity within a larger system.
    
- <span style="color:#cd1d1d;">**Classes**</span> (**Special Functions**): are blueprints to create our very own objects which have attributes & behaviors that emulate or model a problem we are trying to represent
    - Classes are a clean way to `Encapsulate` our code. 
        - They provide an API that hides the internal complexity(logic) and manages the data of our object
     - Example of a **car class API** (think real world representations)
        - properties/attributes (data): model, year, type
        - actions (verbs): stop, move, drive, park
    - **`Classes in Two Parts`**:
        - **Interface(the what)**: what can this class do for us or other code?
        - **Implementation(the how)**: how the class actually does what it does



- <span style="color:#cd1d1d;">**Instantiate**</span> (invoking): Class is just a framework (blueprint) until it is **instantiated** (built).
    - think function declarations vs. function invocations

- <span style="color:#cd1d1d;">**Instance**</span>: Object made from a class. 
    - think of **houses(instances)** made from a **blueprint(class)**

- <span style="color:#cd1d1d;">**Constructor**</span>: handles setup, data initialization, or actions to perform prior to the instantiation of a class object 
    - **TLDR**: what setup/prepwork needs to be done before the object is created. Then constructor creates object for us.

- <span style="color:#cd1d1d;">**Properties**</span>: data or fields that represent the object (nouns and adjectives)
    - Also known as: instance varibles, fields, members.

- <span style="color:#cd1d1d;">**Instance Methods**</span>: actions that the object can perform and what can be done to it (verbs)
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
    - We can use implementation inheritance to **allow classes** (children) **receive** the **properties and methods** of their **parent class**.</span>
    
    - ![](https://i.imgur.com/pEiwHWc.png)
    
    - Inheritance is done through the **`extends`** keyword
    
    - **`super`** keyword: calls the constructor method of the parent class (keeps code DRY)
        - Used if you want to use the code from parent's constructor but define new properties in child constructor  

- <span style="color:#cd1d1d;">**Static Methods**</span>: A **class method**: Invoke it from a **CLASS** & (**they belong to the entire class, not the instance**)
    - Remember `Object.keys(fruitsObj)`?
        - `.keys` is a static method from the `Object` class!
    
- <span style="color:#cd1d1d;">**Static Variables**</span>: are useful in caching information about the class (**they belong to the class, not the instance**)
    - i.e. counting how many instances were created from the class
    - called from the Class itself, not instance.
    
- <span style="color:#cd1d1d;">**Polymorphism**</span>: Class methods can have several forms or shapes. There are two main abilities: ability to overload or extend a parent class' methods. 
    - Function **overloading** (can do many things): sending a different number or type of parameters to a particular function.
        - `sum(number1, number2)` and `sum(listOfNumbers)`
        - The many forms of `sum` can do many things, add numbers, add nums in array, add nums in objects, etc.
    
    - Function **overriding** (I'm doing it my way...): child class has own implementation of a function from one of its ancestor classes (usually the parent).
        - parent's `toString()` method --> logs `"Hi I am John"`
        - child's `toString()` override --> logs array instead of string --> `["Hi", "I", "am", "John"]`
