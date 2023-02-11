-- Your code here
SELECT tools.name, tool_purchases.quantity
FROM tools
JOIN tool_purchases
 ON tools.id = tool_purchases.tool_id
 ORDER BY tools.name, tool_purchases.quantity;
