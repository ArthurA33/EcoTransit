INSERT INTO `personne` (`Id_personne`, `pseudo_personne`) VALUES
(1, 'Utilisateur1'),
(2, 'Utilisateur2'),
(3, 'Utilisateur3'),
(4, 'Utilisateur4'),
(5, 'Utilisateur5'),
(6, 'Utilisateur6');


INSERT INTO `admin` (`Id_admin`, `mot_de_passe_admin`, `Id_personne`) VALUES
(1, 'MotDePasse1', 1),
(2, 'MotDePasse2', 2);

INSERT INTO `score` (`Id_score`, `score_total_score`) VALUES
(1, 100),
(2, 200),
(3, 150);

INSERT INTO `utilisateur` (`Id_utilisateur`, `email_utilisateur`, `num_utilisateur`, `mot_de_passe_utilisateur`, `Id_score`, `Id_personne`) VALUES
(1, 'utilisateur1@example.com', 12345, 'MotDePasseUtilisateur1', 1, 1),
(2, 'utilisateur2@example.com', 67890, 'MotDePasseUtilisateur2', 2, 2),
(3, 'utilisateur3@example.com', 54321, 'MotDePasseUtilisateur3', 3, 3),
(4, 'utilisateur4@example.com', 98765, 'MotDePasseUtilisateur4', 4, 4),
(5, 'utilisateur5@example.com', 23456, 'MotDePasseUtilisateur5', 5, 5),
(6, 'utilisateur6@example.com', 87654, 'MotDePasseUtilisateur6', 6, 6);


INSERT INTO `trajet` (`Id_trajet`, `nbr_km_trajet`, `date_trajet`, `CO2_utiliser_trajet`, `Id_score`, `Id_utilisateur`) VALUES
(1, 50.5, '2023-10-01', 10.2, 1, 1),
(2, 75.2, '2023-10-02', 15.8, 2, 2),
(3, 30.0, '2023-10-03', 6.5, 3, 3);