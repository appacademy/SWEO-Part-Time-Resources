# Long Practice: Class Syntax with Employees and Managers

In this practice, you will create and use classes, inheritance, polymorphism,
and commonJS module importing/exporting!

## Learning Goals

* Understand how a child class inherits from a parent class
* Know how to override a parent class's method
* Know when and how to use `super` and `extends`

## Set up

Clone the starter from the **Download** link at the bottom of this page.

## Phase 1: Define Employee and Manager classes

In the starter project directory, set up two files, __employee.js__ and
__manager.js__, for two classes, `Employee` and `Manager`.

In the __employee.js__ file, define an `Employee` class with a constructor that
sets an `Employee`'s `name`, `title`, `salary`, and `boss`.

In the __manager.js__ file, define another class, `Manager`, as a child class of
the `Employee` class. `Manager` should have all of the same properties as
`Employee`, and an attribute that holds an array of all `Employee's` assigned
to the `Manager`.

> **Note**: A `Manager` may be under another `Manager` because `Manager`s might
> report to higher-level `Manager`s.

> Reminder: Use CommonJS modules to get the `Employee` class into the
> __manager.js__ file.

## Phase 2: Dynamically adding employees

Define a method, `addEmployee(employee)` in the `Manager` class.  This
method should add an employee into the `Manager's` array of employees. Please
test this method in the __manager.js__ file.

Now that we have an `addEmployee` method, think about a way to call it such
that whenever an employee is initialized with a manager, the employee is
automatically added to the manager's employees array. Please test this using
the code below in the __manager.js__ file.

**Hint**: The method `addEmployee` must be called in the constructor (yes
the constructor) of the `Employee` class.

```js
let annie = new Manager('Annie', 100000, 'Director')
let alvy = new Employee('Alvy', 75000, 'Analyst', annie)

console.log(annie)
```

You should get this output:

```bash
<ref *1> Manager {
  name: 'Annie',
  salary: 100000,
  title: 'Director',
  manager: null,
  employees: [
    Employee {
      name: 'Alvy',
      salary: 75000,
      title: 'Analyst',
      manager: [Circular *1]
    }
  ]
}
```

## Phase 3: Bonus

Define a method, `bonus(multiplier)` in the `Employee` class. `Employee`s who
are not a `Manager` should calculate their bonus like this:

```plaintext
bonus = (employee salary) * multiplier
```

A `Manager` should calculate their bonus based on the total salary of all of
their `Employee`s, as well as the `Manager`'s `Employee`s' `Employee`s, and the
`Employee`s' `Employee`s' `Employee`s, etc. `Manager` employees should calculate
their bonus like this:

```plaintext
bonus = (manager's salary + total salary of all employees under them) * multiplier
```

<details><summary>Hint: </summary>You can extract the logic of calculating the
total salary of all a <code>Manager</code>'s <code>Employee</code>s into a
helper method which iterates through each of a <code>Manager</code>'s
<code>Employee</code>s, checking if the <code>Employee</code> is an instance of
a <code>Manager</code> or not. If the <code>Employee</code> is a
<code>Manager</code>, and add the sum of their <code>Employee</code>s' salaries
to the total salary. If the <code>Employee</code> is not a <code>Manager</code>,
add the <code>Employee</code>'s salary to the total salary. This function will
require recursion.</details>

## Phase 4: Testing

Imagine you have a company structured like this:

| Name     | Salary  | Title      | Boss   |
| -------- | ------- | ---------- | ------ |
| Hobbes   | 1000000 | Founder    | null   |
| Calvin   | 130000  | Director   | Hobbes |
| Susie    | 100000  | TA Manager | Calvin |
| Lily     | 90000   | TA         | Susie  |
| Clifford | 90000   | TA         | Susie  |

If Hobbes gets a bonus multiplier of 0.05, their bonus will be $70,500.

If Calvin gets a bonus multiplier of 0.05, their bonus will be $20,500.

If Susie gets a bonus multiplier of 0.05, their bonus will be $14,000.

If Lily gets a bonus multiplier of 0.05, their bonus will be $4,500.

If Clifford gets a bonus multiplier of 0.05, their bonus will be $4,500.

Create a new file called __test.js__. Create the scenario above and make sure
you get the correct bonuses for each employee.
