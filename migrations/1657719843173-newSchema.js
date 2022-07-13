const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class newSchema1657719843173 {
    name = 'newSchema1657719843173'

    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`city\` (\`city_id\` int NOT NULL AUTO_INCREMENT, \`city\` varchar(255) NOT NULL, PRIMARY KEY (\`city_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`neighborhood\` (\`neighborhood_id\` int NOT NULL AUTO_INCREMENT, \`neighborhood\` varchar(255) NOT NULL, \`cityCityId\` int NULL, PRIMARY KEY (\`neighborhood_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`users_favorites\` (\`usersFavoriteId\` int NOT NULL AUTO_INCREMENT, \`userId\` int NOT NULL, \`placeId\` int NOT NULL, \`creationDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`userUserId\` int NULL, \`placePlaceId\` int NULL, PRIMARY KEY (\`usersFavoriteId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`place\` (\`place_id\` int NOT NULL AUTO_INCREMENT, \`title\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, \`approved\` tinyint NOT NULL DEFAULT 0, \`phone\` int NULL, \`website\` varchar(255) NULL, \`instagram\` varchar(255) NULL, \`Sunday\` varchar(255) NOT NULL, \`Monday\` varchar(255) NOT NULL, \`Tuesday\` varchar(255) NOT NULL, \`Wednesday\` varchar(255) NOT NULL, \`Thursday\` varchar(255) NOT NULL, \`Friday\` varchar(255) NOT NULL, \`Saturday\` varchar(255) NOT NULL, \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`creatorIdUserId\` int NULL, \`categoryCategoryId\` int NULL, PRIMARY KEY (\`place_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`comment\` (\`comment_id\` int NOT NULL AUTO_INCREMENT, \`comment\` varchar(255) NOT NULL, \`CreatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`userUserId\` int NULL, \`placePlaceId\` int NULL, PRIMARY KEY (\`comment_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user\` (\`user_id\` int NOT NULL AUTO_INCREMENT, \`username\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, PRIMARY KEY (\`user_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`category\` (\`category_id\` int NOT NULL AUTO_INCREMENT, \`category\` varchar(255) NOT NULL, PRIMARY KEY (\`category_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`images\` (\`image_id\` int NOT NULL AUTO_INCREMENT, \`image\` varchar(255) NOT NULL, \`image_owner\` varchar(255) NOT NULL, \`placePlaceId\` int NULL, PRIMARY KEY (\`image_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`image\` (\`image_id\` int NOT NULL AUTO_INCREMENT, \`image\` varchar(255) NOT NULL, \`image_owner\` varchar(255) NOT NULL, \`placePlaceId\` int NULL, PRIMARY KEY (\`image_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`sub_category\` (\`sub_category_id\` int NOT NULL AUTO_INCREMENT, \`sub_category\` varchar(255) NOT NULL, \`categoryCategoryId\` int NULL, PRIMARY KEY (\`sub_category_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user_favorite_time\` (\`testId\` int NOT NULL, \`dateFavorite\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`userUserId\` int NULL, \`placePlaceId\` int NULL, PRIMARY KEY (\`testId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`admin\` (\`admin_id\` int NOT NULL AUTO_INCREMENT, \`userUserId\` int NULL, UNIQUE INDEX \`REL_c446b7836cdf28fc0056aa555c\` (\`userUserId\`), PRIMARY KEY (\`admin_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`owner\` (\`owner_id\` int NOT NULL AUTO_INCREMENT, \`userUserId\` int NULL, UNIQUE INDEX \`REL_4744792d711aae190f17626d63\` (\`userUserId\`), PRIMARY KEY (\`owner_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`place_neighborhoods_neighborhood\` (\`placePlaceId\` int NOT NULL, \`neighborhoodNeighborhoodId\` int NOT NULL, INDEX \`IDX_4d87f6a8ea0a5e3a3ca4bed206\` (\`placePlaceId\`), INDEX \`IDX_0ee897d3b490f944a29ed275e2\` (\`neighborhoodNeighborhoodId\`), PRIMARY KEY (\`placePlaceId\`, \`neighborhoodNeighborhoodId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`preferences\` (\`userUserId\` int NOT NULL, \`categoryCategoryId\` int NOT NULL, INDEX \`IDX_85fa29bcd821d8f06ff35c9c58\` (\`userUserId\`), INDEX \`IDX_d02ca836ffca10cc7ad40fc29c\` (\`categoryCategoryId\`), PRIMARY KEY (\`userUserId\`, \`categoryCategoryId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`users_favorites\` DROP COLUMN \`placeId\``);
        await queryRunner.query(`ALTER TABLE \`users_favorites\` ADD \`placeId\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`users_favorites\` ADD \`PlaceId\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`users_favorites\` ADD \`updateDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`neighborhood\` ADD CONSTRAINT \`FK_cde635af9710efd35a294156c2a\` FOREIGN KEY (\`cityCityId\`) REFERENCES \`city\`(\`city_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`users_favorites\` ADD CONSTRAINT \`FK_15e50df8181977bc11070870a23\` FOREIGN KEY (\`userUserId\`) REFERENCES \`user\`(\`user_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`users_favorites\` ADD CONSTRAINT \`FK_0f240c6440619a1dbd1fa5cb9ff\` FOREIGN KEY (\`placePlaceId\`) REFERENCES \`place\`(\`place_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`place\` ADD CONSTRAINT \`FK_929a7c7b86d04b2b0d5648323e1\` FOREIGN KEY (\`creatorIdUserId\`) REFERENCES \`user\`(\`user_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`place\` ADD CONSTRAINT \`FK_88e4534391eab0f1615d233ac6d\` FOREIGN KEY (\`categoryCategoryId\`) REFERENCES \`category\`(\`category_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`comment\` ADD CONSTRAINT \`FK_1a0a9c69d17cfb196d090858bc8\` FOREIGN KEY (\`userUserId\`) REFERENCES \`user\`(\`user_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`comment\` ADD CONSTRAINT \`FK_a577d4dbfe9157695c865b53731\` FOREIGN KEY (\`placePlaceId\`) REFERENCES \`place\`(\`place_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`images\` ADD CONSTRAINT \`FK_684ad89237c25924a2bc50ce3dd\` FOREIGN KEY (\`placePlaceId\`) REFERENCES \`place\`(\`place_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`image\` ADD CONSTRAINT \`FK_79412bb0d321c89dce4a7fd52a6\` FOREIGN KEY (\`placePlaceId\`) REFERENCES \`place\`(\`place_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`sub_category\` ADD CONSTRAINT \`FK_216ef90ffdeecddbe39c73a27b0\` FOREIGN KEY (\`categoryCategoryId\`) REFERENCES \`category\`(\`category_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`user_favorite_time\` ADD CONSTRAINT \`FK_a330ac8f252a00345c93394953f\` FOREIGN KEY (\`userUserId\`) REFERENCES \`user\`(\`user_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`user_favorite_time\` ADD CONSTRAINT \`FK_f43f5cc7b287c9a8638a992a9a3\` FOREIGN KEY (\`placePlaceId\`) REFERENCES \`place\`(\`place_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`admin\` ADD CONSTRAINT \`FK_c446b7836cdf28fc0056aa555c7\` FOREIGN KEY (\`userUserId\`) REFERENCES \`user\`(\`user_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`owner\` ADD CONSTRAINT \`FK_4744792d711aae190f17626d636\` FOREIGN KEY (\`userUserId\`) REFERENCES \`user\`(\`user_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`place_neighborhoods_neighborhood\` ADD CONSTRAINT \`FK_4d87f6a8ea0a5e3a3ca4bed206f\` FOREIGN KEY (\`placePlaceId\`) REFERENCES \`place\`(\`place_id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`place_neighborhoods_neighborhood\` ADD CONSTRAINT \`FK_0ee897d3b490f944a29ed275e20\` FOREIGN KEY (\`neighborhoodNeighborhoodId\`) REFERENCES \`neighborhood\`(\`neighborhood_id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`preferences\` ADD CONSTRAINT \`FK_85fa29bcd821d8f06ff35c9c58a\` FOREIGN KEY (\`userUserId\`) REFERENCES \`user\`(\`user_id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`preferences\` ADD CONSTRAINT \`FK_d02ca836ffca10cc7ad40fc29c2\` FOREIGN KEY (\`categoryCategoryId\`) REFERENCES \`category\`(\`category_id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`preferences\` DROP FOREIGN KEY \`FK_d02ca836ffca10cc7ad40fc29c2\``);
        await queryRunner.query(`ALTER TABLE \`preferences\` DROP FOREIGN KEY \`FK_85fa29bcd821d8f06ff35c9c58a\``);
        await queryRunner.query(`ALTER TABLE \`place_neighborhoods_neighborhood\` DROP FOREIGN KEY \`FK_0ee897d3b490f944a29ed275e20\``);
        await queryRunner.query(`ALTER TABLE \`place_neighborhoods_neighborhood\` DROP FOREIGN KEY \`FK_4d87f6a8ea0a5e3a3ca4bed206f\``);
        await queryRunner.query(`ALTER TABLE \`owner\` DROP FOREIGN KEY \`FK_4744792d711aae190f17626d636\``);
        await queryRunner.query(`ALTER TABLE \`admin\` DROP FOREIGN KEY \`FK_c446b7836cdf28fc0056aa555c7\``);
        await queryRunner.query(`ALTER TABLE \`user_favorite_time\` DROP FOREIGN KEY \`FK_f43f5cc7b287c9a8638a992a9a3\``);
        await queryRunner.query(`ALTER TABLE \`user_favorite_time\` DROP FOREIGN KEY \`FK_a330ac8f252a00345c93394953f\``);
        await queryRunner.query(`ALTER TABLE \`sub_category\` DROP FOREIGN KEY \`FK_216ef90ffdeecddbe39c73a27b0\``);
        await queryRunner.query(`ALTER TABLE \`image\` DROP FOREIGN KEY \`FK_79412bb0d321c89dce4a7fd52a6\``);
        await queryRunner.query(`ALTER TABLE \`images\` DROP FOREIGN KEY \`FK_684ad89237c25924a2bc50ce3dd\``);
        await queryRunner.query(`ALTER TABLE \`comment\` DROP FOREIGN KEY \`FK_a577d4dbfe9157695c865b53731\``);
        await queryRunner.query(`ALTER TABLE \`comment\` DROP FOREIGN KEY \`FK_1a0a9c69d17cfb196d090858bc8\``);
        await queryRunner.query(`ALTER TABLE \`place\` DROP FOREIGN KEY \`FK_88e4534391eab0f1615d233ac6d\``);
        await queryRunner.query(`ALTER TABLE \`place\` DROP FOREIGN KEY \`FK_929a7c7b86d04b2b0d5648323e1\``);
        await queryRunner.query(`ALTER TABLE \`users_favorites\` DROP FOREIGN KEY \`FK_0f240c6440619a1dbd1fa5cb9ff\``);
        await queryRunner.query(`ALTER TABLE \`users_favorites\` DROP FOREIGN KEY \`FK_15e50df8181977bc11070870a23\``);
        await queryRunner.query(`ALTER TABLE \`neighborhood\` DROP FOREIGN KEY \`FK_cde635af9710efd35a294156c2a\``);
        await queryRunner.query(`ALTER TABLE \`users_favorites\` DROP COLUMN \`updateDate\``);
        await queryRunner.query(`ALTER TABLE \`users_favorites\` DROP COLUMN \`PlaceId\``);
        await queryRunner.query(`ALTER TABLE \`users_favorites\` DROP COLUMN \`placeId\``);
        await queryRunner.query(`ALTER TABLE \`users_favorites\` ADD \`placeId\` int NOT NULL`);
        await queryRunner.query(`DROP INDEX \`IDX_d02ca836ffca10cc7ad40fc29c\` ON \`preferences\``);
        await queryRunner.query(`DROP INDEX \`IDX_85fa29bcd821d8f06ff35c9c58\` ON \`preferences\``);
        await queryRunner.query(`DROP TABLE \`preferences\``);
        await queryRunner.query(`DROP INDEX \`IDX_0ee897d3b490f944a29ed275e2\` ON \`place_neighborhoods_neighborhood\``);
        await queryRunner.query(`DROP INDEX \`IDX_4d87f6a8ea0a5e3a3ca4bed206\` ON \`place_neighborhoods_neighborhood\``);
        await queryRunner.query(`DROP TABLE \`place_neighborhoods_neighborhood\``);
        await queryRunner.query(`DROP INDEX \`REL_4744792d711aae190f17626d63\` ON \`owner\``);
        await queryRunner.query(`DROP TABLE \`owner\``);
        await queryRunner.query(`DROP INDEX \`REL_c446b7836cdf28fc0056aa555c\` ON \`admin\``);
        await queryRunner.query(`DROP TABLE \`admin\``);
        await queryRunner.query(`DROP TABLE \`user_favorite_time\``);
        await queryRunner.query(`DROP TABLE \`sub_category\``);
        await queryRunner.query(`DROP TABLE \`image\``);
        await queryRunner.query(`DROP TABLE \`images\``);
        await queryRunner.query(`DROP TABLE \`category\``);
        await queryRunner.query(`DROP TABLE \`user\``);
        await queryRunner.query(`DROP TABLE \`comment\``);
        await queryRunner.query(`DROP TABLE \`place\``);
        await queryRunner.query(`DROP TABLE \`users_favorites\``);
        await queryRunner.query(`DROP TABLE \`neighborhood\``);
        await queryRunner.query(`DROP TABLE \`city\``);
    }
}
