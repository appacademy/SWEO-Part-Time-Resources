# Final notes

## Naming Conventions - Sequelize vs SQL

### Models

- Sequelize - Singular & PascalCase

- SQL - Doesn't even know what a model is

### Migrations (Actual Table Name)

- Sequelize - Plural & PascalCase

- SQL - Plural & snake_case

### Columns

- Sequelize - camelCase

- SQL - snake_case

## Indexing in Sequelize

```js
CREATE UNIQUE INDEX idx_users_username_password
  ON users(username, password);
```

```js
// model
{
  sequelize,
  modelName: 'User',
  indexes: [
    {
      unique: true,
      fields: ['username', 'password'],
    },
  ],
};
```

```js
// migration
await queryInterface.addIndex('Users', ['username', 'password'], {
  unique: true,
});
```
