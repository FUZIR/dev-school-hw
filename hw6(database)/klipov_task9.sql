CREATE TABLE users(
    ID int NOT NULL PRIMARY KEY,
    username varchar(255) NOT NULL,
    email varchar(255) NOT NULL UNIQUE,
    firstname varchar NOT NULL,
    lastname varchar NOT NULL,
    password varchar(255)
);
INSERT INTO users(id, username, email, firstname, lastname, password)
VALUES (1, 'klipov', 'k.lipovok@gmail.com', 'Kyrylo', 'Lipovok', 12345)
;