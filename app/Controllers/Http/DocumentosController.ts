import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Documento from 'App/Models/Documento'

import  Application  from '@adonisjs/core/build/standalone'

export default class DocumentosController {

    public async store({request, response}: HttpContextContract) {

        const body = request.body()
        
        const documento = await Documento.create(body)
        response.status(201)

        return {
            message: "Documento Inserido com sucesso",
            data: documento
        }
    }

    public async index() {

        const documentos = await Documento.all();

        return {
            data: documentos
        }
    }

    public async show({params}: HttpContextContract){

        const documento = await Documento.findOrFail(params.id);

        return {
            data: documento
        }

    }

    public async destroy({params}: HttpContextContract) {

        const documento = await Documento.findOrFail(params.id);

        await documento.delete();

        return {
            message: 'Documento excluido com sucesso',
            data: documento,
        }

    }

    public async update({params, request}: HttpContextContract) {

        const body = request.body()

        const documento = await Documento.findOrFail(params.id);

        documento.documento = body.documento
        documento.descDocumento = body.descDocumento

    }

}
