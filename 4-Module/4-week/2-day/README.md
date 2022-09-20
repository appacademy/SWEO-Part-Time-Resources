# W22D2 - Tuesday

## Code-it-out: migration-add-column
- inside the `migration-add-column` folder, add a migration file to patch the table `Colors` to have:
  - a column name of: `shade`
  - a `type` of: `Sequelize.INTEGER`,
  - and `allowNull` of: false,

- Reference the queryInterface's api of [addColumn](https://sequelize.org/api/v6/class/src/dialects/abstract/query-interface.js~queryinterface#instance-method-addColumn) to do this

- 
- Associations
- Lazy/Earger Queries
- Insert with Associations

## Migrations for Relationships
- Practice: Foreign Key Migrations
  - refrence the homework, 
  - first, build the table's relationship in the migration file to actually apply it to the database first by adding the column `bandId`
  - Your `bandId` column should have these constraints:
```javascript
{
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
    model: 'Bands',
    key: 'id', //optional to explicitly state key
    },
    onDelete: 'cascade'
}
```
  - secondly, apply the associations on the model level. 

## Lazy/Earger Queries
- Practice: Lazy/Eager Queries

## Insert with Associations
- Practice: Insert with Associations

## Dynamic Seeding
- Practice: Dynamic Seeding


## Intermediate Sequelize Long Practice
Long Practice: Intermediate Sequelize