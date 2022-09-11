SELECT customers.first_name, customers.last_name, customers.phone
FROM customers
JOIN purchases
  ON customers.id = purchases.customer_id
JOIN tool_purchases
  ON purchases.id = tool_purchases.purchase_id
JOIN tools
  ON tool_purchases.tool_id = tools.id
WHERE tools.name = 'Pipe Cutter'
ORDER BY purchases.id DESC
LIMIT 1;