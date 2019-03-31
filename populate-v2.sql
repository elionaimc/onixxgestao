ALTER TABLE `Expenses` DROP FOREIGN KEY `expenses_ibfk_1`;
ALTER TABLE `Expenses` ADD  CONSTRAINT `expenses_ibfk_1` FOREIGN KEY (`CategoryId`) REFERENCES `categories`(`id`) ON DELETE NO ACTION ON UPDATE CASCADE;
ALTER TABLE `Expenses` DROP FOREIGN KEY `expenses_ibfk_2`;
ALTER TABLE `Expenses` ADD  CONSTRAINT `expenses_ibfk_2` FOREIGN KEY (`UserId`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE CASCADE;
ALTER TABLE `Expenses` DROP FOREIGN KEY `expenses_ibfk_3`;
ALTER TABLE `Expenses` ADD  CONSTRAINT `expenses_ibfk_3` FOREIGN KEY (`DeciderId`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE CASCADE;
ALTER TABLE `Expenses` DROP FOREIGN KEY `expenses_ibfk_4`;
ALTER TABLE `Expenses` ADD  CONSTRAINT `expenses_ibfk_4` FOREIGN KEY (`PrefectureId`) REFERENCES `prefectures`(`id`) ON DELETE NO ACTION ON UPDATE CASCADE;
ALTER TABLE `Expenses` DROP FOREIGN KEY `expenses_ibfk_5`;
ALTER TABLE `Expenses` ADD  CONSTRAINT `expenses_ibfk_5` FOREIGN KEY (`ProviderId`) REFERENCES `providers`(`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

INSERT INTO `Prefectures` (`id`, `name`, `code`, `image`, `isActive`, `createdAt`, `updatedAt`) VALUES
(1, 'Onixx Sistemas', 'ONIXX', 'LogoOnixxBranca.png', 1, '2019-02-15 00:00:00', '2019-02-15 00:00:00'),
(2, 'Prefeitura de Bom Jesus', 'RN001', 'bomjesusrn.png', 1, '2019-02-15 00:00:00', '2019-02-15 00:00:00');

INSERT INTO `Users` (`id`, `name`, `role`, `email`, `username`, `password`, `status`, `isActive`, `createdAt`, `updatedAt`, `PrefectureId`) VALUES
(1, 'Analista Teste', 'analista', 'analista@gmail.com', 'analista', '$2b$10$53uzxmRVPYHeZvlhGENQ4O1XaieIqg5G44RSHNb6b4ne7/XWo2Kc2', 'ativo', 1, '2019-02-16 15:48:38', '2019-02-16 15:48:38', 2),
(2, 'Gestor Teste', 'gestor', 'gestor@gmail.com', 'gestor', '$2b$10$kXCU81iREz41foigyHJhzeDe7vn0ZcBG.vBP2rZME1lcPSFalWYx.', 'ativo', 1, '2019-02-16 15:50:22', '2019-02-16 15:50:22', 2),
(3, 'Elton Cayo', 'god', 'eltoncayo@gmail.com', 'eltoncayo', '$2b$10$Hk/hwrrP2OtfLtbVsDp7gu5r4TtQvGF0fwURhZzwgtzZ77cj7T46i', 'ativo', 1, '2019-02-16 15:49:10', '2019-02-16 15:49:10', 1);

INSERT INTO `Categories` (`id`, `description`, `PrefectureId`, `isActive`, `createdAt`, `updatedAt`, `UserId`) VALUES
(1, 'Eventos diversos', 2, 0, '2019-02-16 00:00:00', '2019-03-27 13:20:07', 1),
(2, 'Pagamento de pessoal', 2, 1, '2019-03-27 13:19:49', '2019-03-27 13:27:43', 2),
(3, 'Contratos esporádicos', 2, 1, '2019-03-27 13:28:31', '2019-03-27 13:28:31', 2);

INSERT INTO `Providers` (`id`, `socialName`, `cnpj`, `PrefectureId`, `UserId`, `isActive`, `createdAt`, `updatedAt`) VALUES
(1, 'Stark Laboratories', '00000000000000', 1, 3, 1, '2019-03-15 20:45:02', '2019-03-15 20:45:02'),
(2, 'Wayne Industries', '00000000000000', 2, 1, 1, '2019-03-15 21:21:58', '2019-03-15 21:21:58'),
(3, 'Luthor Inc.', '11111111111111', 2, 1, 0, '2019-03-16 05:20:33', '2019-03-28 12:05:15'),
(4, 'Osborn Corp.', '11111111111111', 1, 3, 1, '2019-03-16 09:14:06', '2019-03-16 09:14:06'),
(5, 'Daily Planet Press', '12345678909876', 2, 2, 1, '2019-03-27 13:29:35', '2019-03-27 13:29:35');

INSERT INTO `Expenses` (`id`, `description`, `file`, `dueDate`, `decisionDate`, `requestedValue`, `authorizedValue`, `authorizationCode`, `status`, `isActive`, `createdAt`, `updatedAt`, `CategoryId`, `UserId`, `DeciderId`, `PrefectureId`, `ProviderId`) VALUES
(1, 'Aniversário da cidade de Bom Jesus RN', NULL, '2019-12-25', '2019-03-13', '50001.00', NULL, NULL, 'recusada', 1, '2019-02-16 16:27:26', '2019-03-13 21:10:43', 1, 1, 3, 2, 1),
(2, 'Copa do Mundo', NULL, '2019-07-10', '2019-03-13', '50210.00', '50210.00', NULL, 'nova', 1, '2019-02-16 16:30:07', '2019-03-13 22:28:21', 1, 1, NULL, 2, 1),
(3, 'Descrição teste despesa', NULL, '2019-12-25', NULL, '2323998.87', NULL, NULL, 'nova', 1, '2019-02-16 16:27:26', '2019-02-16 16:27:26', 1, 1, NULL, 2, 1),
(4, 'Novo teste de despesa cadastrada', NULL, '2019-07-10', NULL, '50210.66', NULL, NULL, 'nova', 1, '2019-02-16 16:30:07', '2019-02-16 16:30:07', 1, 1, NULL, 2, 1),
(5, 'Despesa cadastrada com sucesso', NULL, '2019-07-10', NULL, '1210.43', NULL, NULL, 'nova', 1, '2019-02-16 16:30:07', '2019-02-16 16:30:07', 1, 1, NULL, 2, 1),
(6, 'Despesa teste', NULL, '2019-07-10', NULL, '34308349.77', NULL, NULL, 'recusada', 1, '2019-02-16 16:30:07', '2019-03-13 17:06:52', 1, 1, 3, 2, 1);
