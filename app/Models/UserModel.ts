import { DateTime } from 'luxon'
import { BaseModel, beforeSave, column } from '@ioc:Adonis/Lucid/Orm'
import Hash from '@ioc:Adonis/Core/Hash'

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
  public PassWord: string 

  @column()
  public HashPass: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  public static async hashPassword (user: UserModel) {
    if(user.$dirty.PassWord) {
      user.PassWord = await Hash.make(user.PassWord)
    }
  }
}

