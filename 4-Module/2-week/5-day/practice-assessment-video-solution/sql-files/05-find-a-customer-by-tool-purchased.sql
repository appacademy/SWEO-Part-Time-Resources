-- Your code here
SELECT customers.first_name, customers.last_name, customers.phone
FROM customers
JOIN purchases
    ON (purchases.customer_id = customers.id)
JOIN tool_purchases
    ON (tool_purchases.purchase_id = purchases.id)
JOIN tools 
    ON (tool_purchases.tool_id = tools.id)
WHERE tools.name = 'Pipe Cutter'
ORDER BY purchases.id DESC
LIMIT 1;
