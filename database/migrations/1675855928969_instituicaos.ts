import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'instituicaos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('user_id').unsigned().references('id').inTable('user_models').onDelete('CASCADE')
      table.string('nomeInstituicao').unique()
      table.string('nomeCeo')
      table.integer('documento_id').unsigned().references('id').inTable('documentos').onDelete('CASCADE')
      table.integer('contatos_id').unsigned().references('id').inTable('contatoes').onDelete('CASCADE')

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
