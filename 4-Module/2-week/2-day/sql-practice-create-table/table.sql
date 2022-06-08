drop table if EXISTS puppies;
drop table if EXISTS something;
create table puppies (
    id integer primary key,
    name varchar(50),
    age_yrs numeric(3 , 1),
    breed varchar(100),
    weigth_lbs int,
    microchipped boolean
);
