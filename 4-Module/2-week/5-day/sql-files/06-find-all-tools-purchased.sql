-- Your code here
SELECT tools.name, tool_purchases.quantity
FROM tools
JOIN tool_purchases
  ON tool_purchases.tool_id = tools.id
ORDER BY tools.name, tool_purchases.quantity;
