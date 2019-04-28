-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 21/03/2019 às 00:48
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
  `description` varchar(255) DEFAULT NULL,
  `isActive` tinyint(1) NOT NULL DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `PrefectureId` int(11) DEFAULT NULL,
  `UserId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Despejando dados para a tabela `Categories`
--

INSERT INTO `Categories` (`id`, `description`, `isActive`, `createdAt`, `updatedAt`, `PrefectureId`, `UserId`) VALUES
(1, 'Gastos gerais', 1, '2019-03-18 00:00:00', '2019-03-18 00:00:00', 1, 1);

-- --------------------------------------------------------

--
-- Estrutura para tabela `Expenses`
--

CREATE TABLE `Expenses` (
  `id` int(11) NOT NULL,
  `description` varchar(1000) DEFAULT NULL,
  `file` varchar(255) DEFAULT NULL,
  `due_date` date DEFAULT NULL,
  `authorized_by` int(11) DEFAULT NULL,
  `authorization_code` varchar(255) DEFAULT NULL,
  `authorization_date` date DEFAULT NULL,
  `requested_value` decimal(10,2) DEFAULT NULL,
  `authorized_value` decimal(10,2) DEFAULT NULL,
  `status` enum('nova','autorizada','recusada') NOT NULL DEFAULT 'nova',
  `isActive` tinyint(1) NOT NULL DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `CategoryId` int(11) DEFAULT NULL,
  `UserId` int(11) DEFAULT NULL,
  `PrefectureId` int(11) DEFAULT NULL,
  `ProviderId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Despejando dados para a tabela `Expenses`
--

INSERT INTO `Expenses` (`id`, `description`, `file`, `due_date`, `authorized_by`, `authorization_code`, `authorization_date`, `requested_value`, `authorized_value`, `status`, `isActive`, `createdAt`, `updatedAt`, `CategoryId`, `UserId`, `PrefectureId`, `ProviderId`) VALUES
(1, 'Aniversário da cidade de Bom Jesus RN', NULL, '2019-12-25', 3, '1552511443629_78226471735555440', '2019-03-13', '50001.00', NULL, 'autorizada', 1, '2019-02-16 16:27:26', '2019-03-13 21:10:43', 1, 1, 1, 26),
(2, 'Copa do Mundo', NULL, '2019-07-10', 2, '1552516101179_77951833440097170', '2019-03-13', '50210.00', '50210.00', 'autorizada', 1, '2019-02-16 16:30:07', '2019-03-13 22:28:21', 1, 1, 1, 28),
(3, 'Descrição teste despesa', NULL, '2019-12-25', NULL, NULL, NULL, '2323998.87', NULL, 'nova', 1, '2019-02-16 16:27:26', '2019-02-16 16:27:26', 1, 1, 1, 26),
(4, 'Novo teste de despesa cadastrada', NULL, '2019-07-10', NULL, NULL, NULL, '50210.66', NULL, 'nova', 1, '2019-02-16 16:30:07', '2019-02-16 16:30:07', 1, 1, 1, 28),
(5, 'Despesa cadastrada com sucesso', NULL, '2019-07-10', NULL, NULL, NULL, '1210.43', NULL, 'nova', 1, '2019-02-16 16:30:07', '2019-02-16 16:30:07', 1, 1, 1, 27),
(6, 'Despesa teste', NULL, '2019-07-10', 3, NULL, NULL, '34308349.77', NULL, 'recusada', 1, '2019-02-16 16:30:07', '2019-03-13 17:06:52', 1, 1, 1, 27);

-- --------------------------------------------------------

--
-- Estrutura para tabela `Prefectures`
--

CREATE TABLE `Prefectures` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
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
(1, 'Prefeitura de Bom Jesus', 'RN001', 'bomjesusrn.png', 1, '2019-02-15 00:00:00', '2019-02-15 00:00:00'),
(2, 'Onixx Sistemas', 'RN000', 'LogoOnixxBranca.png', 1, '2019-03-06 00:00:00', '2019-03-13 00:00:00');

-- --------------------------------------------------------

--
-- Estrutura para tabela `Providers`
--

