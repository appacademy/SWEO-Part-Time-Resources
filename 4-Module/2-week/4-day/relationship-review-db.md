## <span style="color:#3c78d8;"> Relationships </span>

### <span style="color:#674ea7;">Foreign Key</span> 
- **PRIMARY KEY (row identifier)** Recall that a PRIMARY KEY is a **column which holds unique values**. It is a way to **identify each row** in a table.

- **Foreign Key points to PRIMARY KEY that it belongs to:** To relate one table to another, a FOREIGN KEY column is included which is associated with - or references the PRIMARY KEY in another table.

- **PK vs FK**: foreign key will reference the foreign record's PK id on another table that the current record belongs to. Primary Key is a unique identifier for a record.

#### <span style="color:#cd1d1d;">Example</span>
- **Foreign key** of **person_ssn** is made up of the table that we referencing's singular name and the primary key's column name on that table.

![](https://i.imgur.com/cbmKdfI.png)


### <span style="color:#674ea7;">One to One</span> 
- **One row One row:** This means one row in table A references one and only one row in table B.
- useful for separating data based on its responsibilities
![](https://i.imgur.com/sE1IaGU.png)
- ^for the above, we can move all the `preferences` table columns to the accounts table, but that would be holding too much responsbilities.

### <span style="color:#674ea7;">One to Many</span> 
- The one-to-many relationship is where **one record** in a table **can be referenced** by **many (1+) records in another table**.
    - "a user can have many posts"
    - "a post belongs to (points to) a user"
        - `posts` table is the one that will have the column **`foreign key`**
          - the `posts foreign key` will point to the `users` table `primary key`


- **A Facebook User can have Many Posts:** 
  - a user can have many posts. Therefore, each `post` should have a **`foreign key`** that references the `Primary Key` of the record on the `users table`.

- **Each person can have many jobs** (a job belongs to a person)
  - `jobs` is the table with the `foreign key` that points to `people` table `primary key` column.
![](https://i.imgur.com/reFsTJK.png)



#### <span style="color:#cd1d1d;">SCENARIO: 1 Student - Many Juice Boxes </span>

- **How to phrase this relationship**:
    - a Student can have many Juice Boxes
    - a Juice Box (row) belongs to a student (Juice box cannot be shared).

- **Foreign keys** --> point to --> **Primary Key** 
    - "the `juicebox w/ id of 112` belongs to student w/ `id of 2(andrei)`"
    - "the `juicebox w/ id of 116` belongs to student w/ `id of 2(andrei)`"
![](https://i.imgur.com/nnMSViY.png)


- If we joined the two tables above. We duplicated the `student 2 - Andrei` in two different spots. Because Andrei is the owner of those two juice boxes.
![](https://i.imgur.com/JLFFN6j.png)

#### <span style="color:#cd1d1d;">Schema</span>
- Column, Type, Constraints
![](https://i.imgur.com/QfWkGfJ.png)


```sql
CREATE TABLE students (
  id INTEGER PRIMARY KEY,
  name TEXT
);

CREATE TABLE juice_boxes (
  id INTEGER PRIMARY KEY,
  juice TEXT,
  date TEXT,
  student_id INTEGER,
  -- we add the relationship below. a Juice box record belongs to a student (student can have many juice boxes)
  FOREIGN KEY (student_id) REFERENCES students(id)
);
```


### <span style="color:#674ea7;">Many to Many</span> 
-  when **multiple records** in one table are **associated** with **multiple records** in another table


#### <span style="color:#cd1d1d;">SCENARIO: Many Students to Many Subjects</span>

- **Example**:
    - **a STUDENT can take many SUBJECTS (aka classes)**
    - **a SUBJECT can have many STUDENTS**

- **`Join Table`:** The way to connect two tables in a `many-to-many` relationship is using a third table called a `join table`.
    - This **`JOIN table`** will `store` a `student foreign key` and a `subject foreign key`
    - This **JOIN table** does **not need its own primary key** in this case because it's only purpose is to act as a connecting table.

![](https://i.imgur.com/NLgXnL6.png)

- **Explanation** (for joins table image below):
    - **red (student w/ id=1):** a **student 1** can take **many subjects** (101, 102, 103, 104)
    - **green (subject w/ id = 102):** a **subject 102** can have **many students** (1,2,3)
    - both `student_id` and `subject_id` are **`foreign keys`**
![](https://i.imgur.com/k4wUnpX.png)

- **data combined**: here is the visualization of the **join table** with the **data columns + foreign keys**
  - basically just added the columns that corresponded to where the `foreign key was pointing`
![](https://i.imgur.com/EamO0xY.png)


#### <span style="color:#cd1d1d;">Schema </span>

![](https://i.imgur.com/KsyKDu1.png)



#### <span style="color:#cd1d1d;">SQL example </span>
```sql
CREATE TABLE students (
  id INTEGER PRIMARY KEY,
  name TEXT
);

CREATE TABLE subjects (
  id INTEGER PRIMARY KEY,
  name TEXT
);

CREATE TABLE student_subject (
  student_id INTEGER,
  subject_id INTEGER,
  FOREIGN KEY (student_id) REFERENCES students(id)
  FOREIGN KEY (subject_id) REFERENCES subjects(id)
);