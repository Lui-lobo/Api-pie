import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'

import Documento from './Documento'

export default class TipoDocumento extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  /*@column()
  public tipoDocumento: string*/

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Documento)
  tipoDocumento: BelongsTo<typeof Documento>

}
