-- Your code here
--github
SELECT tools.name, tools.price
FROM tools
WHERE tools.price BETWEEN 14.67 AND 20.09
ORDER BY tools.name;
