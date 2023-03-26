import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import UserModel from './UserModel'
import TipoPedido from './TipoPedido'
import FormaDePagamento from './FormaDePagamento'

export default class Pedido extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public user_id?: number

  @column()
  public tipo_pedido_id?: number

  @column()
  public nome_pedido:string
  
  @column()
  public valor_do_pedido:string

  @column()
  public forma_de_pagamento_id?: number

  @column()
  public id_status: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => UserModel, {
    localKey: 'user_id'
  })
  public user: BelongsTo<typeof UserModel>

  @belongsTo(() => TipoPedido, {
    localKey: 'tipo_pedido_id'
  })
  public tipoPedido: BelongsTo<typeof TipoPedido>

  @belongsTo(() => FormaDePagamento, {
    localKey: 'forma_de_pagamento_id'
  })
  public formaDePagamento: BelongsTo<typeof FormaDePagamento>
}
