SELECT customers.first_name, customers.last_name, customers.phone
FROM customers
JOIN purchases
  ON purchases.customer_id = customers.id
JOIN tool_purchase
  ON tool_purchase.purchase_id = purchases.id
JOIN tools
  on tool_purchase.tool_id = tools.id
WHERE tools.name = 'Pipe Cutter'
ORDER BY purchases.id DESC
LIMIT 1;