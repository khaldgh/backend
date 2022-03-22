const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class renamedSubcategoryInPlaceEntity1647093264207 {
    name = 'renamedSubcategoryInPlaceEntity1647093264207'

    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`place_subcategories_sub_category\` (\`placePlaceId\` int NOT NULL, \`subCategorySubCategoryId\` int NOT NULL, INDEX \`IDX_55e7829ddf604c9738e5724a44\` (\`placePlaceId\`), INDEX \`IDX_7fc35eeb9518487a75e68ab0e7\` (\`subCategorySubCategoryId\`), PRIMARY KEY (\`placePlaceId\`, \`subCategorySubCategoryId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`place_subcategories_sub_category\` ADD CONSTRAINT \`FK_55e7829ddf604c9738e5724a447\` FOREIGN KEY (\`placePlaceId\`) REFERENCES \`place\`(\`place_id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`place_subcategories_sub_category\` ADD CONSTRAINT \`FK_7fc35eeb9518487a75e68ab0e74\` FOREIGN KEY (\`subCategorySubCategoryId\`) REFERENCES \`sub_category\`(\`sub_category_id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`place_subcategories_sub_category\` DROP FOREIGN KEY \`FK_7fc35eeb9518487a75e68ab0e74\``);
        await queryRunner.query(`ALTER TABLE \`place_subcategories_sub_category\` DROP FOREIGN KEY \`FK_55e7829ddf604c9738e5724a447\``);
        await queryRunner.query(`DROP INDEX \`IDX_7fc35eeb9518487a75e68ab0e7\` ON \`place_subcategories_sub_category\``);
        await queryRunner.query(`DROP INDEX \`IDX_55e7829ddf604c9738e5724a44\` ON \`place_subcategories_sub_category\``);
        await queryRunner.query(`DROP TABLE \`place_subcategories_sub_category\``);
    }
}
