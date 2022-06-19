<<<<<<< HEAD
select musicians.first_name, instruments.type from musician_instruments
join musicians on (musician_instruments.musician_id = musicians.id)
join instruments on (musician_instruments.instrument_id = instruments.id)
=======
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
>>>>>>> 2022-Jan-W
where instruments.type = 'piano'