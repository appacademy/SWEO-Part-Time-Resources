# Tips For Instructors

To help guide students - try not to give them the answers, but if you need the
answers, they may be found here.

## Phase 6

If you see an error like `SQLITE_ERROR: no such table: Tree`, then check
the `references` added to the `insect-tree` migration. They need to point to
the **Table** name (plural), not the model name (singular).
(e.g. see first/only answer regarding [references.model])

[references.model]: https://stackoverflow.com/questions/41556888/sequelize-in-node-express-no-such-table-main-user-error/41557753#41557753
