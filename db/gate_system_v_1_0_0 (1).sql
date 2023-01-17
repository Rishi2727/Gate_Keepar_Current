-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 14, 2023 at 07:15 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `gate_system_v_1.0.0`
--

-- --------------------------------------------------------

--
-- Table structure for table `commands`
--

CREATE TABLE `commands` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `command_value` varchar(100) NOT NULL,
  `description` varchar(255) NOT NULL,
  `updatedAt` datetime(3) DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `commands`
--

INSERT INTO `commands` (`id`, `name`, `command_value`, `description`, `updatedAt`, `createdAt`) VALUES
(1, 'DI00', 'x02x03x04x05x06', 'command for open gate left side', NULL, '2023-01-11 21:19:57.000'),
(2, 'DO00', 'x02x03x05x07', 'This command use for open gate Left Ride', NULL, '2023-01-11 21:20:57.000');

-- --------------------------------------------------------

--
-- Table structure for table `devices`
--

CREATE TABLE `devices` (
  `id` int(11) NOT NULL,
  `org_id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` varchar(255) NOT NULL,
  `device_no` varchar(50) NOT NULL,
  `device_typ` int(11) NOT NULL,
  `port_no` varchar(50) NOT NULL,
  `updatedAt` datetime(3) DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `door_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `devices`
--

INSERT INTO `devices` (`id`, `org_id`, `name`, `description`, `device_no`, `device_typ`, `port_no`, `updatedAt`, `createdAt`, `door_id`) VALUES
(1, 1, 'RFID', 'Rfid reader device', 'S01', 1, 'COM-01', NULL, '2023-01-11 21:27:54.000', 1),
(2, 1, 'RFID', 'Rfid reader Device', 'S02', 2, 'COM-02', NULL, '2023-01-11 21:27:54.000', 1),
(3, 1, 'GATE-CTRL', 'Gate serial device', 'S03', 3, 'COM-03', NULL, '2023-01-11 21:31:53.000', 1);

-- --------------------------------------------------------

--
-- Table structure for table `device_log`
--

CREATE TABLE `device_log` (
  `id` int(11) NOT NULL,
  `org_id` int(11) NOT NULL,
  `device_id` int(11) NOT NULL,
  `door_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `log_type` varchar(50) NOT NULL,
  `log_date` datetime(3) DEFAULT NULL,
  `updatedAt` datetime(3) DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `device_log`
--

INSERT INTO `device_log` (`id`, `org_id`, `device_id`, `door_id`, `user_id`, `log_type`, `log_date`, `updatedAt`, `createdAt`) VALUES
(1, 16, 3, 2, 4, 'Get Accessed', '2023-01-12 23:02:28.000', NULL, '2023-01-12 23:02:28.000'),
(2, 1, 1, 1, 1, 'Entry', NULL, NULL, '2023-01-12 17:44:18.116');

-- --------------------------------------------------------

--
-- Table structure for table `device_type`
--

CREATE TABLE `device_type` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` varchar(255) NOT NULL,
  `operation` varchar(50) NOT NULL,
  `updatedAt` datetime(3) DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `device_type`
--

INSERT INTO `device_type` (`id`, `name`, `description`, `operation`, `updatedAt`, `createdAt`) VALUES
(1, 'IN', 'Used for Read data', 'READ-IN', NULL, '2023-01-11 21:22:22.000'),
(2, 'OUT', 'Used for read data', 'READ-OUT', NULL, '2023-01-11 21:22:22.000'),
(3, 'WR', 'Write the data or send the data to gate', 'WRITE-OUT', NULL, '2023-01-11 21:25:45.000');

-- --------------------------------------------------------

--
-- Table structure for table `doors`
--

CREATE TABLE `doors` (
  `id` int(11) NOT NULL,
  `org_id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` varchar(255) NOT NULL,
  `door_no` varchar(50) NOT NULL,
  `updatedAt` datetime(3) DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `doors`
--

INSERT INTO `doors` (`id`, `org_id`, `name`, `description`, `door_no`, `updatedAt`, `createdAt`) VALUES
(1, 1, 'DOOR-1', 'Door 1 is a group', 'D1', NULL, '2023-01-11 21:35:16.000'),
(2, 1, 'DOOR-3', 'Door 3', 'D3', '2023-01-12 14:56:40.549', '2023-01-12 10:05:29.215');

-- --------------------------------------------------------

--
-- Table structure for table `organization`
--

CREATE TABLE `organization` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `address` varchar(255) NOT NULL,
  `contact_no` varchar(50) NOT NULL,
  `contact_person` varchar(100) NOT NULL,
  `description` varchar(255) NOT NULL,
  `logo_image` varbinary(255) DEFAULT NULL,
  `updatedAt` datetime(3) DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `organization`
--

INSERT INTO `organization` (`id`, `name`, `address`, `contact_no`, `contact_person`, `description`, `logo_image`, `updatedAt`, `createdAt`) VALUES
(1, 'Wise Neosco India Pvt Ltd', 'Plot No 24, Ecotech Extenstion VI, Near Bhati Chowk, Kasna, Greater Noida, Gautam Buddha Nagar-201310', '8899092727', 'Mr.Kapil Kumar', 'This is a organization which is situated in India', NULL, NULL, '2023-01-11 22:53:02.000'),
(16, 'Sangwan', 'Korea', '2356892356', 'Mr.KR SINGH', 'Sangwang University', NULL, NULL, '2023-01-12 04:10:44.671');

-- --------------------------------------------------------

--
-- Table structure for table `organization_group`
--

CREATE TABLE `organization_group` (
  `id` int(11) NOT NULL,
  `description` varchar(255) NOT NULL,
  `updatedAt` datetime(3) DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `name` varchar(100) NOT NULL,
  `org_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `organization_group`
--

INSERT INTO `organization_group` (`id`, `description`, `updatedAt`, `createdAt`, `name`, `org_id`) VALUES
(1, 'South Gate for all devices', NULL, '2023-01-11 21:00:01.000', 'South Gate', 16),
(2, 'North gate Group for all devices', NULL, '2023-01-11 21:00:56.000', 'North Gate', 1);

-- --------------------------------------------------------

--
-- Table structure for table `permission`
--

CREATE TABLE `permission` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` varchar(255) NOT NULL,
  `updatedAt` datetime(3) DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `permission`
--

INSERT INTO `permission` (`id`, `name`, `description`, `updatedAt`, `createdAt`) VALUES
(1, 'Super Admin', 'All rights for super admin', NULL, '2023-01-11 21:02:24.000'),
(2, 'Admin', 'Admin Group all rights but can not change the supper admin rights', NULL, '2023-01-11 21:03:39.000'),
(3, 'Head of the Institution', 'Head of the institution have data management rights', NULL, '2023-01-11 21:04:33.000'),
(4, 'Faculty', 'Only some part which is allowed for faculty', NULL, '2023-01-11 21:05:59.000'),
(5, 'Student', 'Student no right for this software', NULL, '2023-01-11 21:06:49.000');

-- --------------------------------------------------------

--
-- Table structure for table `rfid_card`
--

CREATE TABLE `rfid_card` (
  `id` int(11) NOT NULL,
  `card_no` varchar(100) NOT NULL,
  `description` varchar(255) NOT NULL,
  `isActive` tinyint(1) NOT NULL DEFAULT 1,
  `updatedAt` datetime(3) DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `rfid_card`
--

INSERT INTO `rfid_card` (`id`, `card_no`, `description`, `isActive`, `updatedAt`, `createdAt`) VALUES
(1, 'HDFCH123252', 'card ', 1, NULL, '2023-01-12 11:47:04.000'),
(2, 'KSDK123652', 'card', 0, NULL, '2023-01-12 11:47:40.000'),
(3, 'DKC52525S', 'description', 1, NULL, '2023-01-12 18:40:33.061'),
(4, 'DKC52525S', 'description', 0, NULL, '2023-01-12 18:43:33.129');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `org_id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `phone_no` varchar(50) NOT NULL,
  `address` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `user_img` varbinary(255) DEFAULT NULL,
  `user_group_id` int(11) DEFAULT NULL,
  `updatedAt` datetime(3) DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `rfid_card_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `org_id`, `name`, `email`, `password`, `phone_no`, `address`, `description`, `user_img`, `user_group_id`, `updatedAt`, `createdAt`, `rfid_card_id`) VALUES
(1, 1, 'Mr.Robin Hood', 'robinhood@wiseindia.com', 'admin@123', '9999888877', 'Kasana, Gautam Buddha Nagar, Noida', 'N/A', NULL, 1, NULL, '2023-01-11 21:14:09.000', 1),
(4, 1, 'R K Sharma', 'rk@india.com', 'password', '8585858585', 'address', 'description', NULL, 1, NULL, '2023-01-12 07:23:06.435', 1);

-- --------------------------------------------------------

--
-- Table structure for table `user_group`
--

CREATE TABLE `user_group` (
  `id` int(11) NOT NULL,
  `org_id` int(11) NOT NULL,
  `group_name` varchar(100) NOT NULL,
  `permission_id` int(11) NOT NULL,
  `updatedAt` datetime(3) DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user_group`
--

INSERT INTO `user_group` (`id`, `org_id`, `group_name`, `permission_id`, `updatedAt`, `createdAt`) VALUES
(1, 1, 'Manager', 1, NULL, '2023-01-11 21:08:01.000'),
(2, 1, 'Service Engineer', 2, NULL, '2023-01-11 21:08:37.000'),
(3, 1, 'Mr.Principal', 3, NULL, '2023-01-11 21:09:57.000'),
(4, 1, 'Mr.Teacher', 4, NULL, '2023-01-11 21:10:32.000'),
(5, 1, 'Mr.Student', 5, NULL, '2023-01-11 21:11:09.000');

-- --------------------------------------------------------

--
-- Table structure for table `wg_local_config`
--

CREATE TABLE `wg_local_config` (
  `pc_no` int(11) NOT NULL,
  `connection_type` int(11) NOT NULL,
  `env_driver` varchar(150) NOT NULL,
  `env_server` varchar(150) NOT NULL,
  `env_dsn` varchar(150) NOT NULL,
  `env_db_name` varchar(150) NOT NULL,
  `env_dbq` varchar(150) NOT NULL,
  `env_id` varchar(150) NOT NULL,
  `env_pwd` varchar(150) NOT NULL,
  `env_connection` varchar(150) NOT NULL,
  `keep_connection` tinyint(4) NOT NULL,
  `dbms_type` varchar(20) NOT NULL,
  `api_mode_use_yn` tinyint(4) NOT NULL,
  `api_mode_url` varchar(150) NOT NULL,
  `worker` varchar(50) NOT NULL,
  `update_date` varchar(8) NOT NULL,
  `update_time` varchar(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `wg_manager`
--

CREATE TABLE `wg_manager` (
  `manager_id` int(11) NOT NULL,
  `manager_name` varchar(100) NOT NULL,
  `manager_pwd` varchar(100) NOT NULL,
  `auth_id` int(11) NOT NULL,
  `group_id` int(11) DEFAULT NULL,
  `manager_phone_no` varchar(50) NOT NULL,
  `manager_desc` varchar(255) NOT NULL,
  `worker_id` varchar(50) NOT NULL,
  `updatedAt` datetime(3) DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `wg_manager`
--

INSERT INTO `wg_manager` (`manager_id`, `manager_name`, `manager_pwd`, `auth_id`, `group_id`, `manager_phone_no`, `manager_desc`, `worker_id`, `updatedAt`, `createdAt`) VALUES
(1, 'Wise Neosco', '123456', 1, 1, '1234567890', 'This is Super admin user haveing all the rights', '1s1vn3n4t3l', NULL, '2023-01-11 12:26:25.559'),
(2, 'Company Person', '123456', 2, 2, '123456', 'This is admin user having all the rights but can not delete the super admin', 'x0c87tmtmf', '2023-01-11 12:41:49.735', '2023-01-11 12:27:13.215'),
(3, 'Dr.Principal', '123456', 2, 3, '123456', 'This is the Heigher Authority of the Institution all right exept Devices management', 'k4bdmvjn1n', NULL, '2023-01-11 12:42:50.761'),
(4, 'Mr.Teacher', '123456', 3, 4, '123456', 'This is the teacher, rights related to report only', 'y6guxewdnj', NULL, '2023-01-11 12:43:47.583'),
(5, 'Mr.Student', '123456789', 4, 5, '1234567890', 'Student rights only', 'fcfdb7m1mf', NULL, '2023-01-11 12:44:30.162');

-- --------------------------------------------------------

--
-- Table structure for table `wg_manager_group`
--

CREATE TABLE `wg_manager_group` (
  `group_id` int(11) NOT NULL,
  `group_name` varchar(100) NOT NULL,
  `group_desc` varchar(255) NOT NULL,
  `updatedAt` datetime(3) DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `wg_manager_group`
--

INSERT INTO `wg_manager_group` (`group_id`, `group_name`, `group_desc`, `updatedAt`, `createdAt`) VALUES
(1, 'Super Admin', 'This is super admin. This has all the rights', NULL, '2023-01-11 12:22:41.200'),
(2, 'Admin', 'Admin have all right. but can not see super admin and can not delete super admin.', NULL, '2023-01-11 12:23:31.739'),
(3, 'Principal', 'This is heighr Authority of the institution . this can not have devices management rights', NULL, '2023-01-11 12:24:25.448'),
(4, 'Faculty', 'This have only few rights related to reports', NULL, '2023-01-11 12:24:49.376'),
(5, 'Students', 'Students have only sheet booking and cancelation rights', NULL, '2023-01-11 12:25:41.101');

-- --------------------------------------------------------

--
-- Table structure for table `wg_name_group_mst`
--

CREATE TABLE `wg_name_group_mst` (
  `group_no` int(11) NOT NULL,
  `group_type` char(1) NOT NULL,
  `description` varchar(100) NOT NULL,
  `group_name` varchar(50) NOT NULL,
  `worker_id` int(11) DEFAULT NULL,
  `updatedAt` datetime(3) DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `wg_name_group_mst`
--

INSERT INTO `wg_name_group_mst` (`group_no`, `group_type`, `description`, `group_name`, `worker_id`, `updatedAt`, `createdAt`) VALUES
(1, 'S', 'for status check', 'Group A', 1, NULL, '2023-01-11 12:46:14.304'),
(2, 'D', 'for statistics', 'Group B', 2, NULL, '2023-01-11 12:46:51.128');

-- --------------------------------------------------------

--
-- Table structure for table `_prisma_migrations`
--

CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) NOT NULL,
  `checksum` varchar(64) NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) NOT NULL,
  `logs` text DEFAULT NULL,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `applied_steps_count` int(10) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `_prisma_migrations`
--

INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES
('0965e67c-ce79-4b00-b5e4-9f55912120b0', 'bbcb94d7cbc2c18f3edae0445f7a9776721a7471cd0b61ccd086519cd7f3d1c1', '2023-01-11 15:26:52.783', '20230111152652_init', NULL, NULL, '2023-01-11 15:26:52.752', 1),
('0a02958d-7e58-4805-97c5-f8e451a8ab36', 'a83734e027ff6382d1681c35c13fb3da0a986b61ff2ffdc8a8c5468e9b75e84d', '2023-01-11 15:16:16.612', '20230111151616_init', NULL, NULL, '2023-01-11 15:16:16.308', 1),
('280a8a9f-1991-4102-9e7f-00bbac73d1c3', 'febd5a7e9d4b741ead21b982e5313331f5a711bffdb7da3635cec2d0395fa49d', '2023-01-11 15:44:05.476', '20230111154405_init', NULL, NULL, '2023-01-11 15:44:05.459', 1),
('6546f31f-4dfb-4944-be09-e927087b1a72', 'e1bcbe440c1991262cf85b753395821cb581964e1b83890e87cb18a7c653f9ab', '2023-01-12 06:19:44.679', '20230112061944_init', NULL, NULL, '2023-01-12 06:19:44.671', 1),
('96c6ecef-e527-4b55-9720-d748d950729d', '175c202cc312b3ae2c7c0ba7618e044ffe66a36f088c2d74ac2b4731d1b94154', '2023-01-11 15:24:25.615', '20230111152425_init', NULL, NULL, '2023-01-11 15:24:25.594', 1),
('f7cadb97-9952-454b-a52b-d9f476f2f6a3', '2c4fe29ef9fba9d152118b1d08abb41b9d164b48a52d7f24b9a15b2fd63d3d69', '2023-01-12 06:16:09.500', '20230112061609_init', NULL, NULL, '2023-01-12 06:16:09.476', 1),
('fe3cb988-e02a-4fda-b038-4db79f035bdc', '823b7e6817a896f76b3c41310575f8be5bdc19e44d41abb4165e4bcdd881bb6d', '2023-01-11 16:08:40.741', '20230111160840_init', NULL, NULL, '2023-01-11 16:08:40.707', 1),
('ffe551bf-2f2c-4477-9785-61551aa1887d', 'ddfe7fa9e4aeea4e404ee4c25ec8f55b19c773e671e7e8a5bdedd38df180df7d', '2023-01-11 12:19:59.267', '20230111121959_init', NULL, NULL, '2023-01-11 12:19:59.218', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `commands`
--
ALTER TABLE `commands`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `devices`
--
ALTER TABLE `devices`
  ADD PRIMARY KEY (`id`),
  ADD KEY `devices_org_id_fkey` (`org_id`),
  ADD KEY `devices_device_typ_fkey` (`device_typ`),
  ADD KEY `devices_door_id_fkey` (`door_id`);

--
-- Indexes for table `device_log`
--
ALTER TABLE `device_log`
  ADD PRIMARY KEY (`id`),
  ADD KEY `device_log_org_id_fkey` (`org_id`),
  ADD KEY `device_log_device_id_fkey` (`device_id`),
  ADD KEY `device_log_door_id_fkey` (`door_id`),
  ADD KEY `device_log_user_id_fkey` (`user_id`);

--
-- Indexes for table `device_type`
--
ALTER TABLE `device_type`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `doors`
--
ALTER TABLE `doors`
  ADD PRIMARY KEY (`id`),
  ADD KEY `doors_org_id_fkey` (`org_id`);

--
-- Indexes for table `organization`
--
ALTER TABLE `organization`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `organization_group`
--
ALTER TABLE `organization_group`
  ADD PRIMARY KEY (`id`),
  ADD KEY `organization_group_org_id_fkey` (`org_id`);

--
-- Indexes for table `permission`
--
ALTER TABLE `permission`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `rfid_card`
--
ALTER TABLE `rfid_card`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `user_id_rfid_card_id_key` (`id`,`rfid_card_id`),
  ADD KEY `user_org_id_fkey` (`org_id`),
  ADD KEY `user_user_group_id_fkey` (`user_group_id`),
  ADD KEY `user_rfid_card_id_fkey` (`rfid_card_id`);

--
-- Indexes for table `user_group`
--
ALTER TABLE `user_group`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_group_org_id_fkey` (`org_id`),
  ADD KEY `user_group_permission_id_fkey` (`permission_id`);

--
-- Indexes for table `wg_local_config`
--
ALTER TABLE `wg_local_config`
  ADD PRIMARY KEY (`pc_no`);

--
-- Indexes for table `wg_manager`
--
ALTER TABLE `wg_manager`
  ADD PRIMARY KEY (`manager_id`),
  ADD UNIQUE KEY `wg_manager_manager_id_group_id_key` (`manager_id`,`group_id`),
  ADD KEY `wg_manager_group_id_fkey` (`group_id`);

--
-- Indexes for table `wg_manager_group`
--
ALTER TABLE `wg_manager_group`
  ADD PRIMARY KEY (`group_id`);

--
-- Indexes for table `wg_name_group_mst`
--
ALTER TABLE `wg_name_group_mst`
  ADD PRIMARY KEY (`group_no`),
  ADD UNIQUE KEY `wg_name_group_mst_group_no_group_type_key` (`group_no`,`group_type`),
  ADD KEY `wg_name_group_mst_worker_id_fkey` (`worker_id`);

--
-- Indexes for table `_prisma_migrations`
--
ALTER TABLE `_prisma_migrations`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `commands`
--
ALTER TABLE `commands`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `devices`
--
ALTER TABLE `devices`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `device_log`
--
ALTER TABLE `device_log`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `device_type`
--
ALTER TABLE `device_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `doors`
--
ALTER TABLE `doors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `organization`
--
ALTER TABLE `organization`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `organization_group`
--
ALTER TABLE `organization_group`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `permission`
--
ALTER TABLE `permission`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `rfid_card`
--
ALTER TABLE `rfid_card`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `user_group`
--
ALTER TABLE `user_group`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `wg_local_config`
--
ALTER TABLE `wg_local_config`
  MODIFY `pc_no` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `wg_manager`
--
ALTER TABLE `wg_manager`
  MODIFY `manager_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `wg_manager_group`
--
ALTER TABLE `wg_manager_group`
  MODIFY `group_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `wg_name_group_mst`
--
ALTER TABLE `wg_name_group_mst`
  MODIFY `group_no` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `devices`
--
ALTER TABLE `devices`
  ADD CONSTRAINT `devices_device_typ_fkey` FOREIGN KEY (`device_typ`) REFERENCES `device_type` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `devices_door_id_fkey` FOREIGN KEY (`door_id`) REFERENCES `doors` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `devices_org_id_fkey` FOREIGN KEY (`org_id`) REFERENCES `organization` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `device_log`
--
ALTER TABLE `device_log`
  ADD CONSTRAINT `device_log_device_id_fkey` FOREIGN KEY (`device_id`) REFERENCES `devices` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `device_log_door_id_fkey` FOREIGN KEY (`door_id`) REFERENCES `doors` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `device_log_org_id_fkey` FOREIGN KEY (`org_id`) REFERENCES `organization` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `device_log_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `doors`
--
ALTER TABLE `doors`
  ADD CONSTRAINT `doors_org_id_fkey` FOREIGN KEY (`org_id`) REFERENCES `organization` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `organization_group`
--
ALTER TABLE `organization_group`
  ADD CONSTRAINT `organization_group_org_id_fkey` FOREIGN KEY (`org_id`) REFERENCES `organization` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `user_org_id_fkey` FOREIGN KEY (`org_id`) REFERENCES `organization` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `user_rfid_card_id_fkey` FOREIGN KEY (`rfid_card_id`) REFERENCES `rfid_card` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `user_user_group_id_fkey` FOREIGN KEY (`user_group_id`) REFERENCES `user_group` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `user_group`
--
ALTER TABLE `user_group`
  ADD CONSTRAINT `user_group_org_id_fkey` FOREIGN KEY (`org_id`) REFERENCES `organization` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `user_group_permission_id_fkey` FOREIGN KEY (`permission_id`) REFERENCES `permission` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `wg_manager`
--
ALTER TABLE `wg_manager`
  ADD CONSTRAINT `wg_manager_group_id_fkey` FOREIGN KEY (`group_id`) REFERENCES `wg_manager_group` (`group_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `wg_name_group_mst`
--
ALTER TABLE `wg_name_group_mst`
  ADD CONSTRAINT `wg_name_group_mst_worker_id_fkey` FOREIGN KEY (`worker_id`) REFERENCES `wg_manager` (`manager_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
