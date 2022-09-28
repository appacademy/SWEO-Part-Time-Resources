create table appointments (
    id integer primary key AUTOINCREMENT not null,
    name  varchar(200) not null,
    start_datetime timestamp not null,
    end_datetime timestamp not null,
    description text not null,
    private boolean not null
);

INSERT INTO appointments (name, start_datetime, end_datetime, description, private)
VALUES
('My appointment', '2022-09-27 14:00:00', '2022-09-27 15:00:00',
 'An appointment for me', false);