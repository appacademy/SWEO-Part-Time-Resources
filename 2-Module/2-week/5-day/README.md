# M2W2D5

## Custom Error Types Exercises (30 min)

- [Common Error Types Quiz]
- [Custom Error Types Practice]

## Custom Error Types Discussion

- Why custom Errors?

  - Developers are humans too! When creating software we are working with many
  other developers often on the same project. When errors are thrown we want
  to give developers the most information available when they hit an error.

- Errors are just objects! We can add whatever properties we want onto the error.

```js
class MissingRequiredFieldError extends Error {
  constructor(fieldName = 'field', ...params) {
    // Pass remaining arguments to parent constructor
    super(...params)

    // Maintains proper stack trace for where error was thrown (available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, MissingRequiredFieldError)
    }

    // The name property should match the class's name
    this.name = 'MissingRequiredFieldError'

    // Custom debugging information
    this.fieldName = fieldName
    this.message = `Missing required field "${fieldName}".`
    this.date = new Date()
  }
}


try {
  throw new MissingRequiredFieldError('email')
} catch (e) {
  console.error(e.name) //MissingRequiredFieldError
  console.error(e.fieldName) //email
  console.error(e.message) //Missing required field "email"
  console.error(e.stack) //stacktrace
}
```

## ES5 vs ES6 Exercises

- ES6 is for the MOST part syntactic sugar
- syntactic sugar is syntax within a programming language that is designed to
 make things easier to read or to express
- Nearly all objects in JavaScript are instances of Object which sits just below
  null on the top of a prototype chain.
- Cannot define constructor with an arrow function!

## Assessmet Practice

## Bejewled Project(Bonus)
