-- Your code here

select purchases.name, tools.price, purchases.quantity from purchases
join tools on (purchases.name = tools.name)
where purchases.name like 'Pipe%'
order by purchases.name, purchases.quantity;