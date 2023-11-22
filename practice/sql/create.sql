DROP SCHEMA IF EXISTS login;
CREATE SCHEMA IF NOT EXISTS login DEFAULT CHARACTER SET utf8;
USE login;

-- -----------------------------------

DROP TABLE IF EXISTS login.user;

CREATE TABLE IF NOT EXISTS login.user(
	Id VARCHAR(20),
    password VARCHAR(20),
    created DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(),
    updated DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP() on UPDATE CURRENT_TIMESTAMP(),
    PRIMARY KEY(Id)
);

-- -------------------------------------

INSERT INTO login.user(Id,password) VALUES('tldn','1234');