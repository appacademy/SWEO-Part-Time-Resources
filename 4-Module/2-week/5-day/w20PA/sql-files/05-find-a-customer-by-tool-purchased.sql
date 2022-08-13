SELECT first_name, last_name, phone_number from customers
WHERE id = (
	SELECT customer_id FROM purchases
	WHERE tool_name = 'Pipe Cutter'
	ORDER BY id DESC
	LIMIT 1
);

-- SELECT customers.first_name, customers.last_name, customers.phone_number 
-- FROM purchases
-- JOIN customers ON (purchases.customer_id = customers.id)
-- WHERE purchases.tool_name = 'Pipe Cutter'
-- ORDER BY purchases.id DESC;
-- LIMIT 1;
