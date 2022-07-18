-- Your code here
select tools.name, tools.price
from tools
where tools.price between 14.67 and 20.09
order by tools.name;
