drop table users;
drop table posts;


create table users (
    id int primary key,
    first_name varchar(20),
    last_name varchar(20)
);

create table posts (
    id int primary key,
    user_id int,
    content text
);

