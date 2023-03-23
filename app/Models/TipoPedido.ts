import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Pedido from './Pedido'

export default class TipoPedido extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public tipoPedido: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Pedido, {
    foreignKey: 'tipo_pedido_id'
  })
  public pedidos: HasMany<typeof Pedido>
}
