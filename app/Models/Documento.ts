import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm'

import UserModel from './UserModel'
import TipoDocumento from './TipoDocumento'

export default class Documento extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @hasOne(() => UserModel)
  public userModel: HasOne<typeof UserModel>

  @hasMany(() => TipoDocumento, {
    foreignKey: 'id'
  })
  public tipoDocumentos: HasMany<typeof TipoDocumento>

  @column()
  public documento: string

  @column()
  public descDocumento: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
