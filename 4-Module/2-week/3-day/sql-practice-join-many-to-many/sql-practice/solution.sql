

-- SELECT musicians.first_name, instruments.type
-- FROM instruments
-- JOIN musician_instruments ON (instruments.id = musician_instruments.instrument_id)
-- JOIN musicians ON (musicians.id = musician_instruments.musician_id);


SELECT musicians.first_name, musicians.last_name
FROM instruments
JOIN musician_instruments ON (instruments.id = musician_instruments.instrument_id)
JOIN musicians ON (musicians.id = musician_instruments.musician_id)
WHERE instruments.type = 'piano';