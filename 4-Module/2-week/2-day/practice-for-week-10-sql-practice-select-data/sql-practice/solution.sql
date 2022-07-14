SELECT '----1----';

SELECT * FROM puppies;

SELECT '----2----';

SELECT name, age_yrs, weight_lbs FROM puppies;

SELECT '----3----';


SELECT * FROM puppies
WHERE id = 5;


SELECT '-----4------';

SELECT name, age_yrs, weight_lbs FROM puppies
WHERE microchipped = 1;


SELECT '-----6------';

SELECT name, age_yrs, weight_lbs FROM puppies
where microchipped = 1
AND weight_lbs > 25;