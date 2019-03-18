INSERT INTO `Prefectures` (`id`, `name`, `code`, `image`, `isActive`, `createdAt`, `updatedAt`) VALUES
(1, 'Prefeitura de Bom Jesus', 'RN001', 'bomjesusrn.png', 1, '2019-02-15 00:00:00', '2019-02-15 00:00:00');

INSERT INTO `Users` (`id`, `name`, `role`, `email`, `username`, `password`, `status`, `isActive`, `createdAt`, `updatedAt`, `PrefectureId`) VALUES
(1, 'Analista Bom Jesus', 'analista', 'analista@gmail.com', 'analista', '$2b$10$53uzxmRVPYHeZvlhGENQ4O1XaieIqg5G44RSHNb6b4ne7/XWo2Kc2', 'ativo', 1, '2019-02-16 15:48:38', '2019-02-16 15:48:38', 1),
(2, 'Gestor Bom Jesus', 'gestor', 'gestor@gmail.com', 'gestor', '$2b$10$kXCU81iREz41foigyHJhzeDe7vn0ZcBG.vBP2rZME1lcPSFalWYx.', 'ativo', 1, '2019-02-16 15:50:22', '2019-02-16 15:50:22', 1),
(3, 'Elton Cayo', 'god', 'eltoncayo@gmail.com', 'eltoncayo', '$2b$10$Hk/hwrrP2OtfLtbVsDp7gu5r4TtQvGF0fwURhZzwgtzZ77cj7T46i', 'ativo', 1, '2019-02-16 15:49:10', '2019-02-16 15:49:10', NULL);