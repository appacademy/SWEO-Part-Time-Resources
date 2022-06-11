-- Your code here
select customers.first_name, customers.last_name, customers.phone_number from purchases
join customers on (customers.id = purchases.customer_id)
where purchases.name = 'Pipe Cutter'
order by purchases.id desc
limit 1;