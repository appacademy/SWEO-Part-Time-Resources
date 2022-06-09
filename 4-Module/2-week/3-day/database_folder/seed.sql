delete from users;
delete from posts;


insert into users (id, first_name, last_name)
values
(1, 'Baylen', 'Doss');

select * from users;


insert into posts (id, user_id, content)
values
(1, 1, 'Post 1'),
(2, 1, 'Post 2'),
(3, 1, 'Post 3');


select * from posts

