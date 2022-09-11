SELECT tools.name, tools.price, tool_purchases.quantity
FROM tools
JOIN tool_purchases
  ON tools.id = tool_purchases.tool_id
WHERE tools.name LIKE 'Pipe%'
ORDER BY tools.name, tool_purchases.quantity;

-- BONUS:
-- SELECT tools.name, tools.price, SUM(tool_purchases.quantity)
-- FROM tools
-- JOIN tool_purchases
--   ON tools.id = tool_purchases.tool_id
-- WHERE tools.name LIKE 'Pipe%'
-- GROUP BY tool_purchases.tool_id
-- ORDER BY tools.name;