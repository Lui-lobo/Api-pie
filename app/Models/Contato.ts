import { DateTime } from 'luxon'
import { BaseModel, column, BelongsTo, belongsTo } from '@ioc:Adonis/Lucid/Orm'

import UserModel from './UserModel'
import TipoContato from './TipoContato'

export default class Contato extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public user_id?: number

  @column()
  public tipo_contatoes_id?: number

  @column()
  public contato: string

  @column()
  public desc: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => UserModel, {
    localKey: 'user_id'
  })
  public user: BelongsTo<typeof UserModel>

  @belongsTo(() => TipoContato, {
    localKey: 'tipo_contatoes_id'
  })
  public tipoContatos: BelongsTo<typeof TipoContato>

}
