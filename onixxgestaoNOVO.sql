-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 29/03/2019 às 12:02
-- Versão do servidor: 8.0.15
-- Versão do PHP: 7.1.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `onixxgestao`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `Categories`
--

CREATE TABLE `Categories` (
  `id` int(11) NOT NULL,
  `description` varchar(255) NOT NULL,
  `PrefectureId` int(11) DEFAULT NULL,
  `isActive` tinyint(1) NOT NULL DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `UserId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Despejando dados para a tabela `Categories`
--

INSERT INTO `Categories` (`id`, `description`, `PrefectureId`, `isActive`, `createdAt`, `updatedAt`, `UserId`) VALUES
(1, 'Eventos diversos', 2, 0, '2019-02-16 00:00:00', '2019-03-27 13:20:07', 1),
(2, 'Pagamento de pessoal', 2, 1, '2019-03-27 13:19:49', '2019-03-27 13:27:43', 2),
(4, 'Contratos esporádicos', 2, 1, '2019-03-27 13:28:31', '2019-03-27 13:28:31', 2);

-- --------------------------------------------------------

--
-- Estrutura para tabela `Expenses`
--

CREATE TABLE `Expenses` (
  `id` int(11) NOT NULL,
  `description` varchar(1000) DEFAULT NULL,
  `file` varchar(255) DEFAULT NULL,
  `dueDate` date DEFAULT NULL,
  `decisionDate` date DEFAULT NULL,
  `requestedValue` decimal(15,2) DEFAULT NULL,
  `authorizedValue` decimal(15,2) DEFAULT NULL,
  `authorizationCode` varchar(255) DEFAULT NULL,
  `status` enum('nova','autorizada','recusada') NOT NULL DEFAULT 'nova',
  `isActive` tinyint(1) NOT NULL DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `CategoryId` int(11) DEFAULT NULL,
  `UserId` int(11) DEFAULT NULL,
  `DeciderId` int(11) DEFAULT NULL,
  `PrefectureId` int(11) DEFAULT NULL,
  `ProviderId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Despejando dados para a tabela `Expenses`
--

INSERT INTO `Expenses` (`id`, `description`, `file`, `dueDate`, `decisionDate`, `requestedValue`, `authorizedValue`, `authorizationCode`, `status`, `isActive`, `createdAt`, `updatedAt`, `CategoryId`, `UserId`, `DeciderId`, `PrefectureId`, `ProviderId`) VALUES
(1, 'Aniversário da cidade de Bom Jesus RN', NULL, '2019-12-25', '2019-03-13', '50001.00', NULL, '1552511443629_78226471735555440', 'recusada', 1, '2019-02-16 16:27:26', '2019-03-13 21:10:43', 1, 1, 3, 2, 1),
(2, 'Copa do Mundo', NULL, '2019-07-10', '2019-03-13', '50210.00', '50210.00', '1552516101179_77951833440097170', 'autorizada', 1, '2019-02-16 16:30:07', '2019-03-13 22:28:21', 1, 1, 2, 2, 1),
(3, 'Descrição teste despesa', NULL, '2019-12-25', NULL, '2323998.87', NULL, NULL, 'nova', 1, '2019-02-16 16:27:26', '2019-02-16 16:27:26', 1, 1, NULL, 2, 1),
(4, 'Novo teste de despesa cadastrada', NULL, '2019-07-10', NULL, '50210.66', NULL, NULL, 'nova', 1, '2019-02-16 16:30:07', '2019-02-16 16:30:07', 1, 1, NULL, 2, 1),
(5, 'Despesa cadastrada com sucesso', NULL, '2019-07-10', NULL, '1210.43', NULL, NULL, 'nova', 1, '2019-02-16 16:30:07', '2019-02-16 16:30:07', 1, 1, NULL, 2, 1),
(6, 'Despesa teste', NULL, '2019-07-10', NULL, '34308349.77', NULL, NULL, 'recusada', 1, '2019-02-16 16:30:07', '2019-03-13 17:06:52', 1, 1, 3, 2, 1),
(10, 'Teste', 'C:\\fakepath\\DWave_128chip.jpg', '2019-03-30', NULL, '62543764.66', NULL, NULL, 'nova', 1, '2019-03-29 01:23:04', '2019-03-29 01:23:04', 4, 2, NULL, 2, 2),
(11, 'Contratos esporádicos', 'DiplomaMestrado.jpg', '2019-03-28', NULL, '123456789.77', NULL, NULL, 'nova', 1, '2019-03-29 01:39:57', '2019-03-29 01:39:57', 4, 2, NULL, 2, 5),
(12, 'Valor imenso só de teste', '164464607-lake-wallpapers.jpg', '2019-04-11', NULL, '99999999999.55', NULL, NULL, 'nova', 1, '2019-03-29 01:42:22', '2019-03-29 01:42:22', 4, 2, NULL, 2, 5),
(13, 'Pagamento de Pessoal', 'A comprehensive survey of recent developments in neuronal communication and computational neuroscience.pdf', '2019-03-29', NULL, '1234567898766.00', NULL, NULL, 'nova', 1, '2019-03-29 02:01:27', '2019-03-29 02:01:27', 2, 2, NULL, 2, 3),
(14, 'Pagamento de Pessoal', 'A comprehensive survey of recent developments in neuronal communication and computational neuroscience.pdf', '2019-03-28', NULL, '7162543764.66', NULL, NULL, 'nova', 1, '2019-03-29 02:06:33', '2019-03-29 02:06:33', 4, 2, NULL, 2, 2),
(15, 'Pagamento de Pessoal', 'A comprehensive survey of recent developments in neuronal communication and computational neuroscience.pdf', '2019-03-30', NULL, '8768658.87', NULL, NULL, 'nova', 1, '2019-03-29 02:08:52', '2019-03-29 02:08:52', 2, 2, NULL, 2, 3),
(16, 'Contratos esporádicos', 'A comprehensive survey of recent developments in neuronal communication and computational neuroscience.pdf', '2019-03-30', NULL, '8768658.87', NULL, NULL, 'nova', 1, '2019-03-29 02:10:35', '2019-03-29 02:10:35', 2, 2, NULL, 2, 6),
(17, 'Folha de Pessoal', 'A comprehensive survey of recent developments in neuronal communication and computational neuroscience.pdf', '2019-03-28', NULL, '75785.87', NULL, NULL, 'nova', 1, '2019-03-29 02:11:36', '2019-03-29 02:11:36', 2, 2, NULL, 2, 6),
(18, 'Folha de Pessoal', 'A comprehensive survey of recent developments in neuronal communication and computational neuroscience.pdf', '2019-03-28', NULL, '5464654.88', NULL, NULL, 'nova', 1, '2019-03-29 02:13:06', '2019-03-29 02:13:06', 2, 2, NULL, 2, 3);

-- --------------------------------------------------------

--
-- Estrutura para tabela `Prefectures`
--

CREATE TABLE `Prefectures` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `code` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `isActive` tinyint(1) NOT NULL DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Despejando dados para a tabela `Prefectures`
--

INSERT INTO `Prefectures` (`id`, `name`, `code`, `image`, `isActive`, `createdAt`, `updatedAt`) VALUES
(1, 'Onixx Sistemas', 'ONIXX', 'LogoOnixxBranca.png', 1, '2019-02-15 00:00:00', '2019-02-15 00:00:00'),
(2, 'Prefeitura de Bom Jesus', 'RN001', 'bomjesusrn.png', 1, '2019-02-15 00:00:00', '2019-02-15 00:00:00');

-- --------------------------------------------------------

--
-- Estrutura para tabela `Providers`
--

CREATE TABLE `Providers` (
  `id` int(11) NOT NULL,
  `socialName` varchar(255) NOT NULL,
  `cnpj` varchar(255) NOT NULL,
  `PrefectureId` int(11) NOT NULL,
  `UserId` int(11) NOT NULL,
  `isActive` tinyint(1) NOT NULL DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Despejando dados para a tabela `Providers`
--

INSERT INTO `Providers` (`id`, `socialName`, `cnpj`, `PrefectureId`, `UserId`, `isActive`, `createdAt`, `updatedAt`) VALUES
(1, 'Stark Laboratories', '000.000.000/0000-00', 1, 3, 1, '2019-03-15 20:45:02', '2019-03-15 20:45:02'),
(2, 'Wayne Industries', '000.000.000/0000-00', 2, 1, 1, '2019-03-15 21:21:58', '2019-03-15 21:21:58'),
(3, 'Luthor Inc.', '111.111.111/1111-11', 2, 1, 1, '2019-03-16 05:20:33', '2019-03-28 12:05:15'),
(4, 'Osborn Corp.', '111.111.111/1111-11', 1, 3, 1, '2019-03-16 09:14:06', '2019-03-16 09:14:06'),
(5, 'Daily Planet Press', '123456789098765', 2, 2, 1, '2019-03-27 13:29:35', '2019-03-27 13:29:35'),
(6, 'Novo fornecedor', '000000000000000', 2, 1, 1, '2019-03-27 23:08:11', '2019-03-28 12:05:11');

-- --------------------------------------------------------

--
-- Estrutura para tabela `Users`
--

CREATE TABLE `Users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `role` enum('admin','analista','gestor','god') NOT NULL DEFAULT 'analista',
  `email` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `status` enum('ativo','inativo','suspenso') NOT NULL DEFAULT 'ativo',
  `isActive` tinyint(1) NOT NULL DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `PrefectureId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Despejando dados para a tabela `Users`
--

INSERT INTO `Users` (`id`, `name`, `role`, `email`, `username`, `password`, `status`, `isActive`, `createdAt`, `updatedAt`, `PrefectureId`) VALUES
(1, 'Analista Teste', 'analista', 'analista@gmail.com', 'analista', '$2b$10$GOn/bMTrZaLV/BYOEGUIbO4mwTLFGUsUd.roeYANwC6vqE9oHQBHu', 'ativo', 1, '2019-02-16 15:48:38', '2019-03-27 23:22:52', 2),
(2, 'Gestor Teste', 'gestor', 'gestor@gmail.com', 'gestor', '$2b$10$kXCU81iREz41foigyHJhzeDe7vn0ZcBG.vBP2rZME1lcPSFalWYx.', 'ativo', 1, '2019-02-16 15:50:22', '2019-02-16 15:50:22', 2),
(3, 'Elton Cayo', 'god', 'eltoncayo@gmail.com', 'eltoncayo', '$2b$10$Hk/hwrrP2OtfLtbVsDp7gu5r4TtQvGF0fwURhZzwgtzZ77cj7T46i', 'ativo', 1, '2019-02-16 15:49:10', '2019-02-16 15:49:10', 1),
(4, 'Colaboradora', 'gestor', 'colaboradora@gmail.com', NULL, '$2b$10$tJqRDwJImlkHapB8J3bE9OYIJZRxpNKXy1.QJJT3tB5ykmrfAIFmC', 'ativo', 1, '2019-03-27 19:12:06', '2019-03-27 20:11:27', 2),
(5, 'João Maria', 'analista', 'joao@gmail.com', NULL, '$2b$10$dIpWi0re2bwO9/DiKg4PEuHhuO8kiTav/ECAkrjMcEaAthaZ54AuS', 'ativo', 0, '2019-03-27 23:02:16', '2019-03-27 23:22:10', 2);

--
-- Índices de tabelas apagadas
--

--
-- Índices de tabela `Categories`
--
ALTER TABLE `Categories`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `categoryPrefecture` (`description`,`PrefectureId`),
  ADD KEY `PrefectureId` (`PrefectureId`),
  ADD KEY `UserId` (`UserId`);

--
-- Índices de tabela `Expenses`
--
ALTER TABLE `Expenses`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `authorizationCode` (`authorizationCode`),
  ADD KEY `CategoryId` (`CategoryId`),
  ADD KEY `UserId` (`UserId`),
  ADD KEY `DeciderId` (`DeciderId`),
  ADD KEY `PrefectureId` (`PrefectureId`),
  ADD KEY `ProviderId` (`ProviderId`);

--
-- Índices de tabela `Prefectures`
--
ALTER TABLE `Prefectures`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`),
  ADD UNIQUE KEY `code` (`code`);

--
-- Índices de tabela `Providers`
--
ALTER TABLE `Providers`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `socialName` (`socialName`),
  ADD UNIQUE KEY `providerPrefecture` (`cnpj`,`PrefectureId`),
  ADD KEY `PrefectureId` (`PrefectureId`),
  ADD KEY `UserId` (`UserId`);

--
-- Índices de tabela `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `username` (`username`),
  ADD KEY `PrefectureId` (`PrefectureId`);

--
-- AUTO_INCREMENT de tabelas apagadas
--

--
-- AUTO_INCREMENT de tabela `Categories`
--
ALTER TABLE `Categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de tabela `Expenses`
--
ALTER TABLE `Expenses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT de tabela `Prefectures`
--
ALTER TABLE `Prefectures`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `Providers`
--
ALTER TABLE `Providers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de tabela `Users`
--
ALTER TABLE `Users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Restrições para dumps de tabelas
--

--
-- Restrições para tabelas `Categories`
--
ALTER TABLE `Categories`
  ADD CONSTRAINT `categories_ibfk_1` FOREIGN KEY (`PrefectureId`) REFERENCES `prefectures` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `categories_ibfk_2` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Restrições para tabelas `Expenses`
--
ALTER TABLE `Expenses`
  ADD CONSTRAINT `expenses_ibfk_1` FOREIGN KEY (`CategoryId`) REFERENCES `categories` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `expenses_ibfk_2` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `expenses_ibfk_3` FOREIGN KEY (`DeciderId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `expenses_ibfk_4` FOREIGN KEY (`PrefectureId`) REFERENCES `prefectures` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `expenses_ibfk_5` FOREIGN KEY (`ProviderId`) REFERENCES `providers` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Restrições para tabelas `Providers`
--
ALTER TABLE `Providers`
  ADD CONSTRAINT `providers_ibfk_1` FOREIGN KEY (`PrefectureId`) REFERENCES `prefectures` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `providers_ibfk_2` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON UPDATE CASCADE;

--
-- Restrições para tabelas `Users`
--
ALTER TABLE `Users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`PrefectureId`) REFERENCES `prefectures` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
