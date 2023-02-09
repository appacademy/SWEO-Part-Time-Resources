## BONUS Practice: Sequelize Scopes

In this bonus practice, you can implement more modular scopes with
dynamic named function scopes.

## Implement Step 2 for all instrument types

Can you repeat step 2 for all of the given instrument types in the seed data
with a single endpoint and a single named function scope?

## STEP 3 CHALLENGE: Implement another named function scopes to a dynamic route

Take a look at the dynamic route handlers in __app.js__ for
`GET /stores/:storeId/instruments/:type`.

`GET /stores/:storeId/instruments/:type` should return all the instruments
within the given `storeID` and instrument `type` ordered by the instruments'
name, alphabetically.

Apply another named function scope in __instrument.js__ to
return the given `type` of instrument. Then apply the correct scopes and methods
to the route handler in __app.js__.

This route should exclude the `createdAt` and `updatedAt` data.

The `GET /stores/2/instruments/keyboard` endpoint should return:

```json
[{"id":17,"name":"piano","type":"keyboard","storeId":2,
"Store":{"id":2,"name":"Bay Area Sounds","location":"SF"}}]
```

## Congratulations!

You are now able to use named function scopes in **Sequelize** with your models.
Hoorayy!!