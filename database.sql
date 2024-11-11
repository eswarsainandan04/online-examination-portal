/*
Server: localhost
*/
CREATE DATABASE mydb3;

USE mydb3;



-- to store login information


CREATE TABLE users (
    name VARCHAR(50) NOT NULL,
    rollno VARCHAR(50) NOT NULL,
    branch VARCHAR(50) NOT NULL,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL
);

-- to sore subjects
CREATE TABLE namesub (
    subname VARCHAR(50) NOT NULL PRIMARY KEY
);

-- to store score

CREATE TABLE score (
    rollno VARCHAR(50) NOT NULL,
    subject VARCHAR(50) NOT NULL,
    score INT(50) NOT NULL,
    PRIMARY KEY (rollno, subject)
);


