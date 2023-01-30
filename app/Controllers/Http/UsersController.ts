import {v4 as uuidv4} from 'uuid'

import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import UserModel from 'App/Models/UserModel'

import Application from '@ioc:Adonis/Core/Application'

export default class UsersController {

    private validationOptions = {
        types: ['image'],
        size: '2mb'
    }

    public async store({request, response}: HttpContextContract) {
      
        const body = request.body()

          /* Forma de conseguir requisitar a imagem e inserir ela corretamente no banco de dados */ 
          const image = request.file('image', this.validationOptions)

          if(image) {
              const imageName = `${uuidv4()}.${image.extname}`
  
              await image.move(Application.tmpPath('uploads'), {
                  name: imageName,
              })
              
              /* Linha Responsavel pela inserção da imagem no body, comentada devido não haver necessidade na mesma na criação de usuario inicial */
              //body.image = imageName
          }

        const user = await UserModel.create(body)

        response.status(201)

        return {
            message: "Usuario Criado com sucesso",
            data: user
        }
    }

    public async index() {

        const users = await UserModel.all();

        return {
            data: users
        }

    }

    public async show({params}: HttpContextContract) {

        const user = await UserModel.findOrFail(params.id);
        
        return {
            data: user,
        }

    }

    public async destroy({params}: HttpContextContract) {

        const user = await UserModel.findOrFail(params.id);

        await user.delete();
        
        return {
            message: 'usuario excluido com sucesso',
            data: user,
        }

    }

    public async update({params, request}: HttpContextContract) {

        const body = request.body()

        const user = await UserModel.findOrFail(params.id);

        user.PassWord = body.PassWord
        user.HashPass = body.HashPass

    }

}
