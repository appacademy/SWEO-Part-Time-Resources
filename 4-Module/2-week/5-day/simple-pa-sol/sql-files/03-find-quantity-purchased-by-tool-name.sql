-- Your code here

-- all your tools and are searching for which purchase included tools with names starting with 'Pipe'. 

-- You want to know the name of the tool, price of the tool, and the quantity of the tool purchased in each purchase found. Order the results by the name of the tool alphabetically then by the quantity purchased (least to greatest).

-- (purchases.tool_id = tools.id) --> find record where table 2's foreignkey = table 1's primary key
-- SELECT * FROM purchases JOIN tools ON (purchases.tool_id = tools.id);

SELECT tools.name, tools.price, purchases.quantity FROM purchases JOIN tools ON (purchases.tool_id = tools.id) WHERE tools.name LIKE 'Pipe%' ORDER BY tools.name, purchases.quantity;
