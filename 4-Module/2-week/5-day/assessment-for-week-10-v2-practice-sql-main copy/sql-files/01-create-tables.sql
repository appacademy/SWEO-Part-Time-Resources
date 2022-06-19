-- This ensures that SQLite enforces FOREIGN KEY constraints
PRAGMA foreign_keys = 1;

-- Your code here
drop table if exists customers;
drop table if exists tools;
drop table if exists purchases;

create table customers (
    id integer primary key autoincrement,
    first_name varchar(50),
    last_name varchar(50),
    phone_number integer
);

create table tools (
    id integer primary key autoincrement,
    name varchar(50),
    price numeric(2, 2),
    department varchar(50)
);

create table purchases (
    id integer primary key autoincrement,
    name varchar(50),
    quantity integer,
    customer_id integer,
    foreign key (customer_id) references customers(id) on delete cascade
);