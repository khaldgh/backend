const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class newMigration1662231424492 {
    name = 'newMigration1662231424492'

    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`subcategory\` (\`subcategory_id\` int NOT NULL AUTO_INCREMENT, \`subcategory\` varchar(255) NOT NULL, \`categoryCategoryId\` int NULL, PRIMARY KEY (\`subcategory_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tags\` (\`subcategorySubcategoryId\` int NOT NULL, \`placePlaceId\` int NOT NULL, INDEX \`IDX_16d1dd219ec0f4f30605707ab2\` (\`subcategorySubcategoryId\`), INDEX \`IDX_6f2b7c82a1f21c1dd039a558d2\` (\`placePlaceId\`), PRIMARY KEY (\`subcategorySubcategoryId\`, \`placePlaceId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`users_favorites\` ADD CONSTRAINT \`FK_0f240c6440619a1dbd1fa5cb9ff\` FOREIGN KEY (\`placePlaceId\`) REFERENCES \`place\`(\`place_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`subcategory\` ADD CONSTRAINT \`FK_3824ddfb10a22883c75fe46d0a4\` FOREIGN KEY (\`categoryCategoryId\`) REFERENCES \`category\`(\`category_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`preferences\` ADD CONSTRAINT \`FK_85fa29bcd821d8f06ff35c9c58a\` FOREIGN KEY (\`userUserId\`) REFERENCES \`user\`(\`user_id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`preferences\` ADD CONSTRAINT \`FK_d02ca836ffca10cc7ad40fc29c2\` FOREIGN KEY (\`categoryCategoryId\`) REFERENCES \`category\`(\`category_id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`tags\` ADD CONSTRAINT \`FK_16d1dd219ec0f4f30605707ab22\` FOREIGN KEY (\`subcategorySubcategoryId\`) REFERENCES \`subcategory\`(\`subcategory_id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`tags\` ADD CONSTRAINT \`FK_6f2b7c82a1f21c1dd039a558d2d\` FOREIGN KEY (\`placePlaceId\`) REFERENCES \`place\`(\`place_id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`tags\` DROP FOREIGN KEY \`FK_6f2b7c82a1f21c1dd039a558d2d\``);
        await queryRunner.query(`ALTER TABLE \`tags\` DROP FOREIGN KEY \`FK_16d1dd219ec0f4f30605707ab22\``);
        await queryRunner.query(`ALTER TABLE \`preferences\` DROP FOREIGN KEY \`FK_d02ca836ffca10cc7ad40fc29c2\``);
        await queryRunner.query(`ALTER TABLE \`preferences\` DROP FOREIGN KEY \`FK_85fa29bcd821d8f06ff35c9c58a\``);
        await queryRunner.query(`ALTER TABLE \`subcategory\` DROP FOREIGN KEY \`FK_3824ddfb10a22883c75fe46d0a4\``);
        await queryRunner.query(`ALTER TABLE \`users_favorites\` DROP FOREIGN KEY \`FK_0f240c6440619a1dbd1fa5cb9ff\``);
        await queryRunner.query(`DROP INDEX \`IDX_6f2b7c82a1f21c1dd039a558d2\` ON \`tags\``);
        await queryRunner.query(`DROP INDEX \`IDX_16d1dd219ec0f4f30605707ab2\` ON \`tags\``);
        await queryRunner.query(`DROP TABLE \`tags\``);
        await queryRunner.query(`DROP TABLE \`subcategory\``);
    }
}
