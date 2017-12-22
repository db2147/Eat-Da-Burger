### Schema
CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burgers (

id int NOT NULL AUTO_INCREMENT,
burger_name varchar(255) not null,
devoured BOOL DEFAULT false,
primary key(id)
);