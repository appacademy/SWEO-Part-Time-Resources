--  display the name and price of tools in a price range between a minimum price of $14.67 and a maximum price of $20.09. You also want to order the results by the name of the tool alphabetically.

-- display data for any records where the record's price is between 14.67 and 20.09
SELECT name, price FROM tools WHERE price BETWEEN 14.67 AND 20.09 ORDER BY name;