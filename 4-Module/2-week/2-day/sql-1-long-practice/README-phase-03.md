# Basic Phase 3: Insert, Select, Update, and Delete

In this phase, you will practice using `INSERT`, `SELECT`, `UPDATE` and `DELETE`
SQL commands.

## Instructions

Using the tables that you created in the previous phase, execute the following
events in the scenario using the SQLite3 CLI. Record any SQL commands that you
execute in the SQLite3 CLI in the __sql-practice/phase-3.sql__ file.

Events:

1. A new customer joined the loyalty program with the following customer
   information:

   | name   | phone        |
   | ------ | ------------ |
   | Rachel | 111-111-1111 |

2. Rachel purchases a coffee.
   (When adding a coffee order, you must first check the current points of the
   customer, update the customer's points, then add the coffee order.)
3. Two new customers joined the loyalty program with the following customer
   information:

   | name   | email               | phone        |
   | ------ | ------------------- | ------------ |
   | Monica | monica@friends.show | 222-222-2222 |
   | Phoebe | phoebe@friends.show | 333-333-3333 |

4. Phoebe purchases three coffees.
5. Rachel and Monica each purchase four coffees.
6. Monica wants to know her new point total.
7. Rachel wants to check her total points. Redeem her points for a coffee if she
   has enough points. If she doesn't, she wants to purchase a coffee.
8. Three new customers joined the loyalty program with the following customer
   information:

   | name     | email                 |
   | -------- | --------------------- |
   | Joey     | joey@friends.show     |
   | Chandler | chandler@friends.show |
   | Ross     | ross@friends.show     |

9. Ross purchases six coffees.
10. Monica purchases three coffees.
11. Phoebe wants to check her total points. Redeem her points for a coffee if she
   has enough points. If she doesn't, she wants to purchase a coffee.
12. Ross demands a refund for the last two coffees that he ordered. (Make sure you
    delete Ross's coffee orders and not anyone else's. Update his points to reflect the returned purchases.)
13. Joey purchases two coffees.
14. Monica wants to check her total points. Redeem her points for a coffee if she
   has enough points. If she doesn't, she wants to purchase a coffee.
15. Chandler wants to delete his loyalty program account.
16. Ross wants to check his total points. Redeem his points for a coffee if he
   has enough points. If he doesn't, he wants to purchase a coffee.
17. Joey wants to check his total points. Redeem his points for a coffee if he
   has enough points. If he doesn't, he wants to purchase a coffee.
18. Phoebe wants to change her email to `p_as_in_phoebe@friends.show`.

After you execute the events above, your data should look like this:

`customers` table:

| id  | name   | phone      | email                       | points | time              |
| --- | ------ | ---------- | --------------------------- | ------ | ----------------- |
| 1   | Rachel | 1111111111 |                             | 0      | a valid date time |
| 2   | Monica | 2222222222 | monica@friends.show         | 2      | a valid date time |
| 3   | Phoebe | 3333333333 | p_as_in_phoebe@friends.show | 9      | a valid date time |
| 4   | Joey   |            | joey@friends.show           | 8      | a valid date time |
| 6   | Ross   |            | ross@friends.show           | 10     | a valid date time |

`coffee_orders` table:

| id  | is_redeemed | ordered_at        |
| --- | ----------- | ----------------- |
| 1   | 0           | a valid date time |
| 2   | 0           | a valid date time |
| 3   | 0           | a valid date time |
| 4   | 0           | a valid date time |
| 5   | 0           | a valid date time |
| 6   | 0           | a valid date time |
| 7   | 0           | a valid date time |
| 8   | 0           | a valid date time |
| 9   | 0           | a valid date time |
| 10  | 0           | a valid date time |
| 11  | 0           | a valid date time |
| 12  | 0           | a valid date time |
| 13  | 1           | a valid date time |
| 14  | 0           | a valid date time |
| 15  | 0           | a valid date time |
| 16  | 0           | a valid date time |
| 17  | 0           | a valid date time |
| 20  | 0           | a valid date time |
| 21  | 0           | a valid date time |
| 22  | 0           | a valid date time |
| 23  | 0           | a valid date time |
| 24  | 0           | a valid date time |
| 25  | 0           | a valid date time |
| 26  | 1           | a valid date time |
| 27  | 0           | a valid date time |
| 28  | 0           | a valid date time |
