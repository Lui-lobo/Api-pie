import { DateTime } from 'luxon'
import { BaseModel, column, hasOne, HasOne, HasMany, hasMany} from '@ioc:Adonis/Lucid/Orm'

import UserModel from './UserModel'
import Documento from './Documento'
import Contato from './Contato'

export default class Instituicao extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @hasOne(() => UserModel)
  public userModel: HasOne<typeof UserModel>

  @column()
  public nomeInstituicao: string

  @column()
  public nomeCeo: string

  @hasMany(() => Documento)
  public documento: HasMany<typeof Documento>

  @hasMany(() => Contato)
  public contato: HasMany<typeof Contato>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
