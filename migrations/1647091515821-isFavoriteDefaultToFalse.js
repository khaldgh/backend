const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class isFavoriteDefaultToFalse1647091515821 {
    name = 'isFavoriteDefaultToFalse1647091515821'

    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`place\` CHANGE \`isFavorite\` \`isFavorite\` tinyint NOT NULL DEFAULT 0`);
    }

    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`place\` CHANGE \`isFavorite\` \`isFavorite\` tinyint NOT NULL`);
    }
}
