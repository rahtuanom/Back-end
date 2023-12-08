CREATE DATABASE IF NOT EXISTS `blue_horizon`;

USE `blue_horizon`;

-- CREATE TABLE PRODUCT

CREATE TABLE IF NOT EXISTS Room (
  id INT AUTO_INCREMENT PRIMARY KEY,
  type VARCHAR(100) NOT NUL,
  price INT NOT NULL 
);

CREATE TABLE IF NOT EXISTS Customer (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(1000) NOT NULL,
  addres VARCHAR(1000) NOT NULL,
  age INT NOT NULL
);

CREATE TABLE IF NOT EXISTS Reservation (
  id INT AUTO_INCREMENT PRIMARY KEY,
  id_customer INT NOT NULL,
  id_room INT NOT NULL,
  check_in DATE,
  check_out DATE
  total INT NOT NULL
);

-- data seed
INSERT INTO Room (type, price) VALUES ( 
    'Standard Room', '250000'
);

INSERT INTO Customer (name, address, age) VALUES (
    'Steven Grant', 'Georgia,AS', '45'
);

INSERT INTO Reservation (id_customer, id_room, check_in, check_out, total) VALUES (
    '1213131', '2', '2023-11-10', '2023-11-13', '1000000'
)