CREATE TABLE `Providers` (
  `id` int(11) NOT NULL,
  `razaoSocial` varchar(255) DEFAULT NULL,
  `CNPJ` varchar(255) DEFAULT NULL,
  `isActive` tinyint(1) NOT NULL DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `PrefectureId` int(11) DEFAULT NULL,
  `UserId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Despejando dados para a tabela `Providers`
--

INSERT INTO `Providers` (`id`, `razaoSocial`, `CNPJ`, `isActive`, `createdAt`, `updatedAt`, `PrefectureId`, `UserId`) VALUES
(26, 'Big Blue Corporation', '000.000.000/0000-00', 1, '2019-03-20 05:13:28', '2019-03-21 00:48:16', 1, 2),
(27, 'Teste Novo', '000.000.000/0000-00', 1, '2019-03-20 05:41:56', '2019-03-21 00:46:13', 1, 2),
(28, 'Industrial Morte', '000.000.000/0000-00', 1, '2019-03-20 05:46:35', '2019-03-21 00:46:14', 1, 2),
(29, 'Big Minimum Company', '000.000.000/0000-00', 1, '2019-03-20 17:23:41', '2019-03-20 19:04:45', 2, 2),
(30, 'Big Black Company', '000.000.000/0000-00', 1, '2019-03-20 17:28:01', '2019-03-20 17:28:01', 2, 2);

-- --------------------------------------------------------

--
-- Estrutura para tabela `Users`
--

CREATE TABLE `Users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `role` enum('admin','analista','gestor','god') NOT NULL DEFAULT 'analista',
  `email` varchar(255) DEFAULT NULL,
  `username` varchar(255) NOT NULL,
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
(1, 'Analista Bom Jesus', 'analista', 'analista@gmail.com', 'analista', '$2b$10$53uzxmRVPYHeZvlhGENQ4O1XaieIqg5G44RSHNb6b4ne7/XWo2Kc2', 'ativo', 1, '2019-02-16 15:48:38', '2019-02-16 15:48:38', 1),
(2, 'Gestor Bom Jesus', 'gestor', 'gestor@gmail.com', 'gestor', '$2b$10$kXCU81iREz41foigyHJhzeDe7vn0ZcBG.vBP2rZME1lcPSFalWYx.', 'ativo', 1, '2019-02-16 15:50:22', '2019-02-16 15:50:22', 1),
(3, 'Elton Cayo', 'god', 'eltoncayo@gmail.com', 'eltoncayo', '$2b$10$Hk/hwrrP2OtfLtbVsDp7gu5r4TtQvGF0fwURhZzwgtzZ77cj7T46i', 'ativo', 1, '2019-02-16 15:49:10', '2019-02-16 15:49:10', 2);

--
-- Índices de tabelas apagadas
--

--
-- Índices de tabela `Categories`
--
ALTER TABLE `Categories`
  ADD PRIMARY KEY (`id`),
  ADD KEY `PrefectureId` (`PrefectureId`),
  ADD KEY `UserId` (`UserId`);

--
-- Índices de tabela `Expenses`
--
ALTER TABLE `Expenses`
  ADD PRIMARY KEY (`id`),
  ADD KEY `CategoryId` (`CategoryId`),
  ADD KEY `UserId` (`UserId`),
  ADD KEY `PrefectureId` (`PrefectureId`),
  ADD KEY `ProviderId` (`ProviderId`);

--
-- Índices de tabela `Prefectures`
--
ALTER TABLE `Prefectures`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `Providers`
--
ALTER TABLE `Providers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `PrefectureId` (`PrefectureId`),
  ADD KEY `UserId` (`UserId`);

--
-- Índices de tabela `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `PrefectureId` (`PrefectureId`);

--
-- AUTO_INCREMENT de tabelas apagadas
--

--
-- AUTO_INCREMENT de tabela `Categories`
--
ALTER TABLE `Categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `Expenses`
--
ALTER TABLE `Expenses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de tabela `Prefectures`
--
ALTER TABLE `Prefectures`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `Providers`
--
ALTER TABLE `Providers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT de tabela `Users`
--
ALTER TABLE `Users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restrições para dumps de tabelas
--

--
-- Restrições para tabelas `Categories`
--
ALTER TABLE `Categories`
  ADD CONSTRAINT `categories_ibfk_1` FOREIGN KEY (`PrefectureId`) REFERENCES `prefectures` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `categories_ibfk_2` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Restrições para tabelas `Expenses`
--
ALTER TABLE `Expenses`
  ADD CONSTRAINT `expenses_ibfk_1` FOREIGN KEY (`CategoryId`) REFERENCES `categories` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `expenses_ibfk_2` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `expenses_ibfk_3` FOREIGN KEY (`PrefectureId`) REFERENCES `prefectures` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `expenses_ibfk_4` FOREIGN KEY (`ProviderId`) REFERENCES `providers` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Restrições para tabelas `Providers`
--
ALTER TABLE `Providers`
  ADD CONSTRAINT `providers_ibfk_1` FOREIGN KEY (`PrefectureId`) REFERENCES `prefectures` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `providers_ibfk_2` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Restrições para tabelas `Users`
--
ALTER TABLE `Users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`PrefectureId`) REFERENCES `prefectures` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
