import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Contato from 'App/Models/Contato';

export default class ContatoesController {

    public async handle({request, response, auth}: HttpContextContract) {
        
        if(auth.isLoggedIn) {
            const body = request.body()

            const user = auth.user?.id;

            console.log(user)
            
            const contato = await Contato.create({ user_id: auth.user?.id, ...body })
            response.status(201)

            return {
                message: "Contato Inserido com sucesso",
                data: contato
            }
        }

    }

    public async store({request, response, auth}: HttpContextContract) {

        const body = request.body()
        const user = auth.user?.id;
        
        const contato = await Contato.create(body)
        response.status(201)

        return {
            message: "Documento Inserido com sucesso",
            data: contato
        }
    }

    public async index() {

        const contatos = await Contato.all();

        return {
            data: contatos
        }
    }

    public async show({params}: HttpContextContract){

        const contato = await Contato.findOrFail(params.id);

        return {
            data: contato
        }

    }

    public async destroy({params}: HttpContextContract) {

        const contato = await Contato.findOrFail(params.id);

        await contato.delete();

        return {
            message: 'Documento excluido com sucesso',
            data: contato,
        }

    }

    public async update({params, request}: HttpContextContract) {

        const body = request.body()

        const contato = await Contato.findOrFail(params.id);

        contato.contato = body.contato
        contato.desc = body.desc

    }

}
