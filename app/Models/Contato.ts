import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'

import UserModel from './UserModel'
import TipoContato from './TipoContato'

export default class Contato extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @hasOne(() => UserModel)
  public userModel: HasOne<typeof UserModel>

  @hasMany(() => TipoContato)
  public tipoContato: HasMany<typeof TipoContato>

  @column()
  public contato: string

  @column()
  public desc: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
