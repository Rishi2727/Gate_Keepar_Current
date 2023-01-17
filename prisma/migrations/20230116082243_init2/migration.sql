-- CreateTable
CREATE TABLE `devices_setup` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `friendlyName` VARCHAR(100) NOT NULL,
    `locationId` VARCHAR(100) NOT NULL,
    `manufacturer` VARCHAR(100) NOT NULL,
    `path` VARCHAR(100) NOT NULL,
    `pnpId` VARCHAR(100) NOT NULL,
    `productId` VARCHAR(100) NOT NULL,
    `serialNumber` VARCHAR(100) NOT NULL,
    `vendorId` VARCHAR(100) NOT NULL,
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `updatedAt` DATETIME(3) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
