-- Balance Transfer Transaction
-- Violating Constraints
-- "OR ROLLBACK" will invoke a ROLLBACK if constraints fail
BEGIN TRANSACTION;
  UPDATE OR ROLLBACK accounts
  SET balance = balance + 1000
  WHERE (
      first_name = 'Amy'
      AND last_name = 'Pond'
    );

  UPDATE OR ROLLBACK accounts
  SET balance = balance - 1000
  WHERE (
      first_name = 'Rose'
      AND last_name = 'Tyler'
    );
COMMIT;


-- Check table status after transfer
SELECT *
FROM accounts;
