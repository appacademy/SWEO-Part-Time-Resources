-- Step 1 --! First method
SELECT musicians.first_name, instruments.type 
FROM musician_instruments
JOIN musicians ON (
	musician_instruments.musician_id = musicians.id
)
JOIN instruments ON (
	musician_instruments.instrument_id = instruments.id
);

--! Second method
SELECT musicians.first_name, instruments.type
FROM instruments
JOIN musician_instruments ON (
  instruments.id = musician_instruments.instrument_id
)
JOIN musicians ON (
	musician_instruments.musician_id = musicians.id
);

--! Third method
SELECT musicians.first_name, instruments.type
FROM musicians
JOIN musician_instruments ON (
  musicians.id = musician_instruments.musician_id
)
JOIN instruments ON (
	musician_instruments.instrument_id = instruments.id
);

-- Step 2 --! First method
SELECT musicians.first_name, musicians.last_name
FROM musician_instruments
JOIN musicians ON (
	musician_instruments.musician_id = musicians.id
)
JOIN instruments ON (
	musician_instruments.instrument_id = instruments.id
)
WHERE instruments.type = 'piano';

--! Second method
SELECT musicians.first_name, musicians.last_name
FROM instruments
JOIN musician_instruments ON (
  instruments.id = musician_instruments.instrument_id
)
JOIN musicians ON (
	musician_instruments.musician_id = musicians.id
)
WHERE instruments.type = 'piano';

--! Third method
SELECT musicians.first_name, musicians.last_name
FROM musicians
JOIN musician_instruments ON (
  musicians.id = musician_instruments.musician_id
)
JOIN instruments ON (
	musician_instruments.instrument_id = instruments.id
)
WHERE instruments.type = 'piano';
