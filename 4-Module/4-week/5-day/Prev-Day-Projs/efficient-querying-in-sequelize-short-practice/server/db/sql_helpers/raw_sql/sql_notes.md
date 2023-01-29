# SQL Dummy Data Source Notes

Data was generated at http://filldb.info/dummy/step1 using the following models,
and then cleaned / reformatted.


CREATE TABLE `authors` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`first_name` VARCHAR(50) NOT NULL,
	`last_name` VARCHAR(50) NOT NULL,
	`email` VARCHAR(100) NOT NULL,
	`birthdate` DATE NOT NULL,
	PRIMARY KEY (`id`),
	UNIQUE INDEX `email` (`email`)
) 

COLLATE='utf8_unicode_ci'
ENGINE=InnoDB;



CREATE TABLE `books` (
	`id` INT NOT NULL AUTO_INCREMENT,
        `author_id` INT NOT NULL,
	`title` VARCHAR(255) NOT NULL,
	`description` VARCHAR(500) NOT NULL,
	`date` DATE NOT NULL,
        `price` INT NOT NULL,
	PRIMARY KEY (`id`)
) 

COLLATE='utf8_unicode_ci'
ENGINE=InnoDB;



CREATE TABLE `reviews` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`book_id` INT NOT NULL,
        `reviewer_id` INT NOT NULL,
	`heading` VARCHAR(255) NOT NULL,
	`content` TEXT NOT NULL,
	`date` DATE NOT NULL,
	PRIMARY KEY (`id`)
) 

COLLATE='utf8_unicode_ci'
ENGINE=InnoDB;


CREATE TABLE `reviewers` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`book_id` INT NOT NULL,
	`first_name` VARCHAR(50) NOT NULL,
	`last_name` VARCHAR(50) NOT NULL,
	PRIMARY KEY (`id`)
) 

COLLATE='utf8_unicode_ci'
ENGINE=InnoDB;
