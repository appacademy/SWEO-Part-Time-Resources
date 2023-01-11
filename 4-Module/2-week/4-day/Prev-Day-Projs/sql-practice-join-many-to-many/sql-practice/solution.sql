-- Step 1
-- Connecting both sides of a many-to-many relationship involves JOINing the
-- join table on to one side of the relationship, then JOINing the other side
-- on to the join table.
SELECT musicians.first_name, instruments.type
FROM instruments
  JOIN musician_instruments ON (
    instruments.id = musician_instruments.instrument_id
  )
  JOIN musicians ON (musicians.id = musician_instruments.musician_id)

-- Step 2
-- Just like with one-to-many relationships, you can filter one table by any 
-- associated data on a conected table.
SELECT musicians.first_name,
  musicians.last_name
FROM musicians
  JOIN musician_instruments ON (musicians.id = musician_instruments.musician_id)
  JOIN instruments ON (
    instruments.id = musician_instruments.instrument_id
  )
WHERE instruments.type = 'piano';
