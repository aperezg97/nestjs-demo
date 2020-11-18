import { MigrationInterface, QueryRunner, Table, TableIndex } from 'typeorm';

export class CreateProductsTable1605675343558 implements MigrationInterface {
  async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'products',
        columns: [
          {
            name: 'id',
            type: 'int',
            isGenerated: true,
            generationStrategy: 'increment',
            isPrimary: true,
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'description',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'isActive',
            type: 'int',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
      true,
    );

    await queryRunner.createIndex(
      'products',
      new TableIndex({
        name: 'IDX_PRODUCT_NAME',
        columnNames: ['name'],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // const table = await queryRunner.getTable("question");
    // const foreignKey = table.foreignKeys.find(fk => fk.columnNames.indexOf("questionId") !== -1);
    await queryRunner.dropTable('products');
  }
}
