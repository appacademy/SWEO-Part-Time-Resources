select musicians.first_name, instruments.type from musician_instruments
join musicians on (musician_instruments.musician_id = musicians.id)
join instruments on (musician_instruments.instrument_id = instruments.id)
where instruments.type = 'piano'