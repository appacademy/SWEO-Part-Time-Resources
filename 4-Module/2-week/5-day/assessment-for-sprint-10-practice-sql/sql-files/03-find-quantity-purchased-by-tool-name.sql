-- Your code here
SELECT tools.name, tools.price, tool_purchases.quantity
FROM tools
JOIN tool_purchases
 ON tools.id = tool_purchases.tool_id
 WHERE tools.name LIKE 'Pipe%'
ORDER BY tools.name, tool_purchases.quantity;
