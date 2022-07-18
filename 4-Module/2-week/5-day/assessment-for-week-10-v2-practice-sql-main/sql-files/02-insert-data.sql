-- Your code here

insert into tools
	(name, price, department)
values
	('Snow shovel', 16.50, 'Home & Garden'),
	('Work light',  29.99, 'Electrical'),
	('Wheelbarrow', 89.99, 'Home & Garden'),
	('Pipe Wrench', 18.99, 'Plumbing'),
	('Pipe Cutter', 36.36, 'Plumbing'),
	('Rake',        15.45, 'Home & Garden');

insert into customers
	(first_name, last_name, phone_number)
values
	('John', 'Smith', 1111111111),
	('Jane', 'Doe',   2222222222);

insert into purchases
	(name, quantity, customers_id)
values
	('Work light',   1, 1),
	('Pipe Cutter',  2, 1),
	('Snow shovel',  3, 2),
	('Work light',   1, 2),
	('Pipe Wrench',  1, 2),
	('Pipe Cutter',  1, 2),
	('Wheelbarrow',  3, 1);
