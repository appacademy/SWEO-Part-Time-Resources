-- Your code here
select tools.name, tools.price, purchases.quantity
from purchases
join tools on (purchases.name = tools.name)
where tools.name like 'Pipe%'
order by tools.name, purchases.quantity;

-- SELECT tools.name, tools.price, purchases.quantity
-- FROM tools
-- JOIN purchases ON
-- tools.name = purchases.name
-- WHERE purchases.name LIKE 'Pipe%'
-- ORDER BY tools.name, purchases.quantity;
