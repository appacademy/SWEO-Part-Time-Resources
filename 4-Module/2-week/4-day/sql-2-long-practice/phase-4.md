# Basic Phase 4: ON DELETE CASCADE

In this phase, you will refactor the database schema so that when data is
deleted, data that depends on it is also deleted.

Write your SQL commands in `sql-practice/phase-4.sql` file. You can run the file by
executing it in the terminal:

```shell
sqlite3 practice.db ".read phase-4.sql"
```

## Refactor Database Schema

Copy all the code to drop and create tables from Phase 2 and paste it in place
of `-- Your code here` in the `sql-practice/phase-4.sql` file

Refactor that code so that when entries in `cats` or `owners` are deleted, all
the entries in other tables that depends on it (foreign key relationships) will
also be deleted.

Do not manipulate the seed data or the last `DELETE` query already written for
you in the file.

Test this by running the `phase-4.sql` file. The file should delete the cat with
the name of "Smudge" and also delete the `toys` and `cat_owners` entries that
depended on it successfully.