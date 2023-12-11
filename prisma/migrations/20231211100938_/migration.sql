-- CreateTable
CREATE TABLE `Pemesanan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `check_in` DATETIME(3) NOT NULL,
    `check_out` DATETIME(3) NOT NULL,
    `adults` ENUM('NONE', 'ADULT_1', 'ADULT_2', 'ADULT_3', 'ADULT_4', 'ADULT_5', 'ADULT_6') NOT NULL DEFAULT 'NONE',
    `childs` ENUM('NONE', 'CHILD_1', 'CHILD_2', 'CHILD_3', 'CHILD_4', 'CHILD_5') NOT NULL DEFAULT 'NONE',
    `rooms` ENUM('One', 'Two', 'Three', 'Four', 'Five') NOT NULL DEFAULT 'One',
    `type_room` ENUM('Daily', 'Family', 'Exclusive', 'Panoramic', 'Honey') NOT NULL DEFAULT 'Daily',

    UNIQUE INDEX `Pemesanan_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Room` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `harga` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Contactus` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `firstName` VARCHAR(191) NOT NULL,
    `lastName` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `mobileNumber` VARCHAR(191) NOT NULL,
    `message` VARCHAR(191) NOT NULL,
    `cratedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
