CREATE DATABASE PoKaV;

USE PoKaV;

CREATE TABLE Compositions (
                              id INT AUTO_INCREMENT PRIMARY KEY,
                              title VARCHAR(255),
                              gameType ENUM('holdEm', 'fermé'),
                              playerCount INT,
                              gameLength ENUM('courte', 'longue')
);

CREATE TABLE Jetons (
                       id INT AUTO_INCREMENT PRIMARY KEY,
                       color ENUM('noir', 'bleu', 'vert', 'gris', 'orange', 'violet', 'rouge', 'jaune', 'blanc'),
                       count INT,
                       value INT,
                       compositionId INT,
                       FOREIGN KEY (compositionId) REFERENCES Compositions(id) ON DELETE CASCADE
);