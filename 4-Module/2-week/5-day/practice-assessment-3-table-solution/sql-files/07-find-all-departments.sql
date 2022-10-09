SELECT department from tools
WHERE department NOT NULL
GROUP BY department
ORDER BY department;