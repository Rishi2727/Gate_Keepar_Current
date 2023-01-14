-- CreateTable
CREATE TABLE `wg_local_config` (
    `pc_no` INTEGER NOT NULL AUTO_INCREMENT,
    `connection_type` INTEGER NOT NULL,
    `env_driver` VARCHAR(150) NOT NULL,
    `env_server` VARCHAR(150) NOT NULL,
    `env_dsn` VARCHAR(150) NOT NULL,
    `env_db_name` VARCHAR(150) NOT NULL,
    `env_dbq` VARCHAR(150) NOT NULL,
    `env_id` VARCHAR(150) NOT NULL,
    `env_pwd` VARCHAR(150) NOT NULL,
    `env_connection` VARCHAR(150) NOT NULL,
    `keep_connection` TINYINT NOT NULL,
    `dbms_type` VARCHAR(20) NOT NULL,
    `api_mode_use_yn` TINYINT NOT NULL,
    `api_mode_url` VARCHAR(150) NOT NULL,
    `worker` VARCHAR(50) NOT NULL,
    `update_date` VARCHAR(8) NOT NULL,
    `update_time` VARCHAR(8) NOT NULL,

    PRIMARY KEY (`pc_no`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wg_manager` (
    `manager_id` INTEGER NOT NULL AUTO_INCREMENT,
    `manager_name` VARCHAR(100) NOT NULL,
    `manager_pwd` VARCHAR(100) NOT NULL,
    `auth_id` INTEGER NOT NULL,
    `group_id` INTEGER NULL,
    `manager_phone_no` VARCHAR(50) NOT NULL,
    `manager_desc` VARCHAR(255) NOT NULL,
    `worker_id` VARCHAR(50) NOT NULL,
    `updatedAt` DATETIME(3) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `wg_manager_manager_id_group_id_key`(`manager_id`, `group_id`),
    PRIMARY KEY (`manager_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wg_manager_group` (
    `group_id` INTEGER NOT NULL AUTO_INCREMENT,
    `group_name` VARCHAR(100) NOT NULL,
    `group_desc` VARCHAR(255) NOT NULL,
    `updatedAt` DATETIME(3) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`group_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wg_name_group_mst` (
    `group_no` INTEGER NOT NULL AUTO_INCREMENT,
    `group_type` CHAR(1) NOT NULL,
    `description` VARCHAR(100) NOT NULL,
    `group_name` VARCHAR(50) NOT NULL,
    `worker_id` INTEGER NULL,
    `updatedAt` DATETIME(3) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `wg_name_group_mst_group_no_group_type_key`(`group_no`, `group_type`),
    PRIMARY KEY (`group_no`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `wg_manager` ADD CONSTRAINT `wg_manager_group_id_fkey` FOREIGN KEY (`group_id`) REFERENCES `wg_manager_group`(`group_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `wg_name_group_mst` ADD CONSTRAINT `wg_name_group_mst_worker_id_fkey` FOREIGN KEY (`worker_id`) REFERENCES `wg_manager`(`manager_id`) ON DELETE CASCADE ON UPDATE CASCADE;
