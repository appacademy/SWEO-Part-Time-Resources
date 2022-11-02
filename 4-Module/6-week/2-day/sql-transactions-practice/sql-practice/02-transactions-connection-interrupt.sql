-- Balance Transfer Transactions
-- Simulate Connection Loss
BEGIN TRANSACTION;

  -- Transfer 200 from Amy to Rose
  UPDATE accounts
  SET balance = balance + 200
  WHERE (
      first_name = 'Rose'
      AND last_name = 'Tyler'
    );
  UPDATE accounts
  SET balance = balance - 200
  WHERE (
      first_name = 'Amy'
      AND last_name = 'Pond'
    );
  SAVEPOINT amy_to_rose;

  -- Transfer 200 from Martha to Rose
  UPDATE accounts
  SET balance = balance + 200
  WHERE (
      first_name = 'Rose'
      AND last_name = 'Tyler'
    );
  UPDATE accounts
  SET balance = balance - 200
  WHERE (
      first_name = 'Martha'
      AND last_name = 'Jones'
    );
  SAVEPOINT martha_to_rose;

  -- Transfer 200 from Donna to Rose
  UPDATE accounts
  SET balance = balance + 200
  WHERE (
      first_name = 'Rose'
      AND last_name = 'Tyler'
    );


  -- -- Simulation of connection loss
  -- -- Check status in current transaction, with `SELECT * FROM accounts;`
  -- -- Check status in another terminal

  
  -- UPDATE accounts
  -- SET balance = balance - 200
  -- WHERE (
  --     first_name = 'Donna'
  --     AND last_name = 'Noble'
  --   );
  -- SAVEPOINT donna_to_rose;


  -- -- Donna no longer can attend, rollback her money transfer
  -- ROLLBACK TO martha_to_rose;

  -- -- Transfer 200 from River to Rose
  -- UPDATE accounts
  -- SET balance = balance + 200
  -- WHERE (
  --     first_name = 'Rose'
  --     AND last_name = 'Tyler'
  --   );
  -- UPDATE accounts
  -- SET balance = balance - 200
  -- WHERE (
  --     first_name = 'River'
  --     AND last_name = 'Song'
  --   );
  -- SAVEPOINT river_to_rose;

-- COMMIT;