import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'tipo_documentos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('tipoDocumento').unique()
      table.integer('user_id').unsigned().references('id').inTable('user_models').onDelete('CASCADE')
      table.integer('tipoDocumento_id').unsigned().references('id').inTable('tipo_documentos').onDelete('CASCADE')
      table.string('documento').unique()
      table.string('descDocumento')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamps(true, true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
