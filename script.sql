CREATE TABLE `login`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(50) CHARACTER SET 'utf8' COLLATE 'utf8_unicode_ci' NOT NULL,
  `email` VARCHAR(50) CHARACTER SET 'utf8' COLLATE 'utf8_unicode_ci' NOT NULL,
  `senha` VARCHAR(15) CHARACTER SET 'utf8' COLLATE 'utf8_unicode_ci' NOT NULL,
  `d_nasc` DATE NOT NULL,
  `sexo` CHAR(1) NOT NULL,
  `celular` VARCHAR(15) NOT NULL,
  PRIMARY KEY (`id`)  
)

SELECT * FROM login.users;

/*DROP TABLE LOGIN.USERS;*/

INSERT INTO `login`.`users`
(nome, email, senha, d_nasc, sexo, celular)
VALUES
('teste', 'teste@teste', 'teste', '20030816', 'M', '(14) 99794-5574');
