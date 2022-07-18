-- Your code here
select distinct tools.department
from tools
where tools.department is not null
order by tools.department;
