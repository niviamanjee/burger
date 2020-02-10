USE n3vx15hd41r972vy;
DROP TABLE burgers;

CREATE TABLE burgers(
	id INT AUTO_INCREMENT NOT NULL,
    description VARCHAR(255),
    devoured BOOLEAN NOT NULL,
    createdAt TIMESTAMP NOT NULL,
    PRIMARY KEY(id)
);      

INSERT INTO burgers (description,devoured)  VALUES ('Cheese Burger',false), ('Portabella Mushroom Burger', false);
INSERT INTO burgers (description,devoured)  VALUES ('Bacon Burger',false);
