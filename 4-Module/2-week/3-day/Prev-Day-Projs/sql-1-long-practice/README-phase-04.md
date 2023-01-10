# Intermediate Phase 4: More practice

In this phase, you will translate a more difficult scenario into a database
schema and operations.

## Step 1: Database Schema

Design a database schema in a database schema visualizer of your choice for
the following scenario:

You are the manager of an office that sells paper. You want to keep track of all
your employees, their first names, last names, departments, and roles in the
office. You also want to keep track of all romantic relationships between
employees in the office. You also want to record performance reviews. Each
performance review should record the person that the review was for and a score
out of 10. Your office holds regular office parties. Each party gets its own
budget and can be an onsite or offsite party.

## Step 2: Create Database

Create a database and tables based on your database schema design. Name the
database file __the-office.db__.

## Step 3: Read and Manipulate the Database

Using the tables that you created in the previous step, execute the following
events in the scenario using the SQLite3 CLI. Record any SQL commands that you
execute in the SQLite3 CLI in the __sql-practice/phase-4.sql__ file.

Events:

1. Add "Michael Scott" to your list of employees in the "Management" department
   in the role of "Regional Manager"
2. Add "Dwight Schrute" to your list of employees in the "Sales" department
   in the role of "Assistant Regional Manager"
3. Add "Jim Halpert" to your list of employees in the "Sales" department
   in the role of "Sales Representative"
4. Add "Pam Beesly" to your list of employees in the "Reception" department
   in the role of "Receptionist"
5. Add "Kelly Kapoor" to your list of employees in the "Product Oversight"
   department in the role of "Customer Service Representative"
6. Add "Angela Martin" to your list of employees in the "Accounting"
   department in the role of "Head of Accounting"
7. Add "Roy Anderson" to your list of employees in the "Warehouse"
   department in the role of "Warehouse Staff"
8. "Roy Anderson" and "Pam Beesly" are in a romantic relationship.
9. "Ryan Howard" is hired in the "Reception" department as a "Temp" role.
10. An onsite office party is scheduled with a budget of $100.00.
11. "Dwight Schrute" gets a performance review with a score of 3.3.
12. "Jim Halpert" gets a performance review with a score of 4.2.
13. "Dwight Schrute"'s past performance review needs to be changed to a score of
   9.0.
14. "Jim Halpert"'s past performance review needs to be changed to a score of
   9.3.
15. "Jim Halpert" is promoted to the role of "Assistant Regional Manager".
16. "Ryan Howard" is promoted to the "Sales" department as the role of
   "Sales Representative".
17. An onsite office party is scheduled with a budget of $200.00.
18. "Angela Martin" and "Dwight Schrute" are in a romantic relationship.
19. "Angela Martin" gets a performance review score of 6.2.
20. "Ryan Howard" and "Kelly Kapoor" are in a romantic relationship.
21. An onsite office party is scheduled with a budget of $50.00.
22. "Jim Halpert" moves to another office branch (make sure to remove his
   relationships and performance reviews if he has any).
23. "Roy Anderson" and "Pam Beesly" are NO LONGER in a romantic relationship.
24. "Pam Beesly" gets a performance review score of 7.6.
25. "Dwight Schrute" gets another performance review score of 8.7.
26. "Ryan Howard" quits the office (make sure to remove his relationships and
   performance reviews if he has any).
27. "Jim Halpert" moves back to this office branch's "Sales" department
   in the role of "Sales Representative"
28. "Karen Filippelli" moves from a different office into this office's
   "Sales" department in the role of "Sales Representative"
29. "Karen Filippelli" and "Jim Halpert" are in a romantic relationship.
30. An onsite office party is scheduled with a budget of $120.00.
31. The onsite office party scheduled right before this is canceled, and an
   offsite office party is scheduled instead with a budget of $300.00.
32. "Karen Filippelli" and "Jim Halpert" are NO LONGER in a romantic
   relationship.
33. "Pam Beesly" and "Jim Halpert" are in a romantic relationship.

To get more practice out of this scenario use your imagination to add more
events!

## Bonus

How would you change your database schema to track the employees who attended an
office party?

How would you change your database schema to track vacation days
taken by employees?
