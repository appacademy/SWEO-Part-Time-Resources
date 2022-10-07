SELECT musicians.first_name, instruments.type FROM musicians
    JOIN musician_instruments ON (musicians.id = musician_instruments.musician_id)
    JOIN instruments ON (instruments.id = musician_instruments.instrument_id);

SELECT musicians.first_name, musicians.last_name, instruments.type FROM musicians
    JOIN musician_instruments ON (musicians.id = musician_instruments.musician_id)
    JOIN instruments ON (instruments.id = musician_instruments.instrument_id)
    WHERE type = 'piano';