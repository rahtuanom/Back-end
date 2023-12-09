-- AlterTable
ALTER TABLE `pemesanan` ADD COLUMN `adults` ENUM('NONE', 'CHILD_1', 'CHILD_2', 'CHILD_3', 'CHILD_4', 'CHILD_5') NOT NULL DEFAULT 'NONE',
    ADD COLUMN `rooms` ENUM('One', 'Two', 'Three', 'Four', 'Five') NOT NULL DEFAULT 'One',
    ADD COLUMN `type_room` ENUM('Daily', 'Family', 'Exclusive', 'Panoramic') NOT NULL DEFAULT 'Daily';
