SELECT tools.name, tools.price, purchases.quantity FROM purchases
JOIN tools ON (purchases.tool_name = tools.name)
WHERE tools.name LIKE 'Pipe%'
-- GROUP BY tools.name
ORDER BY tools.name, purchases.quantity;


-- SELECT tools.name, tools.price, SUM(purchases.quantity) FROM purchases
-- JOIN tools ON (purchases.tool_name = tools.name)
-- WHERE tools.name LIKE 'Pipe%'
-- GROUP BY tools.name
-- ORDER BY tools.name, purchases.quantity;