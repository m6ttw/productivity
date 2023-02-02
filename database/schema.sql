CREATE DATABASE my_db;
USE my_db;

CREATE TABLE user_details (
  user_id integer PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  firstname VARCHAR(255) NOT NULL,
  lastname VARCHAR(255) NOT NULL,
  age integer NOT NULL,
  email VARCHAR(255) NOT NULL,
  created TIMESTAMP NOT NULL DEFAULT NOW()
);

INSERT INTO user_details(username, password, firstname, lastname, age, email) VALUES ('MATT', 'hibs1875', 'Matthew', 'Williams', 28, 'mattwcoding@gmail.com'), ('BOB', 'password123', 'Robert', 'Jones', 33, 'bob@gmail.com');