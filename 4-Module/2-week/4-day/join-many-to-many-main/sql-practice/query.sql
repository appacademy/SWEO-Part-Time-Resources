.headers on 
.mode columns
-- select * from musicians;
-- select * from instruments;

-- select instruments.type, musicians.first_name from musician_instruments
-- join instruments on (instruments.id = musician_instruments.instrument_id)
-- join musicians on (musicians.id = musician_instruments.musician_id)

select musicians.first_name, musicians.last_name from musician_instruments
join instruments on (instruments.id = musician_instruments.instrument_id)
join musicians on (musicians.id = musician_instruments.musician_id)
where instruments.type = 'piano'