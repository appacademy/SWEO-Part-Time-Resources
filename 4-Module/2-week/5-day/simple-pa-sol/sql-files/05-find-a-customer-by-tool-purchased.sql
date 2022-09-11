-- Your code here

-- contact the last customer who purchased a 'Pipe Cutter' tool. Find their first name, last name, and phone number.

-- tables to need: customer, tools table, purchases tables

SELECT customers.first_name, customers.last_name, customers.phone_number FROM purchases 
JOIN tools ON (purchases.tool_id = tools.id) 
JOIN customers ON (purchases.customer_id = customers.id) 
WHERE tools.name = 'Pipe Cutter' ORDER BY purchases.id DESC LIMIT 1;