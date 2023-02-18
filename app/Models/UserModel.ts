import { DateTime } from 'luxon'
import { BaseModel, beforeSave, column, BelongsTo, belongsTo, hasMany, HasMany, } from '@ioc:Adonis/Lucid/Orm'
import Hash from '@ioc:Adonis/Core/Hash'
import Documento from './Documento'

export default class UserModel extends BaseModel {
  
  @column({ isPrimary: true })
  public id: number

  @column()
  public idStatus: number

  @column()
  public idTipoUser: number

  @column()
  public Login: string

  @column({ serializeAs: null })
  public password: string 

  @column()
  public HashPass: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  public static async hashPassword (user: UserModel) {
    if(user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }

  @hasMany(() => Documento, {
    foreignKey: 'user_id'
  })
  public documentos: HasMany<typeof Documento>

}

