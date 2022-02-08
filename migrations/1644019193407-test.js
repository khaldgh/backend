// const { MigrationInterface, QueryRunner } = require("typeorm");

// module.exports = class test1644019193407 {
//     name = 'test1644019193407'

//     async up(queryRunner) {
//         await queryRunner.query(`CREATE TABLE \`user\` (\`user_id\` int NOT NULL AUTO_INCREMENT, \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`admin\` tinyint NOT NULL DEFAULT 0, PRIMARY KEY (\`user_id\`)) ENGINE=InnoDB`);
//         await queryRunner.query(`CREATE TABLE \`neighborhood\` (\`neighborhood_id\` int NOT NULL AUTO_INCREMENT, \`neighborhood\` varchar(255) NOT NULL, \`city_id\` int NOT NULL, PRIMARY KEY (\`neighborhood_id\`)) ENGINE=InnoDB`);
//         await queryRunner.query(`CREATE TABLE \`opening_hours\` (\`opening_hours_id\` int NOT NULL AUTO_INCREMENT, \`Sunday\` varchar(255) NOT NULL, \`Monday\` varchar(255) NOT NULL, \`Tuesday\` varchar(255) NOT NULL, \`Wednesday\` varchar(255) NOT NULL, \`Thursday\` varchar(255) NOT NULL, \`Friday\` varchar(255) NOT NULL, \`Saturday\` varchar(255) NOT NULL, PRIMARY KEY (\`opening_hours_id\`)) ENGINE=InnoDB`);
//         await queryRunner.query(`CREATE TABLE \`place\` (\`place_id\` int NOT NULL AUTO_INCREMENT, \`title\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, \`signature\` varchar(255) NOT NULL, \`isFavorite\` tinyint NOT NULL, \`approved\` tinyint NOT NULL DEFAULT 0, \`phone\` int NOT NULL, \`website\` varchar(255) NOT NULL, \`instagram\` varchar(255) NOT NULL, \`subCategoryIdSubCategoryId\` int NULL, \`subCategoryId2SubCategoryId\` int NULL, \`subCategoryId3SubCategoryId\` int NULL, \`neighborhoodIdNeighborhoodId\` int NULL, \`userIdUserId\` int NULL, PRIMARY KEY (\`place_id\`)) ENGINE=InnoDB`);
//         await queryRunner.query(`CREATE TABLE \`sub_category\` (\`sub_category_id\` int NOT NULL AUTO_INCREMENT, \`sub_category\` varchar(255) NOT NULL, \`categoryCategoryId\` int NULL, PRIMARY KEY (\`sub_category_id\`)) ENGINE=InnoDB`);
//         await queryRunner.query(`CREATE TABLE \`category\` (\`category_id\` int NOT NULL AUTO_INCREMENT, \`category\` varchar(255) NOT NULL, PRIMARY KEY (\`category_id\`)) ENGINE=InnoDB`);
//         await queryRunner.query(`CREATE TABLE \`city\` (\`city_id\` int NOT NULL AUTO_INCREMENT, \`city\` varchar(255) NOT NULL, PRIMARY KEY (\`city_id\`)) ENGINE=InnoDB`);
//         await queryRunner.query(`CREATE TABLE \`images\` (\`image_id\` int NOT NULL AUTO_INCREMENT, \`image\` varchar(255) NOT NULL, \`image_owner\` varchar(255) NOT NULL, \`place_id\` int NOT NULL, PRIMARY KEY (\`image_id\`)) ENGINE=InnoDB`);
//         await queryRunner.query(`ALTER TABLE \`place\` ADD CONSTRAINT \`FK_08d9403cef8ea06878067ddfa1e\` FOREIGN KEY (\`subCategoryIdSubCategoryId\`) REFERENCES \`sub_category\`(\`sub_category_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
//         await queryRunner.query(`ALTER TABLE \`place\` ADD CONSTRAINT \`FK_6102a5264b92707fd07cde41ee9\` FOREIGN KEY (\`subCategoryId2SubCategoryId\`) REFERENCES \`sub_category\`(\`sub_category_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
//         await queryRunner.query(`ALTER TABLE \`place\` ADD CONSTRAINT \`FK_55a3305ada82fe2007cebe9ebb8\` FOREIGN KEY (\`subCategoryId3SubCategoryId\`) REFERENCES \`sub_category\`(\`sub_category_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
//         await queryRunner.query(`ALTER TABLE \`place\` ADD CONSTRAINT \`FK_6f1aaa7d2cad8742a2975ff34ea\` FOREIGN KEY (\`neighborhoodIdNeighborhoodId\`) REFERENCES \`neighborhood\`(\`neighborhood_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
//         await queryRunner.query(`ALTER TABLE \`place\` ADD CONSTRAINT \`FK_9159e49ca216a184de85129d803\` FOREIGN KEY (\`userIdUserId\`) REFERENCES \`user\`(\`user_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
//         await queryRunner.query(`ALTER TABLE \`sub_category\` ADD CONSTRAINT \`FK_216ef90ffdeecddbe39c73a27b0\` FOREIGN KEY (\`categoryCategoryId\`) REFERENCES \`category\`(\`category_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
//     }

//     async down(queryRunner) {
//         await queryRunner.query(`ALTER TABLE \`sub_category\` DROP FOREIGN KEY \`FK_216ef90ffdeecddbe39c73a27b0\``);
//         await queryRunner.query(`ALTER TABLE \`place\` DROP FOREIGN KEY \`FK_9159e49ca216a184de85129d803\``);
//         await queryRunner.query(`ALTER TABLE \`place\` DROP FOREIGN KEY \`FK_6f1aaa7d2cad8742a2975ff34ea\``);
//         await queryRunner.query(`ALTER TABLE \`place\` DROP FOREIGN KEY \`FK_55a3305ada82fe2007cebe9ebb8\``);
//         await queryRunner.query(`ALTER TABLE \`place\` DROP FOREIGN KEY \`FK_6102a5264b92707fd07cde41ee9\``);
//         await queryRunner.query(`ALTER TABLE \`place\` DROP FOREIGN KEY \`FK_08d9403cef8ea06878067ddfa1e\``);
//         await queryRunner.query(`DROP TABLE \`images\``);
//         await queryRunner.query(`DROP TABLE \`city\``);
//         await queryRunner.query(`DROP TABLE \`category\``);
//         await queryRunner.query(`DROP TABLE \`sub_category\``);
//         await queryRunner.query(`DROP TABLE \`place\``);
//         await queryRunner.query(`DROP TABLE \`opening_hours\``);
//         await queryRunner.query(`DROP TABLE \`neighborhood\``);
//         await queryRunner.query(`DROP TABLE \`user\``);
//     }
// }
