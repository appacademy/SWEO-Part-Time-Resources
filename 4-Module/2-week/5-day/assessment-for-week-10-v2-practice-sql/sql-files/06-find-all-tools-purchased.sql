SELECT tools.name, tool_purchase.quantity
FROM tools
JOIN tool_purchase
  ON tools.id = tool_purchase.tool_id
ORDER BY tools.name, tool_purchase.quantity;