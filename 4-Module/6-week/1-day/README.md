# Mod 4 Week 6 Day 1

## What are User Permissions
- After a user has been Authenticated, you may want to have the ability for certain users to do certain things. This is where permissions come in to play.
- Permissions would be any rule you put in place that allows or blocks a a specefic users action to do something with your application.

## What are User Roles?
- A Role is a set of user permissions that can be assigned to an individual or a group of application users.
- To implement a role, you would need to first define a group of users as belonging to a specific group, and then define the scope of their authorized and restricted permissions.

## What Are Scopes?
- Scopes give you the ability to condense common queries or functionalites into a models scope rather than writing them multiple times in in multiple routes within your application.

### Default Scope
- A default scope will always be applied in any query on the model, and is defined with the defaultScope key

```
defaultScope: {
    attributes: { // included attributes; all others are excluded
        include: [ "title", "author", "isCheckedOut", "location" ]
    }
}
```

### Non-Default Scope
- Is an additional scope added to the scopes key object, and will only be ran when keyed into!

```
scopes: {
    atLibrary: function (libraryId) {
        return {
            where: { // filter results to be only from the specified library
                libraryId
            }
        }
    }
}
```


## Readings and Quiz 30 min
#### [Roles and Permissions](https://open.appacademy.io/learn/js-py---pt-aug-2022-online/week-24---authorization-and-authentication/roles-and-permissions)
#### [Scopes](https://open.appacademy.io/learn/js-py---pt-aug-2022-online/week-24---authorization-and-authentication/scoping-model-attributes)
#### [Quiz](https://open.appacademy.io/learn/js-py---pt-aug-2022-online/week-24---authorization-and-authentication/roles-and-permissions-quiz)
- Short Q/A

## Short Practice 45 min-EOD [Sequelize Scopes](https://open.appacademy.io/learn/js-py---pt-aug-2022-online/week-24---authorization-and-authentication/practice--sequelize-scopes)

# EOD
