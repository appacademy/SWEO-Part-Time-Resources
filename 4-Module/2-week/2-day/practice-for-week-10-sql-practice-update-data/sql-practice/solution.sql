SELECT 'step 1 ----------';

select * from friends
where first_name = 'Amy';

UPDATE friends
SET last_name = 'Blue'
WHERE first_name = 'Amy'
AND last_name = 'Pond';


select * from friends
where first_name = 'Amy';

SELECT 'STEP 2 ---------';

SELECT * FROM friends
where first_name = 'Rose';

UPDATE friends
SET last_name = 'Smith'
WHERE last_name = 'Tyler'
AND   first_name = 'Rose';

SELECT * FROM friends
where first_name = 'Rose';