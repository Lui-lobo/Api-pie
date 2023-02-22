import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo} from '@ioc:Adonis/Lucid/Orm'

import UserModel from './UserModel'
import Documento from './Documento'
import Contato from './Contato'

export default class Instituicao extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public user_id: number

  @column()
  public nome_instituicao: string

  @column()
  public nome_Ceo: string

  @column()
  public documento_user?: number

  @column()
  public contatos_user?: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
  
  @belongsTo(() => UserModel, {
    localKey: 'user_id'
  })
  public user: BelongsTo<typeof UserModel>

  @belongsTo(() => Documento, {
    localKey: 'documento_user'
  }) 
  public documento: BelongsTo<typeof Documento>

  @belongsTo(() => Contato, {
    localKey: 'contatos_user'
  }) 
  public contato: BelongsTo<typeof Contato>
}
