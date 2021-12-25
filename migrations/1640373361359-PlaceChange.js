const { MigrationInterface, QueryRunner } = require('typeorm');

module.exports = class PlaceChange1640373361359 {
  name = 'PlaceChange1640373361359';

  async up(queryRunner) {
    await queryRunner.query(
      `CREATE TABLE \`place\` (\`id\` int NOT NULL AUTO_INCREMENT, \`title\` varchar(255) NOT NULL, \`time\` datetime NOT NULL, \`category\` varchar(255) NOT NULL, \`image\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, \`isFavorite\` tinyint NOT NULL, \`approved\` tinyint NOT NULL DEFAULT 0, \`userId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`place\` ADD CONSTRAINT \`FK_f6bdcc6c120ebfeeb91e2187082\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  async down(queryRunner) {
    await queryRunner.query(
      `ALTER TABLE \`place\` DROP FOREIGN KEY \`FK_f6bdcc6c120ebfeeb91e2187082\``,
    );
    await queryRunner.query(`DROP TABLE \`place\``);
  }
};
