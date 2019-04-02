-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 02/04/2019 às 19:40
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
(1, 'Eventos diversos', 2, 1, '2019-02-16 00:00:00', '2019-04-02 17:10:27', 1),
(2, 'Pagamento de Pessoal', 2, 1, '2019-03-27 13:19:49', '2019-04-02 17:10:15', 2),
(3, 'Contratos esporádicos', 2, 0, '2019-03-27 13:28:31', '2019-04-02 17:10:20', 2),
(4, 'Combustíveis', 2, 1, '2019-04-02 17:09:45', '2019-04-02 17:09:45', 2);

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
(7, 'Contratos Esporádicos', NULL, '2019-04-18', '2019-04-02', '2364.00', NULL, NULL, 'recusada', 1, '2019-03-31 12:21:42', '2019-04-02 17:58:17', 2, 2, 2, 2, 5),
(8, 'Cachaça Envelhecida Ouro', NULL, '2019-04-19', '2019-04-02', '99.70', NULL, NULL, 'recusada', 1, '2019-03-31 17:23:41', '2019-04-02 17:56:09', 2, 2, 2, 2, 6),
(9, 'Folha de Pessoal', NULL, '2019-04-19', '2019-04-02', '979879.00', '979879.00', NULL, 'recusada', 1, '2019-04-01 14:15:47', '2019-04-02 17:56:56', 2, 2, 2, 2, 5),
(10, 'Teste cadastro de despesa', '1554227705357.pdf', '2019-04-04', '2019-04-02', '97868.00', '97868.00', 'TYCmaNt5', 'autorizada', 1, '2019-04-01 14:18:28', '2019-04-02 17:55:39', 3, 2, 2, 2, 5),
(11, 'Equipe para atuar na escola', NULL, '2019-04-06', '2019-04-02', '8768.00', NULL, NULL, 'nova', 1, '2019-04-01 18:24:34', '2019-04-01 18:24:34', 3, 2, NULL, 2, 6),
(12, 'Câmeras de vigilância', NULL, '2019-04-03', NULL, '98699.55', NULL, NULL, 'nova', 1, '2019-04-01 19:11:40', '2019-04-02 17:50:48', 3, 2, NULL, 2, 2),
(13, 'Instalação do observatório na escola', NULL, '2019-04-16', NULL, '18923.55', NULL, NULL, 'nova', 1, '2019-04-02 17:12:04', '2019-04-02 17:19:54', 1, 2, NULL, 2, 6);

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
(1, 'Stark Laboratories', '123456789abcde', 1, 3, 1, '2019-03-15 20:45:02', '2019-03-15 20:45:02'),
(2, 'Wayne Industries', '00000000000000', 2, 1, 1, '2019-03-15 21:21:58', '2019-03-15 21:21:58'),
(3, 'Luthor Inc.', '11111111111111', 2, 1, 0, '2019-03-16 05:20:33', '2019-03-28 12:05:15'),
(4, 'Osborn Corp.', '11111111111111', 1, 3, 1, '2019-03-16 09:14:06', '2019-03-16 09:14:06'),
(5, 'Daily Planet Press', '12345678909876', 2, 2, 1, '2019-03-27 13:29:35', '2019-03-27 13:29:35'),
(6, 'Enigma Laboratories', '12345678000100', 2, 2, 1, '2019-03-31 03:00:30', '2019-04-02 17:08:50');

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
(1, 'Analista Teste', 'analista', 'analista@gmail.com', 'analista', '$2b$10$7MMM0BW2GaCqOKSCRNWkMOjzTK6l6n7OfussHl.aCFzO28VH78Ox6', 'ativo', 1, '2019-02-16 15:48:38', '2019-04-02 17:06:52', 2),
(2, 'Gestor Teste', 'gestor', 'gestor@gmail.com', 'gestor', '$2b$10$kXCU81iREz41foigyHJhzeDe7vn0ZcBG.vBP2rZME1lcPSFalWYx.', 'ativo', 1, '2019-02-16 15:50:22', '2019-02-16 15:50:22', 2),
(3, 'Elton Cayo', 'god', 'eltoncayo@gmail.com', 'eltoncayo', '$2b$10$Hk/hwrrP2OtfLtbVsDp7gu5r4TtQvGF0fwURhZzwgtzZ77cj7T46i', 'ativo', 1, '2019-02-16 15:49:10', '2019-02-16 15:49:10', 1),
(4, 'Colaborador Teste', 'analista', 'colaborador@gmail.com', NULL, '$2b$10$lMoAf1.bYfeyzIYAy89jVu164pc8K3QnLoN7B3jXaoc.kwNirIMuu', 'ativo', 0, '2019-04-02 17:06:18', '2019-04-02 17:06:32', 2);

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
  ADD KEY `expenses_ibfk_1` (`CategoryId`),
  ADD KEY `expenses_ibfk_2` (`UserId`),
  ADD KEY `expenses_ibfk_3` (`DeciderId`),
  ADD KEY `expenses_ibfk_4` (`PrefectureId`),
  ADD KEY `expenses_ibfk_5` (`ProviderId`);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de tabela `Prefectures`
--
ALTER TABLE `Prefectures`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `Providers`
--
ALTER TABLE `Providers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de tabela `Users`
--
ALTER TABLE `Users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

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
  ADD CONSTRAINT `expenses_ibfk_1` FOREIGN KEY (`CategoryId`) REFERENCES `categories` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `expenses_ibfk_2` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `expenses_ibfk_3` FOREIGN KEY (`DeciderId`) REFERENCES `users` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `expenses_ibfk_4` FOREIGN KEY (`PrefectureId`) REFERENCES `prefectures` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `expenses_ibfk_5` FOREIGN KEY (`ProviderId`) REFERENCES `providers` (`id`) ON UPDATE CASCADE;

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
