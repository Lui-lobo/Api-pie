import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'

import UserModel from './UserModel'
import TipoDocumento from './TipoDocumento'

export default class Documento extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  
  @column()
  public user_id?: number

  @hasMany(() => TipoDocumento)
  public tipoDocumento_id: HasMany<typeof TipoDocumento>

  @column()
  public documento: string

  @column()
  public descDocumento: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => UserModel, {
    localKey: 'user_id'
  })
  public user: BelongsTo<typeof UserModel>

}
