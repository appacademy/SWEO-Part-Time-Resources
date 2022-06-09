drop table if exists Users;
drop table if exists Posts;


create table Users (
    id int primary key,
    first_name varchar(20),
    last_name varchar(20)
);

create table Posts (
    id int primary key,
    user_id int,
    content text
);

