-- Your code here
SELECT customers.first_name, customers.last_name, customers.phone
FROM customers
JOIN tool_purchases
  ON customers.id = tool_purchases.customer_id
JOIN tools
  ON tool_purchases.tool_id = tools.id
WHERE tools.name = 'Pipe Cutter'
ORDER BY customers.id DESC
LIMIT 1;
