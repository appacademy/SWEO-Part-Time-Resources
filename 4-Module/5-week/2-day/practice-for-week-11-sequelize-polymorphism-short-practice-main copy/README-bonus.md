# (OPTIONAL) Bonus Practice: Polymorphism - Support eager loading

This content is totally optional. It is not required for assessments or project
work. It has been included for any student who wishes to dig deeper into both
**Polymorphic Associations** and **eager loading**.

Begin by uncommenting the contents of the fourth test file:
__server/test/step-bonus-spec.js__. Then, review the documentation on
[Polymorphic eager loading][eager-loading]. Now, implement as follows...

Edit the `Image` model to include `Image.addHook()` for the `afterFind` event.

Notice that the result of find may be a single item (e.g. when `findByPk` is
called), or it could be an array (e.g. when `findAll` is called). Please handle
both cases.

For all item(s) in the result, please set the `imageable` property to the
appropriate object. That means either `.BlogPost` or `.UserProfile`, depending
on the value of `imageableType`. If the `imageableType` is a different value or
`undefined`, then set `imageable` to `null` (so eager loading is consistent with
lazy loading).

> Tip: To prevent mistakes, it is best practice to `delete` the properties which
> point to the individual objects from the result, both on the result directly
> and in the `dataValues` attribute.

Verify by running the test for step 4: `npm test test/step-bonus-spec.js`

> Hint: If you continue to get errors like
> `AssertionError: expected undefined to be an instance of ...`,
> then consider where each property is set (e.g. if you have to delete
> unwanted values from 2 places, maybe you have to set a new value in
> two places as well).

[eager-loading]: https://sequelize.org/docs/v6/advanced-association-concepts/polymorphic-associations/#polymorphic-eager-loading