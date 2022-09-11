-- Your code here

-- to output the name and quantity of each tool purchased in all purchases. Order the results by the name of the tool alphabetically then by the quantity purchased (least to greatest).

--tables: tools, purchases
SELECT tools.name, purchases.quantity FROM purchases JOIN tools ON (purchases.tool_id = tools.id) ORDER BY tools.name ASC, purchases.quantity ASC;