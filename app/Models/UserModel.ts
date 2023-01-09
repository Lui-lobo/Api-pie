import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'


export default class UserModel extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public idStatus: number

  @column()
  public idTipoUser: number

  @column()
  public Login: string

  @column()
  public PassWord: string

  @column()
  public HashPass: string


  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
