import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Contato from './Contato'

export default class TipoContato extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public tipoContato: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Contato, {
    foreignKey: 'tipo_contatoes_id'
  })
  public contatos: HasMany<typeof Contato>
}
