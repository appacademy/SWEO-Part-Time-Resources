# Intermediate Phase 5: Join Table & Associations

In this phase, you will upgrade the database to track which insects have been
spotted on or near which trees.

## Review the requirements

Each type of insect can be seen near any type of tree, and each tree could have
multiple insects nearby. How do you model this type of relationship in a 
relational database like **SQL**?

Question: What attributes are needed in the JOIN table and what constraints or
validations are required to meet these specifications?

Answer:

| attribute | type    | constraints                                                   |
| --------- | ------- | ------------------------------------------------------------- |
| insectId  | integer | NOT NULL, FOREIGN KEY REFERENCES Bands(id), ON DELETE CASCADE |
| treeId    | integer | NOT NULL, FOREIGN KEY REFERENCES Bands(id), ON DELETE CASCADE |

## Create model and migration

Use **Sequelize CLI** command to create the model `InsectTree` with its
migration including the appropriate attributes. Modify the migration and/or
model files to add the constraints and validations as necessary to meet the
specifications above.

> Think about it: Is there anything that needs to be done with `createdAt` or 
> `updatedAt`?

Run the appropriate `migrate` command using the **Sequelize CLI**.

Verify the table exists by checking its `schema` using the **Sqlite CLI**.

## Add associations

In both models of this relationship, `Insect` and `Tree`, create a
`belongsToMany` association. Be sure to indicate which model you are connecting
to and that you are connecting through the `InsectTree` model.

In the next phase, you will interact with these associations as you implement
dynamic seeding. If you run into any errors, you may revisit this phase.