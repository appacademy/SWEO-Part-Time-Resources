-- Your code here
select customers.first_name, customers.last_name
from customers
order by customers.last_name, customers.first_name;
