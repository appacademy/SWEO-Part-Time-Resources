create table orders (
	id integer primary key,
	location varchar(50) not null,
	food varchar(50) not null,
	amount integer not null,
	food_price numeric(5,2) not null
);


insert into orders
	(location, food, amount, food_price)
values
	('resto A', 'sushi', 10, 18.60),
	('resto B', 'ramen', 8, 12.30),
	('resto C', 'kebab', 25, 6.80),
	('resto A', 'pho', 22, 9.50),
	('resto B', 'steak', 5, 21.20),
	('resto C', 'kimchi', 40, 1.45),
	('resto C', 'ramen', 12, 12.30),
	('resto A', 'kimchi', 50, 1.45),
	('resto B', 'sushi', 20, 18.60),
	('resto C', 'sushi', 25, 18.60);



select count(*) as number_of_orders, sum(amount) as total_food_purchases
from orders
where orders.location = 'resto C';


select count(*) as number_of_orders, sum(amount) as total_food_purchases,
	   amount * food_price as total_earned
from orders
where orders.location = 'resto C';


select sum(amount) as total_food_purchases, location
from orders
group by location
order by total_food_purchases desc;


create table users (
	id integer primary key,
	username varchar(50) not null unique,
	email varchar(50) not null unique,
	phone_number numeric(10,0)
);

create table posts (
	id integer primary key,
	message text not null,
	user_id integer,
	foreign key (user_id) references users(id)
);

create table friends (
	friend_1 integer,
	friend_2 integer,
	foreign key(friend_1) references users(id),
	foreign key(friend_2) references users(id)
);


insert into users
	(username, email, phone_number)
values
	('alex', 'alexbetita@yahoo.com', '1234567890'),
	('tristan', 'tristanhuckabee@yahoo.com', '1234567890'),
	('patrick', 'patrickstory@yahoo.com', '1234567890');

insert into posts
	(message, user_id)
values
	('SQL is fun!',
		(
			select id
			from users
			where users.username = 'alex'
		)
);

insert into posts
	(message, user_id)
select 'I love javascript', id
from users;

insert into friends
	(friend_1, friend_2)
select 1, id
from users
where users.username = 'alex' or users.username = 'tristan';

insert into friends
	(friend_1, friend_2)
select (
	select id
	from users
	where users.username = 'patrick'
), id
from users
where users.username = 'alex' or users.username = 'tristan';
