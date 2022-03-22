const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class test1647971521484 {
    name = 'test1647971521484'

    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`city\` (\`city_id\` int NOT NULL AUTO_INCREMENT, \`city\` varchar(255) NOT NULL, PRIMARY KEY (\`city_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`neighborhood\` (\`neighborhood_id\` int NOT NULL AUTO_INCREMENT, \`neighborhood\` varchar(255) NOT NULL, \`cityCityId\` int NULL, PRIMARY KEY (\`neighborhood_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`image\` (\`image_id\` int NOT NULL AUTO_INCREMENT, \`image\` varchar(255) NOT NULL, \`image_owner\` varchar(255) NOT NULL, \`placePlaceId\` int NULL, PRIMARY KEY (\`image_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`sub_category\` (\`sub_category_id\` int NOT NULL AUTO_INCREMENT, \`sub_category\` varchar(255) NOT NULL, \`categoryCategoryId\` int NULL, PRIMARY KEY (\`sub_category_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`place\` (\`place_id\` int NOT NULL AUTO_INCREMENT, \`title\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, \`signature\` varchar(255) NOT NULL, \`isFavorite\` tinyint NOT NULL DEFAULT 0, \`approved\` tinyint NOT NULL DEFAULT 0, \`phone\` int NULL, \`website\` varchar(255) NULL, \`instagram\` varchar(255) NULL, \`Sunday\` varchar(255) NOT NULL, \`Monday\` varchar(255) NOT NULL, \`Tuesday\` varchar(255) NOT NULL, \`Wednesday\` varchar(255) NOT NULL, \`Thursday\` varchar(255) NOT NULL, \`Friday\` varchar(255) NOT NULL, \`Saturday\` varchar(255) NOT NULL, \`creatorIdUserId\` int NULL, PRIMARY KEY (\`place_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`comment\` (\`comment_id\` int NOT NULL AUTO_INCREMENT, \`comment\` varchar(255) NOT NULL, \`userUserId\` int NULL, \`placePlaceId\` int NULL, PRIMARY KEY (\`comment_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user\` (\`user_id\` int NOT NULL AUTO_INCREMENT, \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, PRIMARY KEY (\`user_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`category\` (\`category_id\` int NOT NULL AUTO_INCREMENT, \`category\` varchar(255) NOT NULL, PRIMARY KEY (\`category_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`admin\` (\`admin_id\` int NOT NULL AUTO_INCREMENT, \`userUserId\` int NULL, UNIQUE INDEX \`REL_c446b7836cdf28fc0056aa555c\` (\`userUserId\`), PRIMARY KEY (\`admin_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`owner\` (\`owner_id\` int NOT NULL AUTO_INCREMENT, \`userUserId\` int NULL, UNIQUE INDEX \`REL_4744792d711aae190f17626d63\` (\`userUserId\`), PRIMARY KEY (\`owner_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`place_subcategories_sub_category\` (\`placePlaceId\` int NOT NULL, \`subCategorySubCategoryId\` int NOT NULL, INDEX \`IDX_55e7829ddf604c9738e5724a44\` (\`placePlaceId\`), INDEX \`IDX_7fc35eeb9518487a75e68ab0e7\` (\`subCategorySubCategoryId\`), PRIMARY KEY (\`placePlaceId\`, \`subCategorySubCategoryId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`place_neighborhoods_neighborhood\` (\`placePlaceId\` int NOT NULL, \`neighborhoodNeighborhoodId\` int NOT NULL, INDEX \`IDX_4d87f6a8ea0a5e3a3ca4bed206\` (\`placePlaceId\`), INDEX \`IDX_0ee897d3b490f944a29ed275e2\` (\`neighborhoodNeighborhoodId\`), PRIMARY KEY (\`placePlaceId\`, \`neighborhoodNeighborhoodId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`place_users_user\` (\`placePlaceId\` int NOT NULL, \`userUserId\` int NOT NULL, INDEX \`IDX_6f3860df20891bf00789173a7f\` (\`placePlaceId\`), INDEX \`IDX_614c36612ca208a5718cb72295\` (\`userUserId\`), PRIMARY KEY (\`placePlaceId\`, \`userUserId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user_categories_category\` (\`userUserId\` int NOT NULL, \`categoryCategoryId\` int NOT NULL, INDEX \`IDX_414ba3d7a80f75e6a7b02679c1\` (\`userUserId\`), INDEX \`IDX_501c949ac576bcae060a3d7367\` (\`categoryCategoryId\`), PRIMARY KEY (\`userUserId\`, \`categoryCategoryId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user_places_place\` (\`userUserId\` int NOT NULL, \`placePlaceId\` int NOT NULL, INDEX \`IDX_bd64695edf658ff49e449903b4\` (\`userUserId\`), INDEX \`IDX_8dc14946ce82f0050bc9c4f429\` (\`placePlaceId\`), PRIMARY KEY (\`userUserId\`, \`placePlaceId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`neighborhood\` ADD CONSTRAINT \`FK_cde635af9710efd35a294156c2a\` FOREIGN KEY (\`cityCityId\`) REFERENCES \`city\`(\`city_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`image\` ADD CONSTRAINT \`FK_79412bb0d321c89dce4a7fd52a6\` FOREIGN KEY (\`placePlaceId\`) REFERENCES \`place\`(\`place_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`sub_category\` ADD CONSTRAINT \`FK_216ef90ffdeecddbe39c73a27b0\` FOREIGN KEY (\`categoryCategoryId\`) REFERENCES \`category\`(\`category_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`place\` ADD CONSTRAINT \`FK_929a7c7b86d04b2b0d5648323e1\` FOREIGN KEY (\`creatorIdUserId\`) REFERENCES \`user\`(\`user_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`comment\` ADD CONSTRAINT \`FK_1a0a9c69d17cfb196d090858bc8\` FOREIGN KEY (\`userUserId\`) REFERENCES \`user\`(\`user_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`comment\` ADD CONSTRAINT \`FK_a577d4dbfe9157695c865b53731\` FOREIGN KEY (\`placePlaceId\`) REFERENCES \`place\`(\`place_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`admin\` ADD CONSTRAINT \`FK_c446b7836cdf28fc0056aa555c7\` FOREIGN KEY (\`userUserId\`) REFERENCES \`user\`(\`user_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`owner\` ADD CONSTRAINT \`FK_4744792d711aae190f17626d636\` FOREIGN KEY (\`userUserId\`) REFERENCES \`user\`(\`user_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`place_subcategories_sub_category\` ADD CONSTRAINT \`FK_55e7829ddf604c9738e5724a447\` FOREIGN KEY (\`placePlaceId\`) REFERENCES \`place\`(\`place_id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`place_subcategories_sub_category\` ADD CONSTRAINT \`FK_7fc35eeb9518487a75e68ab0e74\` FOREIGN KEY (\`subCategorySubCategoryId\`) REFERENCES \`sub_category\`(\`sub_category_id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`place_neighborhoods_neighborhood\` ADD CONSTRAINT \`FK_4d87f6a8ea0a5e3a3ca4bed206f\` FOREIGN KEY (\`placePlaceId\`) REFERENCES \`place\`(\`place_id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`place_neighborhoods_neighborhood\` ADD CONSTRAINT \`FK_0ee897d3b490f944a29ed275e20\` FOREIGN KEY (\`neighborhoodNeighborhoodId\`) REFERENCES \`neighborhood\`(\`neighborhood_id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`place_users_user\` ADD CONSTRAINT \`FK_6f3860df20891bf00789173a7f6\` FOREIGN KEY (\`placePlaceId\`) REFERENCES \`place\`(\`place_id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`place_users_user\` ADD CONSTRAINT \`FK_614c36612ca208a5718cb722953\` FOREIGN KEY (\`userUserId\`) REFERENCES \`user\`(\`user_id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`user_categories_category\` ADD CONSTRAINT \`FK_414ba3d7a80f75e6a7b02679c1d\` FOREIGN KEY (\`userUserId\`) REFERENCES \`user\`(\`user_id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`user_categories_category\` ADD CONSTRAINT \`FK_501c949ac576bcae060a3d73670\` FOREIGN KEY (\`categoryCategoryId\`) REFERENCES \`category\`(\`category_id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`user_places_place\` ADD CONSTRAINT \`FK_bd64695edf658ff49e449903b4a\` FOREIGN KEY (\`userUserId\`) REFERENCES \`user\`(\`user_id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`user_places_place\` ADD CONSTRAINT \`FK_8dc14946ce82f0050bc9c4f429b\` FOREIGN KEY (\`placePlaceId\`) REFERENCES \`place\`(\`place_id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`user_places_place\` DROP FOREIGN KEY \`FK_8dc14946ce82f0050bc9c4f429b\``);
        await queryRunner.query(`ALTER TABLE \`user_places_place\` DROP FOREIGN KEY \`FK_bd64695edf658ff49e449903b4a\``);
        await queryRunner.query(`ALTER TABLE \`user_categories_category\` DROP FOREIGN KEY \`FK_501c949ac576bcae060a3d73670\``);
        await queryRunner.query(`ALTER TABLE \`user_categories_category\` DROP FOREIGN KEY \`FK_414ba3d7a80f75e6a7b02679c1d\``);
        await queryRunner.query(`ALTER TABLE \`place_users_user\` DROP FOREIGN KEY \`FK_614c36612ca208a5718cb722953\``);
        await queryRunner.query(`ALTER TABLE \`place_users_user\` DROP FOREIGN KEY \`FK_6f3860df20891bf00789173a7f6\``);
        await queryRunner.query(`ALTER TABLE \`place_neighborhoods_neighborhood\` DROP FOREIGN KEY \`FK_0ee897d3b490f944a29ed275e20\``);
        await queryRunner.query(`ALTER TABLE \`place_neighborhoods_neighborhood\` DROP FOREIGN KEY \`FK_4d87f6a8ea0a5e3a3ca4bed206f\``);
        await queryRunner.query(`ALTER TABLE \`place_subcategories_sub_category\` DROP FOREIGN KEY \`FK_7fc35eeb9518487a75e68ab0e74\``);
        await queryRunner.query(`ALTER TABLE \`place_subcategories_sub_category\` DROP FOREIGN KEY \`FK_55e7829ddf604c9738e5724a447\``);
        await queryRunner.query(`ALTER TABLE \`owner\` DROP FOREIGN KEY \`FK_4744792d711aae190f17626d636\``);
        await queryRunner.query(`ALTER TABLE \`admin\` DROP FOREIGN KEY \`FK_c446b7836cdf28fc0056aa555c7\``);
        await queryRunner.query(`ALTER TABLE \`comment\` DROP FOREIGN KEY \`FK_a577d4dbfe9157695c865b53731\``);
        await queryRunner.query(`ALTER TABLE \`comment\` DROP FOREIGN KEY \`FK_1a0a9c69d17cfb196d090858bc8\``);
        await queryRunner.query(`ALTER TABLE \`place\` DROP FOREIGN KEY \`FK_929a7c7b86d04b2b0d5648323e1\``);
        await queryRunner.query(`ALTER TABLE \`sub_category\` DROP FOREIGN KEY \`FK_216ef90ffdeecddbe39c73a27b0\``);
        await queryRunner.query(`ALTER TABLE \`image\` DROP FOREIGN KEY \`FK_79412bb0d321c89dce4a7fd52a6\``);
        await queryRunner.query(`ALTER TABLE \`neighborhood\` DROP FOREIGN KEY \`FK_cde635af9710efd35a294156c2a\``);
        await queryRunner.query(`DROP INDEX \`IDX_8dc14946ce82f0050bc9c4f429\` ON \`user_places_place\``);
        await queryRunner.query(`DROP INDEX \`IDX_bd64695edf658ff49e449903b4\` ON \`user_places_place\``);
        await queryRunner.query(`DROP TABLE \`user_places_place\``);
        await queryRunner.query(`DROP INDEX \`IDX_501c949ac576bcae060a3d7367\` ON \`user_categories_category\``);
        await queryRunner.query(`DROP INDEX \`IDX_414ba3d7a80f75e6a7b02679c1\` ON \`user_categories_category\``);
        await queryRunner.query(`DROP TABLE \`user_categories_category\``);
        await queryRunner.query(`DROP INDEX \`IDX_614c36612ca208a5718cb72295\` ON \`place_users_user\``);
        await queryRunner.query(`DROP INDEX \`IDX_6f3860df20891bf00789173a7f\` ON \`place_users_user\``);
        await queryRunner.query(`DROP TABLE \`place_users_user\``);
        await queryRunner.query(`DROP INDEX \`IDX_0ee897d3b490f944a29ed275e2\` ON \`place_neighborhoods_neighborhood\``);
        await queryRunner.query(`DROP INDEX \`IDX_4d87f6a8ea0a5e3a3ca4bed206\` ON \`place_neighborhoods_neighborhood\``);
        await queryRunner.query(`DROP TABLE \`place_neighborhoods_neighborhood\``);
        await queryRunner.query(`DROP INDEX \`IDX_7fc35eeb9518487a75e68ab0e7\` ON \`place_subcategories_sub_category\``);
        await queryRunner.query(`DROP INDEX \`IDX_55e7829ddf604c9738e5724a44\` ON \`place_subcategories_sub_category\``);
        await queryRunner.query(`DROP TABLE \`place_subcategories_sub_category\``);
        await queryRunner.query(`DROP INDEX \`REL_4744792d711aae190f17626d63\` ON \`owner\``);
        await queryRunner.query(`DROP TABLE \`owner\``);
        await queryRunner.query(`DROP INDEX \`REL_c446b7836cdf28fc0056aa555c\` ON \`admin\``);
        await queryRunner.query(`DROP TABLE \`admin\``);
        await queryRunner.query(`DROP TABLE \`category\``);
        await queryRunner.query(`DROP TABLE \`user\``);
        await queryRunner.query(`DROP TABLE \`comment\``);
        await queryRunner.query(`DROP TABLE \`place\``);
        await queryRunner.query(`DROP TABLE \`sub_category\``);
        await queryRunner.query(`DROP TABLE \`image\``);
        await queryRunner.query(`DROP TABLE \`neighborhood\``);
        await queryRunner.query(`DROP TABLE \`city\``);
    }
}
