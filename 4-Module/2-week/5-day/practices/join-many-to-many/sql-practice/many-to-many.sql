-- ---------------step 1----------------
-- tableName.NameOfColumn

-- select * from musician_instruments;

-- combine the musician_instruments join table and add the records from muscians table that meets the requirement.
SELECT * from musician_instruments JOIN musicians ON (musician_instruments.musician_id = musicians.id); -- the first two table combined


-- get the last table and combine it as well. So for each record in both tables, if there's a match --> musician_instruments.instrument_id = instruments.id --> combine the row together
SELECT * from musician_instruments JOIN musicians ON (musician_instruments.musician_id = musicians.id) JOIN instruments ON (musician_instruments.instrument_id = instruments.id);


-- now grab the specific columns that we want from our mega table (joined all 3 together)
SELECT instruments.type, musicians.first_name from musician_instruments JOIN musicians ON (musician_instruments.musician_id = musicians.id) JOIN instruments ON (musician_instruments.instrument_id = instruments.id);