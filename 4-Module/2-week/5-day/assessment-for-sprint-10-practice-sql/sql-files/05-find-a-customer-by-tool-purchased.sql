-- Your code here

SELECT customers.first_name, customers.last_name, customers.phone_number
FROM customers
JOIN tool_purchases
ON tool_purchases.customer_id = customers.id
JOIN tools
ON tool_purchases.tool_id = tools.id
WHERE tools.name = 'Pipe Cutter'
ORDER BY tool_purchases.id DESC
LIMIT 1;
