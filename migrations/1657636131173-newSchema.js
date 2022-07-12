const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class newSchema1657636131173 {
    name = 'newSchema1657636131173'

    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`users_favorites\` CHANGE \`placeId\` \`PlaceId\` int NOT NULL`);
        await queryRunner.query(`CREATE TABLE \`user_favorite_time\` (\`testId\` int NOT NULL, \`dateFavorite\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`userUserId\` int NULL, \`placePlaceId\` int NULL, PRIMARY KEY (\`testId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`users_favorites\` DROP COLUMN \`PlaceId\``);
        await queryRunner.query(`ALTER TABLE \`users_favorites\` DROP COLUMN \`updateDate\``);
        await queryRunner.query(`ALTER TABLE \`users_favorites\` ADD \`placeId\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`users_favorites\` ADD \`PlaceId\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`users_favorites\` ADD \`updateDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`users_favorites\` ADD CONSTRAINT \`FK_0f240c6440619a1dbd1fa5cb9ff\` FOREIGN KEY (\`placePlaceId\`) REFERENCES \`place\`(\`place_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`images\` ADD CONSTRAINT \`FK_684ad89237c25924a2bc50ce3dd\` FOREIGN KEY (\`placePlaceId\`) REFERENCES \`place\`(\`place_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`image\` ADD CONSTRAINT \`FK_79412bb0d321c89dce4a7fd52a6\` FOREIGN KEY (\`placePlaceId\`) REFERENCES \`place\`(\`place_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`sub_category\` ADD CONSTRAINT \`FK_216ef90ffdeecddbe39c73a27b0\` FOREIGN KEY (\`categoryCategoryId\`) REFERENCES \`category\`(\`category_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`user_favorite_time\` ADD CONSTRAINT \`FK_a330ac8f252a00345c93394953f\` FOREIGN KEY (\`userUserId\`) REFERENCES \`user\`(\`user_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`user_favorite_time\` ADD CONSTRAINT \`FK_f43f5cc7b287c9a8638a992a9a3\` FOREIGN KEY (\`placePlaceId\`) REFERENCES \`place\`(\`place_id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`preferences\` ADD CONSTRAINT \`FK_85fa29bcd821d8f06ff35c9c58a\` FOREIGN KEY (\`userUserId\`) REFERENCES \`user\`(\`user_id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`preferences\` ADD CONSTRAINT \`FK_d02ca836ffca10cc7ad40fc29c2\` FOREIGN KEY (\`categoryCategoryId\`) REFERENCES \`category\`(\`category_id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`preferences\` DROP FOREIGN KEY \`FK_d02ca836ffca10cc7ad40fc29c2\``);
        await queryRunner.query(`ALTER TABLE \`preferences\` DROP FOREIGN KEY \`FK_85fa29bcd821d8f06ff35c9c58a\``);
        await queryRunner.query(`ALTER TABLE \`user_favorite_time\` DROP FOREIGN KEY \`FK_f43f5cc7b287c9a8638a992a9a3\``);
        await queryRunner.query(`ALTER TABLE \`user_favorite_time\` DROP FOREIGN KEY \`FK_a330ac8f252a00345c93394953f\``);
        await queryRunner.query(`ALTER TABLE \`sub_category\` DROP FOREIGN KEY \`FK_216ef90ffdeecddbe39c73a27b0\``);
        await queryRunner.query(`ALTER TABLE \`image\` DROP FOREIGN KEY \`FK_79412bb0d321c89dce4a7fd52a6\``);
        await queryRunner.query(`ALTER TABLE \`images\` DROP FOREIGN KEY \`FK_684ad89237c25924a2bc50ce3dd\``);
        await queryRunner.query(`ALTER TABLE \`users_favorites\` DROP FOREIGN KEY \`FK_0f240c6440619a1dbd1fa5cb9ff\``);
        await queryRunner.query(`ALTER TABLE \`users_favorites\` DROP COLUMN \`updateDate\``);
        await queryRunner.query(`ALTER TABLE \`users_favorites\` DROP COLUMN \`PlaceId\``);
        await queryRunner.query(`ALTER TABLE \`users_favorites\` DROP COLUMN \`placeId\``);
        await queryRunner.query(`ALTER TABLE \`users_favorites\` ADD \`updateDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`users_favorites\` ADD \`PlaceId\` int NOT NULL`);
        await queryRunner.query(`DROP TABLE \`user_favorite_time\``);
        await queryRunner.query(`ALTER TABLE \`users_favorites\` CHANGE \`PlaceId\` \`placeId\` int NOT NULL`);
    }
}
