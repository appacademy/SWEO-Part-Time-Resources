-- Your code here
select distinct department from tools
where department is not null
order by tools.name desc;