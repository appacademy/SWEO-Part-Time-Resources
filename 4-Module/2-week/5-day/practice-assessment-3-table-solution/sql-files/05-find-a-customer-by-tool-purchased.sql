SELECT 
customers.first_name, 
customers.last_name, 
customers.phone
FROM customers
JOIN purchases ON (purchases.customer_id = customers.id)
JOIN tools ON (purchases.tool_id = tools.id)
WHERE tools.name = 'Pipe Cutter'
ORDER BY purchases.id DESC
LIMIT 1;