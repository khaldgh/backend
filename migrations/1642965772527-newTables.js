const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class newTables1642965772527 {
    name = 'newTables1642965772527'

    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`place\` CHANGE \`time\` \`time\` datetime NOT NULL`);
    }

    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`place\` CHANGE \`time\` \`time\` datetime NULL`);
    }
}
