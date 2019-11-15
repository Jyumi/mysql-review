USE ReviewDB;

CREATE TABLE notebook (
    id int auto_increment not null primary key,
    person_name varchar(255),
    task varchar(255)
);