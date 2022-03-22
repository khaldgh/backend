const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class addedSubCategoryId1647083482666 {
    name = 'addedSubCategoryId1647083482666'

    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`sub_category\` (\`sub_category_id\` int NOT NULL AUTO_INCREMENT, \`sub_category\` varchar(255) NOT NULL, \`categoryCategoryId\` int NULL, PRIMARY KEY (\`sub_category_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`place_sub_categories_sub_category\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`place_sub_categories_sub_category\` ADD PRIMARY KEY (\`placePlaceId\`)`);
        await queryRunner.query(`ALTER TABLE \`place_sub_categories_sub_category\` DROP COLUMN \`subCategorySubCategoryId\``);
        await queryRunner.query(`ALTER TABLE \`place_sub_categories_sub_category\` ADD \`subCategorySubCategoryId\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`place_sub_categories_sub_category\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`place_sub_categories_sub_category\` ADD PRIMARY KEY (\`placePlaceId\`, \`subCategorySubCategoryId\`)`);
        await queryRunner.query(`ALTER TABLE \`place_subcategories_sub_category\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`place_subcategories_sub_category\` ADD PRIMARY KEY (\`placePlaceId\`)`);
        await queryRunner.query(`ALTER TABLE \`place_subcategories_sub_category\` DROP COLUMN \`subCategorySubCategoryId\``);
        await queryRunner.query(`ALTER TABLE \`place_subcategories_sub_category\` ADD \`subCategorySubCategoryId\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`place_subcategories_sub_category\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`place_subcategories_sub_category\` ADD PRIMARY KEY (\`placePlaceId\`, \`subCategorySubCategoryId\`)`);
        await queryRunner.query(`CREATE INDEX \`IDX_35992f1507c30ea5be9685e723\` ON \`place_sub_categories_sub_category\` (\`subCategorySubCategoryId\`)`);
        await queryRunner.query(`CREATE INDEX \`IDX_7fc35eeb9518487a75e68ab0e7\` ON \`place_subcategories_sub_category\` (\`subCategorySubCategoryId\`)`);
        await queryRunner.query(`ALTER TABLE \`sub_category\` ADD CONSTRAINT \`FK_216ef90ffdeecddbe39c73a27b0\` FOREIGN KEY (\`categoryCategoryId\`) REFERENCES \`category\`(\`category_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`place_sub_categories_sub_category\` ADD CONSTRAINT \`FK_35992f1507c30ea5be9685e7231\` FOREIGN KEY (\`subCategorySubCategoryId\`) REFERENCES \`sub_category\`(\`sub_category_id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`place_subcategories_sub_category\` ADD CONSTRAINT \`FK_7fc35eeb9518487a75e68ab0e74\` FOREIGN KEY (\`subCategorySubCategoryId\`) REFERENCES \`sub_category\`(\`sub_category_id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`place_subcategories_sub_category\` DROP FOREIGN KEY \`FK_7fc35eeb9518487a75e68ab0e74\``);
        await queryRunner.query(`ALTER TABLE \`place_sub_categories_sub_category\` DROP FOREIGN KEY \`FK_35992f1507c30ea5be9685e7231\``);
        await queryRunner.query(`ALTER TABLE \`sub_category\` DROP FOREIGN KEY \`FK_216ef90ffdeecddbe39c73a27b0\``);
        await queryRunner.query(`DROP INDEX \`IDX_7fc35eeb9518487a75e68ab0e7\` ON \`place_subcategories_sub_category\``);
        await queryRunner.query(`DROP INDEX \`IDX_35992f1507c30ea5be9685e723\` ON \`place_sub_categories_sub_category\``);
        await queryRunner.query(`ALTER TABLE \`place_subcategories_sub_category\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`place_subcategories_sub_category\` ADD PRIMARY KEY (\`placePlaceId\`)`);
        await queryRunner.query(`ALTER TABLE \`place_subcategories_sub_category\` DROP COLUMN \`subCategorySubCategoryId\``);
        await queryRunner.query(`ALTER TABLE \`place_subcategories_sub_category\` ADD \`subCategorySubCategoryId\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`place_subcategories_sub_category\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`place_subcategories_sub_category\` ADD PRIMARY KEY (\`placePlaceId\`, \`subCategorySubCategoryId\`)`);
        await queryRunner.query(`ALTER TABLE \`place_sub_categories_sub_category\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`place_sub_categories_sub_category\` ADD PRIMARY KEY (\`placePlaceId\`)`);
        await queryRunner.query(`ALTER TABLE \`place_sub_categories_sub_category\` DROP COLUMN \`subCategorySubCategoryId\``);
        await queryRunner.query(`ALTER TABLE \`place_sub_categories_sub_category\` ADD \`subCategorySubCategoryId\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`place_sub_categories_sub_category\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`place_sub_categories_sub_category\` ADD PRIMARY KEY (\`placePlaceId\`, \`subCategorySubCategoryId\`)`);
        await queryRunner.query(`DROP TABLE \`sub_category\``);
    }
}
