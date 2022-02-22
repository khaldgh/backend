const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class newMigration1645559172139 {
    name = 'newMigration1645559172139'

    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`user\` (\`user_id\` int NOT NULL AUTO_INCREMENT, \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`admin\` tinyint NOT NULL DEFAULT 0, PRIMARY KEY (\`user_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`city\` (\`city\` varchar(255) NOT NULL, PRIMARY KEY (\`city\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`neighborhood\` (\`neighborhood\` varchar(255) NOT NULL, \`cityCity\` varchar(255) NULL, PRIMARY KEY (\`neighborhood\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`opening_hours\` (\`opening_hours_id\` int NOT NULL AUTO_INCREMENT, \`Sunday\` varchar(255) NOT NULL, \`Monday\` varchar(255) NOT NULL, \`Tuesday\` varchar(255) NOT NULL, \`Wednesday\` varchar(255) NOT NULL, \`Thursday\` varchar(255) NOT NULL, \`Friday\` varchar(255) NOT NULL, \`Saturday\` varchar(255) NOT NULL, PRIMARY KEY (\`opening_hours_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`place\` (\`place_id\` int NOT NULL AUTO_INCREMENT, \`title\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, \`signature\` varchar(255) NOT NULL, \`isFavorite\` tinyint NOT NULL, \`approved\` tinyint NOT NULL DEFAULT 0, \`phone\` int NOT NULL, \`website\` varchar(255) NOT NULL, \`instagram\` varchar(255) NOT NULL, \`subCategorySubCategory\` varchar(255) NULL, \`subCategory2SubCategory\` varchar(255) NULL, \`subCategory3SubCategory\` varchar(255) NULL, \`neighborhoodsNeighborhood\` varchar(255) NULL, \`userIdUserId\` int NULL, PRIMARY KEY (\`place_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`sub_category\` (\`sub_category\` varchar(255) NOT NULL, \`categoryCategory\` varchar(255) NULL, PRIMARY KEY (\`sub_category\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`category\` (\`category\` varchar(255) NOT NULL, PRIMARY KEY (\`category\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`images\` (\`image_id\` int NOT NULL AUTO_INCREMENT, \`image\` varchar(255) NOT NULL, \`image_owner\` varchar(255) NOT NULL, \`place_id\` int NOT NULL, PRIMARY KEY (\`image_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`neighborhood\` ADD CONSTRAINT \`FK_4e6fcf33e6761920d4186f9bfa6\` FOREIGN KEY (\`cityCity\`) REFERENCES \`city\`(\`city\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`place\` ADD CONSTRAINT \`FK_2b4c0f4805c091e15dc69ce204a\` FOREIGN KEY (\`subCategorySubCategory\`) REFERENCES \`sub_category\`(\`sub_category\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`place\` ADD CONSTRAINT \`FK_73fac2eb54fe4f1c32eaf9deabd\` FOREIGN KEY (\`subCategory2SubCategory\`) REFERENCES \`sub_category\`(\`sub_category\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`place\` ADD CONSTRAINT \`FK_9b6d27db6f6deee0824b8c42783\` FOREIGN KEY (\`subCategory3SubCategory\`) REFERENCES \`sub_category\`(\`sub_category\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`place\` ADD CONSTRAINT \`FK_4d6456c3a7529a8c4df12b7fe4e\` FOREIGN KEY (\`neighborhoodsNeighborhood\`) REFERENCES \`neighborhood\`(\`neighborhood\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`place\` ADD CONSTRAINT \`FK_9159e49ca216a184de85129d803\` FOREIGN KEY (\`userIdUserId\`) REFERENCES \`user\`(\`user_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`sub_category\` ADD CONSTRAINT \`FK_31e212f9d67c520d7ea8b922a6a\` FOREIGN KEY (\`categoryCategory\`) REFERENCES \`category\`(\`category\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`sub_category\` DROP FOREIGN KEY \`FK_31e212f9d67c520d7ea8b922a6a\``);
        await queryRunner.query(`ALTER TABLE \`place\` DROP FOREIGN KEY \`FK_9159e49ca216a184de85129d803\``);
        await queryRunner.query(`ALTER TABLE \`place\` DROP FOREIGN KEY \`FK_4d6456c3a7529a8c4df12b7fe4e\``);
        await queryRunner.query(`ALTER TABLE \`place\` DROP FOREIGN KEY \`FK_9b6d27db6f6deee0824b8c42783\``);
        await queryRunner.query(`ALTER TABLE \`place\` DROP FOREIGN KEY \`FK_73fac2eb54fe4f1c32eaf9deabd\``);
        await queryRunner.query(`ALTER TABLE \`place\` DROP FOREIGN KEY \`FK_2b4c0f4805c091e15dc69ce204a\``);
        await queryRunner.query(`ALTER TABLE \`neighborhood\` DROP FOREIGN KEY \`FK_4e6fcf33e6761920d4186f9bfa6\``);
        await queryRunner.query(`DROP TABLE \`images\``);
        await queryRunner.query(`DROP TABLE \`category\``);
        await queryRunner.query(`DROP TABLE \`sub_category\``);
        await queryRunner.query(`DROP TABLE \`place\``);
        await queryRunner.query(`DROP TABLE \`opening_hours\``);
        await queryRunner.query(`DROP TABLE \`neighborhood\``);
        await queryRunner.query(`DROP TABLE \`city\``);
        await queryRunner.query(`DROP TABLE \`user\``);
    }
}
