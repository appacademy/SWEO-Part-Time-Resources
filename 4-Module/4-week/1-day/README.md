# W22D1 - Monday

## Assessment (2h)
- Breakdown:
  - time: 2hr
  - 16 MC x 1pt = 16pts 
  - 16 Specs = 16pts
  - Passing Score: 25/32

## Tips
- Take your time, ask questions if we don't understand something or if the prompt doesn't make sense during the assessment, we can clarify the prompt
- Remember to run each test one at a time and reach the error message it gives
- Models are singular like `Airplane` and tables created in Migrations are plural like `Airplanes`
- If undoing seeders, migrations, and migrate/seed still doesn't work, `DROP DATABASE (delete file)` and try again, if that doesn't work, something is wrong with the code


- Remember that these are `also available resources`:
  - Sequelize Docs (have it opened)
  - Express Docs 
  - practice assessment
  - any code you've written on coding problems, projects, practice assessment, etc. BUT NOT NOTES.
  - Formative quizzes on AA open
  - Homework and readings on AA open
  - MDN
  - `vsCode node` to run and execute code


- `Question freebees` (We didn't have time to cover due to time constraints):
  - True or False: You should always try to look to use N + 1 queries.
    - False
  - Is the code above executing N + 1 queries?
    - Yes, the code is executing N + 1 queries.
  - Based on the database schema and SQL query above, there is ONLY ONE index that you can choose below that will improve the SQL query. Choose the correct one.
    - `CREATE INDEX idx_nail_polishes_opacity_color_tag_name ON nail_polishes(opacity, color, tag_name);`
  - Scenario: An application searches the nail_polishes table 1,000 times more than inserting, with most of the searches only filtering the barcode column, and there are currently no indexes on the nail_polishes column. What is the MOST OPTIMAL way to make the application's overall time spent on these operations faster?
    - Yes, add an index on the `barcode` column.
  - Based on the SQLite3 CLI output above, is it possible to improve the query to search the data more efficiently if there are 100,000 records in the nail_polishes table?
    - Yes, the query can be made more efficient.
  - Is the Express application code above vulnerable to a SQL injection attack?
    - Yes, the code is vulnerable to a SQL injection attack.



## Today

### Readings and Quizzes For:
If we don't finish in class, go through it for homework, all these topics will be on the assessment and will be required this week.

- Migrations for Relationships
- Associations
- Lazy/Earger Queries
- Insert with Associations

### Homework 
- Finish readings and quizzes from today first
- `Dynamic Seeding` reading and quiz