CREATE TABLE IF NOT EXISTS
'Blue_Horizon';

USE 'Blue_Horizon';

CREATE TABLE IF NOT EXISTS Room {
    id INT AUTO_INCREMENT PRIMARY KEY,
    type VARCHAR (256) NOT NULL,
    price INT NOT NULL,
};

CREATE TABLE IF NOT EXISTS Customer {
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR (256) NOT NULL,
    address VARCHAR (256) NOT NULL,
};

INSERT INTO Room  (type, price) VALUES ('standar', 2500000);



