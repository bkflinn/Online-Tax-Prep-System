drop table if exists USERS;
drop table if exists W2;
drop table if exists NEC;
drop table if exists RESULTS;

create table USERS (
	social INT PRIMARY KEY NOT NULL,
	first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
	street_address VARCHAR(255) NOT NULL,
    city VARCHAR(255) NOT NULL,
    state CHAR(2) NOT NULL,
    zip INT NOT NULL,
    status CHAR(1) NOT NULL
);

create table W2 (
	social INT PRIMARY KEY NOT NULL,
    emp_tin INT NOT NULL,
	employer VARCHAR(255),
	wages DECIMAL(10,2) NOT NULL,
    fed_withheld DECIMAL(10,2),
    FOREIGN KEY (social) REFERENCES USERS(social)
);

create table NEC (
	social INT PRIMARY KEY NOT NULL,
	payer_tin CHAR(10) NOT NULL,
	compensation DECIMAL(10,2) NOT NULL,
	fed_withheld DECIMAL(10,2),
	FOREIGN KEY (social) REFERENCES USERS(social)
);

create table RESULTS (
	social INT PRIMARY KEY NOT NULL,
	owed DECIMAL(10,2),
    FOREIGN KEY (social) REFERENCES USERS(social)
);