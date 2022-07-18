-- This ensures that SQLite enforces FOREIGN KEY constraints
PRAGMA foreign_keys = 1;

-- Your code here
drop table if exists customers;
drop table if exists tools;
drop table if exists purchases;

create table customers (
	id integer primary key,
	first_name varchar(20),
	last_name varchar(20),
	phone_number integer
);

create table tools (
	id integer primary key,
	name varchar(20),
	price numeric(4,2),
	department varchar(30)
);

create table purchases (
	id integer primary key,
	name varchar(20),
	quantity integer,
	customers_id integer,
	foreign key (customers_id) references customers(id) on delete cascade
);
