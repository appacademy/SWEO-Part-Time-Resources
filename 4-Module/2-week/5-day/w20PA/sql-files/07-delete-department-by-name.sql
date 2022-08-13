-- UPDATE tools
-- SET department = null
-- WHERE department = "Plumbing";


UPDATE tools 
SET department_id = null
WHERE department_id = (
	SELECT id FROM departments
	WHERE name = 'Plumbing'
);

DELETE FROM departments
WHERE name = 'Plumbing';
