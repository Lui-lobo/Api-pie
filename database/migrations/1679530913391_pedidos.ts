import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'pedidos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('user_id').unsigned().references('id').inTable('user_models').onDelete('CASCADE')
      table.integer('tipo_pedido_id').unsigned().references('id').inTable('tipo_pedidos').onDelete('CASCADE')
      table.string('nome_pedido')
      table.string('valor_do_pedido')
      table.integer('forma_de_pagamento_id').unsigned().references('id').inTable('forma_de_pagamentos').onDelete('CASCADE')
      table.integer('id_status', 10)

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
