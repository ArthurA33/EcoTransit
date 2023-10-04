-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : mar. 03 oct. 2023 à 12:55
-- Version du serveur : 8.0.31
-- Version de PHP : 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `ecotransit`
--

-- --------------------------------------------------------

--
-- Structure de la table `admin`
--

DROP TABLE IF EXISTS `admin`;
CREATE TABLE IF NOT EXISTS `admin` (
  `Id_admin` int NOT NULL AUTO_INCREMENT,
  `mot_de_passe_admin` varchar(255) NOT NULL,
  `Id_personne` int NOT NULL,
  PRIMARY KEY (`Id_admin`),
  KEY `Id_personne` (`Id_personne`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `personne`
--

DROP TABLE IF EXISTS `personne`;
CREATE TABLE IF NOT EXISTS `personne` (
  `Id_personne` int NOT NULL AUTO_INCREMENT,
  `pseudo_personne` varchar(255) NOT NULL,
  PRIMARY KEY (`Id_personne`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `score`
--

DROP TABLE IF EXISTS `score`;
CREATE TABLE IF NOT EXISTS `score` (
  `Id_score` int NOT NULL AUTO_INCREMENT,
  `score_total_score` int NOT NULL,
  PRIMARY KEY (`Id_score`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `trajet`
--

DROP TABLE IF EXISTS `trajet`;
CREATE TABLE IF NOT EXISTS `trajet` (
  `Id_trajet` int NOT NULL AUTO_INCREMENT,
  `nbr_km_trajet` decimal(15,2) NOT NULL,
  `date_trajet` date NOT NULL,
  `CO2_utiliser_trajet` decimal(15,2) NOT NULL,
  `Id_score` int NOT NULL,
  `Id_utilisateur` int NOT NULL,
  PRIMARY KEY (`Id_trajet`),
  KEY `Id_score` (`Id_score`),
  KEY `Id_utilisateur` (`Id_utilisateur`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `utilisateur`
--

DROP TABLE IF EXISTS `utilisateur`;
CREATE TABLE IF NOT EXISTS `utilisateur` (
  `Id_utilisateur` int NOT NULL AUTO_INCREMENT,
  `email_utilisateur` varchar(255) DEFAULT NULL,
  `num_utilisateur` int DEFAULT NULL,
  `mot_de_passe_utilisateur` varchar(255) DEFAULT NULL,
  `Id_score` int NOT NULL,
  `Id_personne` int NOT NULL,
  PRIMARY KEY (`Id_utilisateur`),
  KEY `Id_score` (`Id_score`),
  KEY `Id_personne` (`Id_personne`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `admin`
--
ALTER TABLE `admin`
  ADD CONSTRAINT `admin_ibfk_1` FOREIGN KEY (`Id_personne`) REFERENCES `personne` (`Id_personne`);

--
-- Contraintes pour la table `trajet`
--
ALTER TABLE `trajet`
  ADD CONSTRAINT `trajet_ibfk_1` FOREIGN KEY (`Id_score`) REFERENCES `score` (`Id_score`),
  ADD CONSTRAINT `trajet_ibfk_2` FOREIGN KEY (`Id_utilisateur`) REFERENCES `utilisateur` (`Id_utilisateur`);

--
-- Contraintes pour la table `utilisateur`
--
ALTER TABLE `utilisateur`
  ADD CONSTRAINT `utilisateur_ibfk_1` FOREIGN KEY (`Id_score`) REFERENCES `score` (`Id_score`),
  ADD CONSTRAINT `utilisateur_ibfk_2` FOREIGN KEY (`Id_personne`) REFERENCES `personne` (`Id_personne`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
