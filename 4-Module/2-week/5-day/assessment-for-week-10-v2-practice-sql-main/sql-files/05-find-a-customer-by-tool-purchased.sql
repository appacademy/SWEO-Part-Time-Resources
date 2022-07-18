-- Your code here
select customers.first_name, customers.last_name, customers.phone_number
from customers
join purchases on purchases.customers_id = customers.id
where purchases.name = 'Pipe Cutter'
order by purchases.id desc
limit 1;
