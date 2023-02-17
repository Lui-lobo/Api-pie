import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'user_models'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('id_status', 2)
      table.integer('id_tipo_user', 2)
      table.string('login')
      table.string('password')
      table.string('hash_pass')

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
