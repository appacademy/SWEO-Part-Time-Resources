# M6 Wk2 D2 Intro To Python

## Dictionaries
- Dictionary (Js equivelant Object) is a list of comma-separated key-value pairs wrapped around curly braces ({}).
    - dictionary = {},  dict(key = "value"), isinstance(<variable_your_checking>, dict) -- mutable

### Creating Objects/Dictionaries
```
// JS Example

// JS will convert the key you enter to a string
const person = {firstName: "Will", lastName: "Duffy", 1: 489}
console.log(person)

# Python Example

# Python will require you make the keys that you create to be strings
# But you can have numbered keys in python dictionaries

# will fail
person = {first_name: "Will", last_name: "Duffy", 1: 489}
# will pass
person = {"first_name": "Will", "last_name": "Duffy", 1: 489}
print(person)

# You can also create a dictionary with the dict() callable
# Doing this will allow you to assign keys without quotation marks
# But you must use keywords

# will fail
person = dict(first_name = "Will", last_name = "Duffy", 1 = 489)
# will pass
person = dict(first_name = "Will", last_name = "Duffy")
print(person)
```

### Checking for Empty Objects/Dictionaries
```
// JS Example

const emptyObj = {};

// will log a 0 which a falsy value in js
console.log(Object.entries(emptyObj).length);
// will log true, showing that 0 is a falsy value
console.log(Object.entries(emptyObj).length == false);

const person = { firstName: "Will", lastName: "Duffy" };

// will log a the length of the entries array which is 2 and a truthy value in js
console.log(Object.entries(person).length);
// will log true, showing that 2 is a truthy value
console.log(Object.entries(person).length == true);

# Python Example

empty_dict = {}

will print True letting you know this dictionary is empty
print(not empty_dict)


person = {"first_name": "Will", "last_name": "Duffy"}

will print False letting you know this dictionary is not empty
print(not person)

```


### Checking for keys/values in Dictionaries
```
// JS Example
const person = { firstName: "Will", lastName: "Duffy" };

// will log the value if the key is present in the object leading to a truthy value
console.log(person["firstName"]);
// will log undefined if the key is not present which leads to a falsy value
console.log(person["middleName"]);

# if we try this in python its a little different

person = {"first_name": "Will", "last_name": "Duffy"}

# will print the value if the key is present in the dictionary
print(person["first_name"])
# will throw an error if the key is not present in the dictionary
print(person("middle_name"))

# will print True if the key is present in the dictionary
print("first_name" in person)

# will print False if the key is present in the dictionary
print("middle_name" in person)
```

### Concatenatenating dictonaries
```
// JS Example

// reassigning and spreading objects to the same variable
let person = { firstName: "Will" };
const personLastName = { lastName: "Duffy" };

person = { ...person, ...personLastName };
console.log(person);

// spreading objects to a new variable
const personFirstName = {firstName: "Will"}
const personLastName = {lastName: "Duffy"}

const person = {...personFirstName, ...personLastName}
console.log(person);

// using .assign
const person = Object.assign({}, personFirstName, personLastName);
console.log(person);

# Python Example

# reassigning and using ** to combine dictionaries
person = dict(first_name = "Will")
person_last_name = dict(last_name = "Duffy")

person = {**person, **person_last_name}
print(person)

# using ** to create a new dictionary
person_first_name = dict(first_name = "Will")
person_last_name = dict(last_name = "Duffy")

person = {**person_first_name, **person_last_name}
print(person)

# Or use the .update method on your dictionary
person = dict(first_name = "Will")
person_last_name = dict(last_name = "Duffy")

person.update(person_last_name)
print(person)

```
